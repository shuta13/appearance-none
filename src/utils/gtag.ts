export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID!;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: Gtag.EventNames, params: Gtag.EventParams) => {
  const { event_category, event_label, value } = params;
  window.gtag('event', action, {
    event_category: event_category,
    event_label: event_label,
    value: value,
  });
};
