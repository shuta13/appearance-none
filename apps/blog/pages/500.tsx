import { getErrorLayout } from '~/components/Layouts/ErrorLayout';
import { NextPageWithLayout } from './_app';

const Custom500: NextPageWithLayout = () => <p>Oops! Something went wrong.</p>;

Custom500.getLayout = getErrorLayout;

export default Custom500;
