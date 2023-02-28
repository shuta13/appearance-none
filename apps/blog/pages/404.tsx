import { getErrorLayout } from '~/components/Layouts/ErrorLayout';
import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => <p>Not found.</p>;

Custom404.getLayout = getErrorLayout;

export default Custom404;
