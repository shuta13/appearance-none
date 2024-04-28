import {
  AudioBlockObjectResponse,
  BlockObjectResponse as OriginalBlockObjectResponse,
  BookmarkBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  ChildDatabaseBlockObjectResponse,
  ChildPageBlockObjectResponse,
  CodeBlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
  DividerBlockObjectResponse,
  EmbedBlockObjectResponse,
  EquationBlockObjectResponse,
  FileBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  ListBlockChildrenResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QueryDatabaseResponse,
  QuoteBlockObjectResponse,
  SyncedBlockBlockObjectResponse,
  TableBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  TableRowBlockObjectResponse,
  TemplateBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Tweet } from 'react-tweet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export namespace CustomBlockObjectResponse {
  export type BulletedList = {
    type: 'bulleted_list';
    items: BulletedListItemBlockObjectResponse[];
  } & Omit<UnsupportedBlockObjectResponse, 'type'>;
  export type NumberedList = {
    type: 'numbered_list';
    items: NumberedListItemBlockObjectResponse[];
  } & Omit<UnsupportedBlockObjectResponse, 'type'>;
  export type TodoList = {
    type: 'todo_list';
    items: ToDoBlockObjectResponse[];
  } & Omit<UnsupportedBlockObjectResponse, 'type'>;
}

export type BlockObjectResponse = (
  | OriginalBlockObjectResponse
  | CustomBlockObjectResponse.BulletedList
  | CustomBlockObjectResponse.NumberedList
  | CustomBlockObjectResponse.TodoList
) & { children?: { content: BlockObjectResponse; htmlStr: string }[] };

