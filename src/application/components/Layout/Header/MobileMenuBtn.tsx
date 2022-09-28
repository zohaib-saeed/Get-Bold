import React from 'react';
import Image from 'next/image';
import { useMobileMenuBtnStyles } from '@/application/components/Layout/Header/MobileMenuBtn.styles';

type Props = {};

export function MobileMenuBtn(props: Props) {
  const { classes } = useMobileMenuBtnStyles();
  return (
    <div>
      <div className={classes.mobileMenuBtn}>
        <Image src="/HomePage/mobile-menu-btn.svg" width={18} height={12} />
      </div>
    </div>
  );
}
