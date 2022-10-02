import React, { useState } from 'react';
import Image from 'next/image';
import { useFilterStyles } from './BrandFiltersstyles';
import { ResponsiveHeading } from '../../ResponsiveHeading/ResponsiveHeading';
import { Checkbox } from '@mantine/core';

const BarandFilter = () => {
  const { classes } = useFilterStyles();
  //Handling states for filters
  const [brand, setBrand] = useState(false);
  const [decoration, setDecoration] = useState(false);
  const [material, setMaterial] = useState(false);
  const [fit, setFit] = useState(false);
  const [neck, setNeck] = useState(false);
  const [tearAway, setTearAway] = useState(false);
  return (
    <div className={classes.filterMainWrapper}>
      {/* => Filter Heading */}
      <div className={classes.mainHeading}>
        <ResponsiveHeading.P>Filter</ResponsiveHeading.P>
      </div>
      {/* Filter => Brand Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Brand</ResponsiveHeading.P>
          {brand && (
            <div className={classes.minimizeIcon} onClick={() => setBrand(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!brand && (
            <div className={classes.maximizeIcon} onClick={() => setBrand(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {brand && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Gildan" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Bella & Canvas" color="dark" />
            <Checkbox className={classes.checkboxItem} label="ATC" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
      {/* Filter => Decoration Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Decoration</ResponsiveHeading.P>
          {decoration && (
            <div className={classes.minimizeIcon} onClick={() => setDecoration(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!decoration && (
            <div className={classes.maximizeIcon} onClick={() => setDecoration(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {decoration && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Screen Printing " color="dark" />
            <Checkbox className={classes.checkboxItem} label="Reduced Plastisol" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
      {/* Filter => Material Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Material</ResponsiveHeading.P>
          {material && (
            <div className={classes.minimizeIcon} onClick={() => setMaterial(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!material && (
            <div className={classes.maximizeIcon} onClick={() => setMaterial(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {material && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
      {/* Filter => Fit Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Fit</ResponsiveHeading.P>
          {fit && (
            <div className={classes.minimizeIcon} onClick={() => setFit(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!fit && (
            <div className={classes.maximizeIcon} onClick={() => setFit(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {fit && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
      {/* Filter => Neck Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Neck</ResponsiveHeading.P>
          {neck && (
            <div className={classes.minimizeIcon} onClick={() => setNeck(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!neck && (
            <div className={classes.maximizeIcon} onClick={() => setNeck(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {neck && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
      {/* Filter => Tear Away Label Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>
            Tear Away Label
          </ResponsiveHeading.P>
          {tearAway && (
            <div className={classes.minimizeIcon} onClick={() => setTearAway(false)}>
              <Image src="/Tops/minus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
          {!tearAway && (
            <div className={classes.maximizeIcon} onClick={() => setTearAway(true)}>
              <Image src="/Tops/plus.svg" alt="Image" objectFit="cover" layout="fill" />
            </div>
          )}
        </div>
        {/* Filter => Checkboxes */}
        {tearAway && (
          <div className={classes.checkboxes}>
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
            <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BarandFilter;