export function isParagraph(
  block: BlockObjectResponse,
): block is ParagraphBlockObjectResponse {
  return block.type === 'paragraph';
}
export function isHeading1(
  block: BlockObjectResponse,
): block is Heading1BlockObjectResponse {
  return block.type === 'heading_1';
}
export function isHeading2(
  block: BlockObjectResponse,
): block is Heading2BlockObjectResponse {
  return block.type === 'heading_2';
}
export function isHeading3(
  block: BlockObjectResponse,
): block is Heading3BlockObjectResponse {
  return block.type === 'heading_3';
}
export function isBulletList(
  block: BlockObjectResponse,
): block is CustomBlockObjectResponse.BulletedList {
  return block.type === 'bulleted_list';
}
export function isBulletListItem(
  block: BlockObjectResponse,
): block is BulletedListItemBlockObjectResponse {
  return block.type === 'bulleted_list_item';
}
export function isNumberedList(
  block: BlockObjectResponse,
): block is CustomBlockObjectResponse.NumberedList {
  return block.type === 'numbered_list';
}
export function isNumberedListItem(
  block: BlockObjectResponse,
): block is NumberedListItemBlockObjectResponse {
  return block.type === 'numbered_list_item';
}
export function isQuote(
  block: BlockObjectResponse,
): block is QuoteBlockObjectResponse {
  return block.type === 'quote';
}
export function isTodoList(
  block: BlockObjectResponse,
): block is CustomBlockObjectResponse.TodoList {
  return block.type === 'todo_list';
}
export function isTodo(
  block: BlockObjectResponse,
): block is ToDoBlockObjectResponse {
  return block.type === 'to_do';
}
export function isTemplate(
  block: BlockObjectResponse,
): block is TemplateBlockObjectResponse {
  return block.type === 'template';
}
export function isSyncedBlock(
  block: BlockObjectResponse,
): block is SyncedBlockBlockObjectResponse {
  return block.type === 'synced_block';
}
export function isChildPage(
  block: BlockObjectResponse,
): block is ChildPageBlockObjectResponse {
  return block.type === 'child_page';
}
export function isChildDatabase(
  block: BlockObjectResponse,
): block is ChildDatabaseBlockObjectResponse {
  return block.type === 'child_database';
}
export function isEquation(
  block: BlockObjectResponse,
): block is EquationBlockObjectResponse {
  return block.type === 'equation';
}
export function isCode(
  block: BlockObjectResponse,
): block is CodeBlockObjectResponse {
  return block.type === 'code';
}
export function isCallout(
  block: BlockObjectResponse,
): block is CalloutBlockObjectResponse {
  return block.type === 'callout';
}
export function isDivider(
  block: BlockObjectResponse,
): block is DividerBlockObjectResponse {
  return block.type === 'divider';
}
export function isBreadcrumb(
  block: BlockObjectResponse,
): block is BreadcrumbBlockObjectResponse {
  return block.type === 'breadcrumb';
}
export function isTableOfContents(
  block: BlockObjectResponse,
): block is TableOfContentsBlockObjectResponse {
  return block.type === 'table_of_contents';
}
export function isColumnList(
  block: BlockObjectResponse,
): block is ColumnListBlockObjectResponse {
  return block.type === 'column_list';
}
export function isColumn(
  block: BlockObjectResponse,
): block is ColumnBlockObjectResponse {
  return block.type === 'column';
}
export function isLinkToPage(
  block: BlockObjectResponse,
): block is LinkToPageBlockObjectResponse {
  return block.type === 'link_to_page';
}
export function isTable(
  block: BlockObjectResponse,
): block is TableBlockObjectResponse {
  return block.type === 'table';
}
export function isTableRow(
  block: BlockObjectResponse,
): block is TableRowBlockObjectResponse {
  return block.type === 'table_row';
}
export function isEmbed(
  block: BlockObjectResponse,
): block is EmbedBlockObjectResponse {
  return block.type === 'embed';
}
export function isBookmark(
  block: BlockObjectResponse,
): block is BookmarkBlockObjectResponse {
  return block.type === 'bookmark';
}
export function isImage(
  block: BlockObjectResponse,
): block is ImageBlockObjectResponse {
  return block.type === 'image';
}
export function isVideo(
  block: BlockObjectResponse,
): block is VideoBlockObjectResponse {
  return block.type === 'video';
}
export function isPdf(
  block: BlockObjectResponse,
): block is PdfBlockObjectResponse {
  return block.type === 'pdf';
}
export function isFile(
  block: BlockObjectResponse,
): block is FileBlockObjectResponse {
  return block.type === 'file';
}
export function isAudio(
  block: BlockObjectResponse,
): block is AudioBlockObjectResponse {
  return block.type === 'audio';
}
export function isLinkPreview(
  block: BlockObjectResponse,
): block is LinkPreviewBlockObjectResponse {
  return block.type === 'link_preview';
}
export function isToggle(
  block: BlockObjectResponse,
): block is ToggleBlockObjectResponse {
  return block.type === 'toggle';
}
export function isUnsupported(
  block: BlockObjectResponse,
): block is UnsupportedBlockObjectResponse {
  return block.type === 'unsupported';
}

export function isBlockObject(
  object: ListBlockChildrenResponse['results'][number],
): object is BlockObjectResponse {
  return Object.prototype.hasOwnProperty.call(object, 'type');
}
export function hasChildren(
  block: BlockObjectResponse,
): block is { children: Record<string, any> } & BlockObjectResponse {
  return Object.prototype.hasOwnProperty.call(block, 'children');
}

