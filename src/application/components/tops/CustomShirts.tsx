import React from 'react';
import { Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useCustomShirtStyles } from './CustomShirts.styles';
import { ResponsiveHeading } from '../ResponsiveHeading/ResponsiveHeading';
import BarandFilter from './Filters/BarandFilter';
import ProductShowcase from './ProductShowcase/ProductShowcase';
const CustomShirts = () => {
  const { classes } = useCustomShirtStyles();
  return (
    <div className={classes.customShirts}>
      <Container className={classes.customShirtsContainer}>
        {/* Path */}
        <div className={classes.pathWrapper}>
          <ResponsiveHeading.P className={classes.routePath}>
            /Home/Tops/T Shirts
          </ResponsiveHeading.P>
        </div>
        {/* Hero Section */}
        <div className={classes.heroSection}>
          {/* Hero Section => Content */}
          <div className={classes.heroContent}>
            <div className={classes.heroSectionLeft}>
              {/* Left => Text */}
              <ResponsiveHeading.H2 className={classes.heroHeading}>
                Custom T Shirts
              </ResponsiveHeading.H2>
              <ResponsiveHeading.PLarge className={classes.heroDescription}>
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy
              </ResponsiveHeading.PLarge>
            </div>
            <div className={classes.heroRight}>
              {/* Right => Image */}
              <div className={classes.heroImg}>
                <Image src="/Tops/hero-shirt.png" alt="Image" objectFit="contain" layout="fill" />
              </div>
            </div>
          </div>
        </div>
        {/* Filter Functionality + Products Showcase */}
        <div className={classes.filterAndProducts}>
          <BarandFilter />
          <ProductShowcase />
        </div>
      </Container>
    </div>
  );
};

export default CustomShirts;
