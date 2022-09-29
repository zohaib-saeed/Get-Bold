import React from 'react';
import { Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useHeroStyles } from './HeroSection.styles';
import { ResponsiveHeading } from '@/application/components/ResponsiveHeading/ResponsiveHeading';
import { Buttons } from '@/application/components/Buttons/Buttons';

export function HeroSection() {
  const { classes } = useHeroStyles();
  return (
    <div className={classes.hero}>  
      <Container size="xl" className={classes.innerHeroSection}>
        {/*  Left Side - Text Side  */}
        <div>
          <ResponsiveHeading.H1>Printing is in our DNA</ResponsiveHeading.H1>

          <ResponsiveHeading.P className={classes.subHeading}>
            Get the best custom design tops, bottoms, outwear, workwear, headwear, and more with us!
          </ResponsiveHeading.P>

          <Buttons.Primary className={classes.startBtn}>Let&apos;s Start</Buttons.Primary>
        </div>

        {/*  Right Side - Image Side  */}
        <div>
          <Image src="/HomePage/shirt.png" width={1000} height={923} />
        </div>

        {/* Bottom Section */}
        <div className={classes.bottomSection}>
          <Link passHref href="/">
            <div className={classes.bottomLink}>I need an instant quote</div>
          </Link>
          <div>Design my clothes</div>
          <div>Create an art/logo</div>
        </div>
      </Container>
    </div>
  );
}
