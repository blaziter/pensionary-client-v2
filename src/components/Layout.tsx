import React from 'react';
import { DefaultProps } from '@types';
import { Header } from './Header';
import { Footer } from './Footer';

interface Props extends DefaultProps {}

export const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <div className="px-2 py-4">{props.children}</div>
            <Footer />
        </>
    );
};
