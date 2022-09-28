import React from 'react';
import { BadgeProps, Badge } from '@mantine/core';
import { useLabelStyles } from '@/application/components/Label/Label.styles';

type Props = {};

export function Label({ children, ...props }: BadgeProps) {
  const { classes } = useLabelStyles();
  return (
    <Badge className={classes.label} {...props}>
      {children}
    </Badge>
  );
}
