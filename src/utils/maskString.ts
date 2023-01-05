import RemoveMarkdown from 'remove-markdown';

export const maskString = (body: string, limit = 160) => {
  const text = RemoveMarkdown(body).replace(/\n/g, ' ');
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};
