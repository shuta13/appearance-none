import nodeFetch from 'node-fetch';

const widgetsJsUrl = 'https://platform.twitter.com/widgets.js';

export const generateWidgetsJs = async () => {
  const res = await (await nodeFetch(widgetsJsUrl)).text();

  if (res != null) {
    return res;
  } else {
    throw new Error();
  }
};
