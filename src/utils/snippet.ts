import RemoveMarkdown from 'remove-markdown';

export const generateSnippet = (
  body: string,
  removeLineBreak: boolean,
  limit = 160
) => {
  const planeText = RemoveMarkdown(body);
  const text = removeLineBreak ? planeText.replace(/\n/g, ' ') : planeText;
  return text.length > limit ? text.substr(0, limit) + '...' : text;
};
