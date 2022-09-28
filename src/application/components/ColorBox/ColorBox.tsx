import React from 'react';
import { useColorBoxStyles } from '@/application/components/ColorBox/ColorBox.styles';

type Props = {
  color: string;
};

export function ColorBox({ color }: Props) {
  const { classes } = useColorBoxStyles({ color });
  return <div className={classes.colorBox} />;
}
