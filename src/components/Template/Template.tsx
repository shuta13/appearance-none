// import { Nav } from '../Nav/Nav';
import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '../../config';
import { Day } from '../Day';
import styles from './Template.module.scss';
import { SEO } from '../SEO';
import { generateSnippet } from '../../utils/snippet';
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

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
};

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

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys } = props;

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
    // @ts-expect-error
    twttr.widgets.load(articleRef.current);
  }, []);

  return (
    <article className={styles.wrap} ref={articleRef}>
      <Day sys={sys} />
      <h1 className={styles.title}>{fields.title}</h1>
      <TagLinkContainer metadata={metadata} />
      <h2 className={styles.toc}>目次</h2>
      {fields?.body && <ToC fields={fields} />}
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
                style={tomorrow}
                language={match[1]}
                children={String(children).replace(/\n$/, '')}
                {...props}
              />
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
            <h2 id={`#${node.children[0].value}`} {...props}>
              <Heading node={node} />
            </h2>
          ),
          h3: ({ node, ...props }) => (
            <h3 id={`#${node.children[0].value}`} {...props}>
              <Heading node={node} />
            </h3>
          ),
          img: ({ src, alt }) => {
            if (typeof src !== 'string' || typeof alt !== 'string') return null;
            return (
              <>
                <img
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
        {fields.body}
      </ReactMarkdown>
      <ShareButtonContainer title={fields.title} slug={fields.slug} />
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

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  const title = fields.title;
  const description = generateSnippet(fields.body);

  const jsonLd: typeof DefaultJsonId = {
    title: title,
    description: description,
    url: BlogHost + `/entry/${fields.slug}`,
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