export type SwitcherReturn = {
  tagName: keyof JSX.IntrinsicElements | '';
};
export function switcher(block: BlockObjectResponse): SwitcherReturn {
  if (isParagraph(block)) {
    return {
      tagName: 'p',
    };
  } else if (isHeading1(block)) {
    return {
      tagName: 'h1',
    };
  } else if (isHeading2(block)) {
    return {
      tagName: 'h2',
    };
  } else if (isHeading3(block)) {
    return {
      tagName: 'h3',
    };
  } else if (isBulletList(block)) {
    return {
      tagName: 'ul',
    };
  } else if (isBulletListItem(block)) {
    return {
      tagName: 'li',
    };
  } else if (isNumberedList(block)) {
    return {
      tagName: 'ol',
    };
  } else if (isNumberedListItem(block)) {
    return {
      tagName: 'li',
    };
  } else if (isQuote(block)) {
    return {
      tagName: 'blockquote',
    };
  } else if (isTodoList(block)) {
    return {
      tagName: 'ul',
    };
  } else if (isTodo(block)) {
    return {
      tagName: 'li',
    };
  } else if (isTemplate(block)) {
    return {
      tagName: 'template',
    };
  } else if (isSyncedBlock(block)) {
    return {
      tagName: 'div',
    };
  } else if (isChildPage(block)) {
    return {
      tagName: 'a',
    };
  } else if (isChildDatabase(block)) {
    return {
      tagName: 'a',
    };
  } else if (isEquation(block)) {
    return {
      tagName: 'div',
    };
  } else if (isCode(block)) {
    return {
      tagName: 'code',
    };
  } else if (isCallout(block)) {
    return {
      tagName: 'div',
    };
  } else if (isDivider(block)) {
    return {
      tagName: 'hr',
    };
  } else if (isBreadcrumb(block)) {
    return {
      tagName: 'ul',
    };
  } else if (isTableOfContents(block)) {
    return {
      tagName: 'ul',
    };
  } else if (isColumnList(block)) {
    return {
      tagName: 'div',
    };
  } else if (isColumn(block)) {
    return {
      tagName: 'div',
    };
  } else if (isLinkToPage(block)) {
    return {
      tagName: 'a',
    };
  } else if (isTable(block)) {
    return {
      tagName: 'table',
    };
  } else if (isTableRow(block)) {
    return {
      tagName: 'tr',
    };
  } else if (isEmbed(block)) {
    return {
      tagName: 'a',
    };
  } else if (isBookmark(block)) {
    return {
      tagName: 'a',
    };
  } else if (isImage(block)) {
    return {
      tagName: 'img',
    };
  } else if (isVideo(block)) {
    return {
      tagName: 'video',
    };
  } else if (isPdf(block)) {
    return {
      tagName: 'input',
    };
  } else if (isFile(block)) {
    return {
      tagName: 'input',
    };
  } else if (isAudio(block)) {
    return {
      tagName: 'audio',
    };
  } else if (isLinkPreview(block)) {
    return {
      tagName: 'a',
    };
  } else if (isToggle(block)) {
    return {
      tagName: 'details',
    };
  } else if (isUnsupported(block)) {
    return {
      tagName: '',
    };
  } else {
    return {
      tagName: '',
    };
  }
}

