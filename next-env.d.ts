/// <reference types="next" />
/// <reference types="next/types/global" />

// https://developers.google.com/gtagjs/reference/api
type Command = 'config' | 'get' | 'set' | 'event' | 'consent';
type CommandParameters = {
  config: [string, { [key: string]: any }];
  get: [string, 'client_id' | 'session_id' | 'gclid', Function | undefined];
  set: [string, { [key: string]: string }];
  event: [string, { [key: string]: string }];
  consent: [
    string,
    'default' | 'update',
    {
      ad_storage: 'allowd' | 'denied';
      analytics_storage: 'allowd' | 'denied';
      wait_for_update: number;
    }
  ];
};
