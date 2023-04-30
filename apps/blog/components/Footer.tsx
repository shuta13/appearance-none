import classNames from 'classnames';
import { SocialButtonContainer } from './SocialButtonContainer';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer
    className={classNames(
      'space-y-4 flex flex-col place-items-center',
      className
    )}
  >
    <SocialButtonContainer />
    <div>
      <small>&#169; {new Date().getFullYear()} did0es</small>
    </div>
  </footer>
);
