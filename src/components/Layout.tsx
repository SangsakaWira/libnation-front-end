import { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;