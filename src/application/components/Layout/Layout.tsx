import React from 'react';
import { Header } from '@/application/components/Layout/Header/Header';
import { Footer } from '@/application/components/Layout/Footer/Footer';
import { useLayoutStyles } from '@/application/components/Layout/Layout.styles';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const { classes } = useLayoutStyles();
  return (
    <div className={classes.layout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
