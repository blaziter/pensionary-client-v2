import React from 'react';

import { DefaultProps } from '@types';
import { Footer } from './Footer';
import { Header } from './header/Header';

interface Props extends DefaultProps {}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
