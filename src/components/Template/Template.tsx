import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '../../config';
import { Day } from '../Day';
import styles from './Template.module.scss';
import { SEO } from '../SEO';
import { maskString } from '~/utils/maskString';
import { ShareButtonContainer } from '../ShareButtonContainer';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';
import { TagLinkContainer } from '../TagLinkContainer';
import { ToC } from '../ToC';
import rehypeRaw from 'rehype-raw';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PreviewImage } from '../PreviewImage';
import { Entries } from '~/usecases/getBlogData';
import Image from 'next/image';

declare global {
  interface Window {
    twttr: any;
  }
}

const Heading: React.FC<{ node: any }> = (props) => {
  const { node } = props;
  return (
    <a
      id={node.children[0].value}
      href={`#${node.children[0].value}`}
      className={styles.heading}
    >
      {node.children[0].value}
    </a>
  );
};

const Article: React.FC<Entries[number]> = ({ head, body }) => {
  const articleRef = useRef<HTMLElement | null>(null);

  const [clickedImage, setClickedImage] = useState(false);
  const [clickedImageProps, setClickedImageProps] = useState({
    src: '',
    alt: '',
  });
  const handleClickImage = useCallback(
    ({ src, alt }: { src: string; alt: string }) => {
      setClickedImageProps({ src, alt });
      setClickedImage((prev) => !prev);
    },
    [setClickedImageProps, setClickedImage]
  );
  const handleClickClosePreview = useCallback(() => {
    setClickedImage(false);
  }, [setClickedImage]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.twttr != null) {
      window.twttr.widgets.load(articleRef.current);
    }
  }, []);

  return (
    <article className={styles.wrap} ref={articleRef}>
      <Day head={head} />
      <h1 className={styles.title}>{head.title}</h1>
      <TagLinkContainer head={head} />
      <h2 className={styles.toc}>目次</h2>
      <ToC body={body} />
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className={styles.blog_article}
        remarkPlugins={[gfm]}
        components={{
          a: ({ children, href }) => {
            // @ts-ignore
            if (href?.match('http')) {
              return (
                <a
                  // @ts-ignore
                  href={href}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {children}
                </a>
              );
            }
            // @ts-ignore
            return <a href={href}>{children}</a>;
          },
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                // @ts-expect-error Avoid conflicting with JSX.IntrinsicElement types.
                style={tomorrow}
                language={match[1]}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1: ({ node, ...props }) => (
            <h1 {...props}>
              <Heading node={node} />
            </h1>
          ),
          h2: ({ node, ...props }) => (
            // @ts-expect-error Children should have value.
            <h2 id={`#${node.children[0].value}`} {...props}>
              <Heading node={node} />
            </h2>
          ),
          h3: ({ node, ...props }) => (
            // @ts-expect-error Children should have value.
            <h3 id={`#${node.children[0].value}`} {...props}>
              <Heading node={node} />
            </h3>
          ),
          img: ({ src, alt }) => {
            if (typeof src !== 'string' || typeof alt !== 'string') return null;
            return (
              <>
                <Image
                  width={560}
                  height={315}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  onClick={() => handleClickImage({ src, alt })}
                  tabIndex={0}
                  className={styles.image}
                />
              </>
            );
          },
        }}
      >
        {body.content.toString()}
      </ReactMarkdown>
      <ShareButtonContainer />
      {clickedImage && (
        <PreviewImage
          src={clickedImageProps.src}
          alt={clickedImageProps.alt}
          onClick={handleClickClosePreview}
        />
      )}
    </article>
  );
};

export const Template: React.FC<Entries[number]> = (props) => {
  const { head, body } = props;

  const title = head.title;
  const description = maskString('' /** @todo serialize body.content */);

  const jsonLd: typeof DefaultJsonId = {
    title: title,
    description: description,
    url: BlogHost + `/entry/${head.slug}`,
    imageUrl: OgImageUrl,
    updated: DateNow,
  };

  return (
    <>
      <SEO title={title} description={description} propsJsonLd={jsonLd} />
      <Article {...props} />
    </>
  );
};
