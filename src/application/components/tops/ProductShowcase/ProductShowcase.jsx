import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ResponsiveHeading } from '../../ResponsiveHeading/ResponsiveHeading';
import { useProductShowcaseStyles } from './ProductShowcase.styles';
import { ProductCard } from '../../ProductCard/ProductCard';
const ProductShowcase = () => {
  const { classes } = useProductShowcaseStyles();
  //Handling selectbox open/close and selected value
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('Sort by Latest');
  const node = useRef(null);

  const handleChange = (selectedValue) => {
    setSort(selectedValue);
    setIsOpen(false);
  };

  const handleClick = (e) => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className={classes.products}>
      {/* Top */}
      <div className={classes.productsTop}>
        <ResponsiveHeading.P className={classes.productTopText}>38 results</ResponsiveHeading.P>
        {/* => Sortingbox */}
        <div className={classes.sortingBox} ref={node}>
          <div className={classes.sortingLabel} onClick={() => setIsOpen(true)}>
            <ResponsiveHeading.P className={classes.productTopText}>{sort}</ResponsiveHeading.P>
            <div className={classes.arrowDownIcon}>
              <Image
                src="/Tops/Arrow.svg"
                alt="Image"
                objectFit="contain"
                layout="fill"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
          {/* Sorting dropdown */}
          {isOpen && (
            <div className={classes.sortingDropdown}>
              <ResponsiveHeading.P
                className={classes.selectBoxOptionText}
                onClick={() => handleChange('Sort by Latest')}
              >
                Sort by Latest
              </ResponsiveHeading.P>
              <ResponsiveHeading.P
                className={classes.selectBoxOptionText}
                onClick={() => handleChange('Sort by Oldest')}
              >
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
