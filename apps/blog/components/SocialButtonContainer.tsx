import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { useMount } from 'utils/hooks';

const SOCIAL_CONTENTS = [
  {
    icon: faTwitter,
    href: 'https://twitter.com/did0es',
  },
  {
    icon: faGithub,
    href: 'https://github.com/shuta13',
  },
  {
    icon: faRss,
    href: 'https://blog.did0es.me/rss.xml',
  },
];

export const SocialButtonContainer: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {SOCIAL_CONTENTS.map((content) => (
        <SocialButton key={content.href} {...content} />
      ))}
    </div>
  );
};

const SocialButton: React.FC<{
  href: string;
  icon: FontAwesomeIconProps['icon'];
}> = (props) => {
  const { href, icon } = props;
  const { mounted } = useMount();
  return (
    <Link
      href={href}
      rel="nofollow noreferrer noopener"
      target="_blank"
      className="w-[32px] h-[32px] flex place-content-center place-items-center bg-secondary text-primary rounded-full"
      prefetch={false}
    >
      {mounted && <FontAwesomeIcon icon={icon} title={href} />}
    </Link>
  );
};
