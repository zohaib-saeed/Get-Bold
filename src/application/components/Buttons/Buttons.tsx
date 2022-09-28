import React from 'react';
import { clsx } from 'clsx';
import { Button, ButtonProps } from '@mantine/core';
import { useButtonStyles } from '@/application/components/Buttons/Buttons.styles';

export function ButtonPrimary({ children, className, ...props }: ButtonProps) {
  const { classes } = useButtonStyles();

  return (
    <Button className={clsx(classes.primary, className)} {...props}>
      {children}
    </Button>
  );
}

export const Buttons = {
  Primary: ButtonPrimary,
};
