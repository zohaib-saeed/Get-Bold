import React from 'react';
import Image from 'next/image';
import { useFilterStyles } from './BrandFiltersstyles';
import { ResponsiveHeading } from '../../ResponsiveHeading/ResponsiveHeading';
import { Checkbox } from '@mantine/core';

const BarandFilter = () => {
  const { classes } = useFilterStyles();
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
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
        <div className={classes.checkboxes}>
          <Checkbox className={classes.checkboxItem} label="Gildan" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Bella & Canvas" color="dark" />
          <Checkbox className={classes.checkboxItem} label="ATC" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
        </div>
      </div>
      {/* Filter => Decoration Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Decoration</ResponsiveHeading.P>
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
        <div className={classes.checkboxes}>
          <Checkbox className={classes.checkboxItem} label="Screen Printing " color="dark" />
          <Checkbox className={classes.checkboxItem} label="Reduced Plastisol" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
          <Checkbox className={classes.checkboxItem} label="Option" color="dark" />
        </div>
      </div>
      {/* Filter => Material Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Material</ResponsiveHeading.P>
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
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
      </div>
      {/* Filter => Fit Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Fit</ResponsiveHeading.P>
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
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
      </div>
      {/* Filter => Neck Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>Neck</ResponsiveHeading.P>
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
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
      </div>
      {/* Filter => Tear Away Label Filter */}
      <div className={classes.fitlerWrapper}>
        {/* Filter => Top */}
        <div className={classes.fitlerWrapperTop}>
          <ResponsiveHeading.P className={classes.filterHeading}>
            Tear Away Label
          </ResponsiveHeading.P>
          <div style={{ position: 'relative' }}>
            <ResponsiveHeading.P className={classes.minimizeIcon}>_</ResponsiveHeading.P>
          </div>
        </div>
        {/* Filter => Checkboxes */}
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
      </div>
    </div>
  );
};

export default BarandFilter;