function getTextContent(items: RichTextItemResponse[] | RichTextItemResponse) {
  let isIframe = false;
  function itemFilter(item: RichTextItemResponse) {
    /** iframe embedを正しく表示する。 */
    if (item.plain_text.includes('<iframe')) {
      isIframe = true;
    }
    if (item.href != null && !isIframe) {
      return `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.plain_text}</a>`;
    } else {
      return item.plain_text;
    }
  }

  if (Array.isArray(items)) {
    return items.map((item) => itemFilter(item)).join('');
  } else {
    return itemFilter(items);
  }
}
export function renderer(block: BlockObjectResponse) {
  const { tagName } = switcher(block);
  const Element = `${tagName}` as keyof JSX.IntrinsicElements;

  if (isParagraph(block)) {
    return (
      <Element
        dangerouslySetInnerHTML={{
          __html: getTextContent(block.paragraph.rich_text),
        }}
      />
    );
  } else if (isHeading1(block)) {
    const content = getTextContent(block.heading_1.rich_text);
    return (
      <Element id={content}>
        <a
          href={`#${content}`}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Element>
    );
  } else if (isHeading2(block)) {
    const content = getTextContent(block.heading_2.rich_text);
    return (
      <Element id={content}>
        <a
          href={`#${content}`}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Element>
    );
  } else if (isHeading3(block)) {
    const content = getTextContent(block.heading_3.rich_text);
    return (
      <Element id={content}>
        <a
          href={`#${content}`}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Element>
    );
  } else if (isBulletList(block)) {
    return <Element>{block.items.map(renderer)}</Element>;
  } else if (isBulletListItem(block)) {
    if (hasChildren(block)) {
      return (
        <Element key={block.id}>
          {getTextContent(block.bulleted_list_item.rich_text)}
          <ul
            dangerouslySetInnerHTML={{
              __html: block.children.map((child) => child.htmlStr).join(''),
            }}
          />
        </Element>
      );
    }
    return (
      <Element
        key={block.id}
        dangerouslySetInnerHTML={{
          __html: getTextContent(block.bulleted_list_item.rich_text),
        }}
      />
    );
  } else if (isNumberedList(block)) {
    return <Element>{block.items.map(renderer)}</Element>;
  } else if (isNumberedListItem(block)) {
    if (hasChildren(block)) {
      return (
        <Element key={block.id}>
          <ol>{block.children.map((child) => renderer(child.content))}</ol>
        </Element>
      );
    }
    return (
      <Element
        key={block.id}
        dangerouslySetInnerHTML={{
          __html: getTextContent(block.numbered_list_item.rich_text),
        }}
      />
    );
  } else if (isQuote(block)) {
    return (
      <Element
        dangerouslySetInnerHTML={{
          __html: getTextContent(block.quote.rich_text),
        }}
      />
    );
  } else if (isTodoList(block)) {
    return <Element>{block.items.map(renderer)}</Element>;
  } else if (isTodo(block)) {
    return <Element key={block.id}></Element>;
  } else if (isTemplate(block)) {
    return <Element></Element>;
  } else if (isSyncedBlock(block)) {
    return <Element></Element>;
  } else if (isChildPage(block)) {
    return <Element></Element>;
  } else if (isChildDatabase(block)) {
    return <Element></Element>;
  } else if (isEquation(block)) {
    return <Element></Element>;
  } else if (isCode(block)) {
    return (
      <SyntaxHighlighter
        language={block.code.language}
        style={a11yDark}
        codeTagProps={{
          /** @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/222#issuecomment-547092957 */
          style: { fontSize: '0.875rem', lineHeight: '1.25rem' },
        }}
      >
        {block.code.rich_text.map((text) => text.plain_text).join('\n')}
      </SyntaxHighlighter>
    );
  } else if (isCallout(block)) {
    return <Element></Element>;
  } else if (isDivider(block)) {
    return <Element></Element>;
  } else if (isBreadcrumb(block)) {
    return <Element></Element>;
  } else if (isTableOfContents(block)) {
    return <Element></Element>;
  } else if (isColumnList(block)) {
    return <Element></Element>;
  } else if (isColumn(block)) {
    return <Element></Element>;
  } else if (isLinkToPage(block)) {
    return <Element></Element>;
  } else if (isTable(block)) {
    return <Element></Element>;
  } else if (isTableRow(block)) {
    return <Element></Element>;
  } else if (isEmbed(block)) {
    const { embed } = block;
    if (embed.url.match(/twitter.com/)) {
      const ids = new URL(embed.url).pathname.split('/');
      const id = ids[ids.length - 1];
      return (
        <blockquote>
          <a href={embed.url} target="_blank" rel="noopener">
            {embed.url}
          </a>
        </blockquote>
      );
      return <Tweet id={id} /> /* 動かない... */;
    }
    return <Element src={embed.url} />;
  } else if (isBookmark(block)) {
    return <Element></Element>;
  } else if (isImage(block)) {
    const meta = (() => {
      if (block.image.type === 'external') {
        return {
          src: block.image.external.url,
          alt: block.image.caption.map((text) => text.plain_text).join(''),
          'data-x-image-type': block.image.type,
        };
      } else {
        return {
          src: block.image.file.url,
          alt: block.image.caption.map((text) => text.plain_text).join(''),
          'data-x-image-type': block.image.type,
        };
      }
    })();
    return (
      <picture>
        <source srcSet={meta.src} />
        <Element {...meta} className="object-contain"></Element>
      </picture>
    );
  } else if (isVideo(block)) {
    return <Element></Element>;
  } else if (isPdf(block)) {
    return <Element></Element>;
  } else if (isFile(block)) {
    return <Element></Element>;
  } else if (isAudio(block)) {
    return <Element></Element>;
  } else if (isLinkPreview(block)) {
    return <Element></Element>;
  } else if (isToggle(block)) {
    const content = getTextContent(block.toggle.rich_text);
    if (hasChildren(block)) {
      return (
        <Element key={block.id}>
          <summary>{content}</summary>
          <div
            dangerouslySetInnerHTML={{
              __html: block.children.map((child) => child.htmlStr).join(''),
            }}
          />
        </Element>
      );
    }
    return (
      <Element>
        <summary>{content}</summary>
      </Element>
    );
  } else if (isUnsupported(block)) {
    return <Element></Element>;
  } else {
    return <Element></Element>;
  }
}

