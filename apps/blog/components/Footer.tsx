import classNames from 'classnames';
import { SocialButtonContainer } from './SocialButtonContainer';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={classNames('space-y-4', className)}>
    <SocialButtonContainer />
    <div>&#169; {new Date().getFullYear()} did0es</div>
  </footer>
);
