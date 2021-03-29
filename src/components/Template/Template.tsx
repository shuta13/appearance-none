import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import {
  BlogHost,
  BlogTitle,
  DateNow,
  DefaultJsonId,
  OgImageUrl,
} from '../../config';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Day } from '../Day/Day';
import { Nav } from '../Nav/Nav';
import { Tag } from '../Tag/Tag';
import styles from './Template.module.scss';
import {
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { SEO } from '../SEO';
import { generateSnippet } from '../../utils/snippet';

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
  prevSlug: string;
  nextSlug: string;
};

const markdown = new MarkdownIt({
  html: true,
  linkify: false,
});

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys, prevSlug, nextSlug } = props;
  return (
    <section className={styles.wrap}>
      <Day sys={sys} />
      <h1 className={styles.title}>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <Tag tagName={tag.sys.id} key={i} />
      ))}
      <article
        dangerouslySetInnerHTML={{ __html: markdown.render(fields.body) }}
        className={styles.blog_article}
      />
      <Nav prevSlug={prevSlug} nextSlug={nextSlug} />
      <p className={styles.share_btn_wrap}>
        <span className={styles.share_btn_box}>
          <TwitterShareButton
            url={`${BlogHost}/entry/${fields.slug}`}
            title={`${fields.title} | ${BlogTitle}`}
          >
            <TwitterIcon size="2rem" borderRadius={8} />
          </TwitterShareButton>
        </span>
        <span className={styles.share_btn_box}>
          <HatenaShareButton url={`${BlogHost}/entry/${fields.slug}`}>
            <HatenaIcon size="2rem" borderRadius={8} />
          </HatenaShareButton>
        </span>
      </p>
    </section>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
