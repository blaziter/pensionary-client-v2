import React from 'react';
import Footer from './Footer';
import Header from './header/Header';
import { DefaultProps } from 'types';

interface Props extends DefaultProps {}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
