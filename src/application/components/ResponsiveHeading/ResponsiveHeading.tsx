import React from 'react';
import { clsx } from 'clsx';
import { Text, Title, TextProps, TitleProps } from '@mantine/core';
import { useResponsiveHeadingStyles } from '@/application/components/ResponsiveHeading/ResponsiveHeading.styles';

function H1Heading({ children, className, ...props }: TitleProps) {
  const { classes } = useResponsiveHeadingStyles();
  return (
    <Title className={clsx(classes.textColor, classes.h1, className)} {...props}>
      {children}
    </Title>
  );
}

function H2Heading({ children, className, ...props }: TitleProps) {
  const { classes } = useResponsiveHeadingStyles();
  return (
    <Title className={clsx(classes.textColor, classes.h2, className)} {...props}>
      {children}
    </Title>
  );
}

function H1WithGreen({
  normalText,
  className,
  greenText,
  greenTextOnLeft,
  ...props
}: TextProps & { greenText: string; greenTextOnLeft?: boolean; normalText: string }) {
  const { classes } = useResponsiveHeadingStyles();
  return (
    <Text className={clsx(classes.h1, classes.textColor, className)} {...props}>
      {greenTextOnLeft ? (
        <>
          <span className={classes.green}>{greenText}</span> {normalText}
        </>
      ) : (
        <>
          {normalText} <span className={classes.green}>{greenText}</span>
        </>
      )}
    </Text>
  );
}

function TextComponent({ children, className, ...props }: TextProps) {
  const { classes } = useResponsiveHeadingStyles();
  return (
    <Text className={clsx(classes.text, classes.textColor, className)} {...props}>
      {children}
    </Text>
  );
}

function Text2Component({ children, className, ...props }: TextProps) {
  const { classes } = useResponsiveHeadingStyles();
  return (
    <Text className={clsx(classes.text2, classes.textColor, className)} {...props}>
      {children}
    </Text>
  );
}

export const ResponsiveHeading = {
  H1: H1Heading,
  H2: H2Heading,
  H1WithGreen,
  P: TextComponent,
  PLarge: Text2Component,
};
