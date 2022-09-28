import React from 'react';
import Image from 'next/image';
import { Group } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { Label } from '@/application/components/Label/Label';
import { ResponsiveHeading } from '@/application/components/ResponsiveHeading/ResponsiveHeading';
import { ColorBox } from '@/application/components/ColorBox/ColorBox';
import { useProductCardStyles } from '@/application/components/ProductCard/ProductCard.styles';

type Props = {};

export function ProductCard(props: Props) {
  const { classes } = useProductCardStyles();
  return (
    <div className={classes.productCard}>
      <div className={classes.productImg}>
        <Image src="/HomePage/carousel-shirt.png" layout="fill" objectFit="cover" />
        <div className={classes.label}>
          <Label size="lg">featured</Label>
        </div>
      </div>

      {/*   Product Description    */}
      <div className={classes.productDesc}>
        <div className={classes.topDesc}>
          <div>
            <ResponsiveHeading.PLarge className={classes.productHeading}>
              Triblend Short Sleeve T-Shirt
            </ResponsiveHeading.PLarge>
            <ResponsiveHeading.P>B8413 | Bella + Canvas</ResponsiveHeading.P>
            <ResponsiveHeading.P>$12.87 - $26.91</ResponsiveHeading.P>
          </div>
          <Group>
            <ColorBox color="#000" />
          </Group>
        </div>
        {/*   Bottom Size and Quote   */}
        <div className={classes.productBottomSizeAndQuote}>
          <ResponsiveHeading.P>S-2XL</ResponsiveHeading.P>
          <Group className={classes.getAQuoteCta} spacing="xs">
            <ResponsiveHeading.P className={classes.getAQuote}>GET A QUOTE</ResponsiveHeading.P>
            <BsArrowRight />
          </Group>
        </div>
      </div>
    </div>
  );
}