/** @deprecated */
export type Content<T extends string> =
  T extends keyof ParagraphBlockObjectResponse
    ? ParagraphBlockObjectResponse['paragraph']
    : T extends keyof Heading1BlockObjectResponse
    ? Heading1BlockObjectResponse['heading_1']
    : T extends keyof Heading2BlockObjectResponse
    ? Heading2BlockObjectResponse['heading_2']
    : T extends keyof Heading3BlockObjectResponse
    ? Heading3BlockObjectResponse['heading_3']
    : T extends keyof BulletedListItemBlockObjectResponse
    ? BulletedListItemBlockObjectResponse['bulleted_list_item']
    : T extends keyof NumberedListItemBlockObjectResponse
    ? NumberedListItemBlockObjectResponse['numbered_list_item']
    : T extends keyof QueryDatabaseResponse
    ? QuoteBlockObjectResponse['quote']
    : T extends keyof ToDoBlockObjectResponse
    ? ToDoBlockObjectResponse['to_do']
    : T extends keyof ToggleBlockObjectResponse
    ? ToggleBlockObjectResponse['toggle']
    : T extends keyof TemplateBlockObjectResponse
    ? TemplateBlockObjectResponse['template']
    : T extends keyof SyncedBlockBlockObjectResponse
    ? SyncedBlockBlockObjectResponse['synced_block']
    : T extends keyof ChildPageBlockObjectResponse
    ? ChildPageBlockObjectResponse['child_page']
    : T extends keyof ChildDatabaseBlockObjectResponse
    ? ChildDatabaseBlockObjectResponse['child_database']
    : T extends keyof EquationBlockObjectResponse
    ? EquationBlockObjectResponse['equation']
    : T extends keyof CodeBlockObjectResponse
    ? CodeBlockObjectResponse['code']
    : T extends keyof CalloutBlockObjectResponse
    ? CalloutBlockObjectResponse['callout']
    : T extends keyof DividerBlockObjectResponse
    ? DividerBlockObjectResponse['divider']
    : T extends keyof BreadcrumbBlockObjectResponse
    ? BreadcrumbBlockObjectResponse['breadcrumb']
    : T extends keyof TableOfContentsBlockObjectResponse
    ? TableOfContentsBlockObjectResponse['table_of_contents']
    : T extends keyof ColumnListBlockObjectResponse
    ? ColumnListBlockObjectResponse['column_list']
    : T extends keyof ColumnBlockObjectResponse
    ? ColumnBlockObjectResponse['column']
    : T extends keyof LinkToPageBlockObjectResponse
    ? LinkToPageBlockObjectResponse['link_to_page']
    : T extends keyof TableBlockObjectResponse
    ? TableBlockObjectResponse['table']
    : T extends keyof TableRowBlockObjectResponse
    ? TableRowBlockObjectResponse['table_row']
    : T extends keyof EmbedBlockObjectResponse
    ? EmbedBlockObjectResponse['embed']
    : T extends keyof BookmarkBlockObjectResponse
    ? BookmarkBlockObjectResponse['bookmark']
    : T extends keyof ImageBlockObjectResponse
    ? ImageBlockObjectResponse['image']
    : T extends keyof VideoBlockObjectResponse
    ? VideoBlockObjectResponse['video']
    : T extends keyof PdfBlockObjectResponse
    ? PdfBlockObjectResponse['pdf']
    : T extends keyof FileBlockObjectResponse
    ? FileBlockObjectResponse['file']
    : T extends keyof AudioBlockObjectResponse
    ? AudioBlockObjectResponse['audio']
    : T extends keyof LinkPreviewBlockObjectResponse
    ? LinkPreviewBlockObjectResponse['link_preview']
    : T extends keyof UnsupportedBlockObjectResponse
    ? UnsupportedBlockObjectResponse['unsupported']
    : never;
