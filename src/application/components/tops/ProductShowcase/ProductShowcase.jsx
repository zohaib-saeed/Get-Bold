import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ResponsiveHeading } from '../../ResponsiveHeading/ResponsiveHeading';
import { useProductShowcaseStyles } from './ProductShowcase.styles';
import { ProductCard } from '../../ProductCard/ProductCard';
const ProductShowcase = () => {
  const { classes } = useProductShowcaseStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('Sort by Latest');
  return (
    <div className={classes.products}>
      {/* Top */}
      <div className={classes.productsTop}>
        <ResponsiveHeading.P className={classes.productTopText}>38 results</ResponsiveHeading.P>
        {/* => Sortingbox */}
        <div className={classes.sortingBox}>
          <div className={classes.sortingLabel} onClick={() => setIsOpen(!isOpen)}>
            <ResponsiveHeading.P className={classes.productTopText}>{sort}</ResponsiveHeading.P>
            <div className={classes.arrowDownIcon}>
              <Image src="/Tops/Arrow.svg" alt="Image" objectFit="contain" layout="fill" />
            </div>
          </div>
          {/* Sorting dropdown */}
          {isOpen && (
            <div className={classes.sortingDropdown} onClick={() => setIsOpen(false)}>
              <ResponsiveHeading.P className={classes.productTopText}>
                Sort by Latest
              </ResponsiveHeading.P>
              <ResponsiveHeading.P className={classes.productTopText}>
                Sort by Oldest
              </ResponsiveHeading.P>
            </div>
          )}
        </div>
      </div>
      {/* Products Showcase */}
      <div className={classes.productShowcase}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductShowcase;
