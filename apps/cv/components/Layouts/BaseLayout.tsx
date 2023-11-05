import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Description,
  FacebookUrl,
  GitHubUrl,
  LinkedinUrl,
  Title,
  XUrl,
} from '~/config';
import { Icon } from '@iconify/react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="tracking-wider h-full px-16">
      <div className="mx-auto max-w-content h-full space-y-32">
        <header className="py-16 inset-0 grid grid-cols-12 gap-16">
          <Image
            alt="Shuta Hirai"
            src="/images/me.jpg"
            width={160}
            height={160}
            className="md:col-span-3 col-span-4"
          />
          <div className="md:col-span-9 col-span-8 space-y-8">
            <h1 className="text-24">{Title}</h1>
            <ul className="flex gap-x-8">
              <li>
                <Link
                  href={XUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  <Icon icon="simple-icons:x" />
                </Link>
              </li>
              <li>
                <Link
                  href={GitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  <Icon icon="pajamas:github" />
                </Link>
              </li>
              <li>
                <Link
                  href={FacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  <Icon icon="logos:facebook" />
                </Link>
              </li>
              <li>
                <Link
                  href={LinkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  <Icon icon="devicon:linkedin" />
                </Link>
              </li>
            </ul>
            <ul className="hidden md:block">
              {Description.map((value) => (
                <li key={value} className="text-16">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <ul className="md:hidden col-span-full">
            {Description.map((value) => (
              <li key={value} className="text-16">
                {value}
              </li>
            ))}
          </ul>
        </header>
        <main>{children}</main>
        <footer className="sticky top-[100vh] py-16 text-center">
          <small>&#169; {new Date().getFullYear()} did0es</small>
        </footer>
      </div>
    </div>
  );
};

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
