import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import { BlogHost, BlogTitle } from '../../config';
import Head from 'next/head';
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
    <main className={styles.wrap}>
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
      <span className={styles.share_btn_wrap}>
        <TwitterShareButton
          url={`${BlogHost}/entry/${fields.slug}`}
          title={`${fields.title} | ${BlogTitle}`}
        >
          <TwitterIcon size="2rem" borderRadius={8} />
        </TwitterShareButton>
      </span>
      <span className={styles.share_btn_wrap}>
        <HatenaShareButton url={`${BlogHost}/entry/${fields.slug}`}>
          <HatenaIcon size="2rem" borderRadius={8} />
        </HatenaShareButton>
      </span>
    </main>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{`${fields.title} | ${BlogTitle}`}</title>
      </Head>
      <Article {...props} />
    </>
  );
};
