import dayjs from 'dayjs';

export const Title = 'Shuta Hirai';

export const Description = [
  'a.k.a did0es',
  'Software engineer in Japan',
  'I am a software engineer primarily working on web front-end development within the infrastructure organization at CyberAgent, Inc.',
];

export const Host = 'https://did0es.me';

export const OgImageUrl = 'https://did0es.me/images/og.png';

export const DateNow = dayjs().toISOString();

export const DefaultJsonId = {
  title: Title,
  description: Description.join(' | '),
  url: Host,
  imageUrl: OgImageUrl,
  updated: DateNow,
};

export const XUrl = 'https://x.com/did0es';
export const FacebookUrl =
  'https://www.facebook.com/profile.php?id=100028982675881';
export const GitHubUrl = 'https://github.com/shuta13';
export const LinkedinUrl = 'https://www.linkedin.com/in/shuta-hirai/';
