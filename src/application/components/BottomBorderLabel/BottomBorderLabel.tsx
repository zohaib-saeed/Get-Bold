import React from 'react';
import { useBottomBorderLabelStyles } from '@/application/components/BottomBorderLabel/BottomBorderLabel.styles';

type Props = {
  label: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export function BottomBorderLabel({ label, top, right, bottom, left }: Props) {
  const { classes } = useBottomBorderLabelStyles({
    top,
    right,
    bottom,
    left,
  });
  return <div className={classes.label}>{label}</div>;
}
