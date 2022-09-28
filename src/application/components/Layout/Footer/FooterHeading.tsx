import React from 'react';
import { clsx } from 'clsx';
import { useFooterHeadingStyles } from './FooterHeading.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FooterHeading({ children, className }: Props) {
  const { classes } = useFooterHeadingStyles();
  return <div className={clsx(classes.footerHeading, className)}>{children}</div>;
}
