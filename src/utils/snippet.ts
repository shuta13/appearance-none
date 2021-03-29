import RemoveMarkdown from 'remove-markdown';

export const generateSnippet = (body: string, limit = 160) => {
  const text = RemoveMarkdown(body).replace(/\n/g, ' ');
  return text.length > limit ? text.substr(0, limit) + '...' : text;
};
