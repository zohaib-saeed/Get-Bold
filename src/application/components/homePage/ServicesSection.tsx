import React from 'react';
import { Container } from '@mantine/core';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { useServicesStyles } from './ServicesSection.styles';
import { ResponsiveHeading } from '@/application/components/ResponsiveHeading/ResponsiveHeading';
import { BottomBorderLabel } from '@/application/components/BottomBorderLabel/BottomBorderLabel';

type Props = {};

export function ServicesSection(props: Props) {
  const { classes } = useServicesStyles();
  return (
    <div className={classes.services}>
      <Container size="xl">
        <ResponsiveHeading.H1WithGreen
          className={classes.servicesHeading}
          normalText="Our Best"
          greenText="Services"
        />

        <div className={classes.servicesSection}>
          {/*   Left Featured Shirt   */}
          <div>
            <div className={classes.leftFeaturedImg}>
              <Image
                alt="shirt Image"
                priority
                src="/HomePage/left-shirt.png"
                width={1454}
                height={1664}
              />
              <BottomBorderLabel label="Buy Jackets" />
            </div>
            <ResponsiveHeading.H2 className={classes.featuredProductHeading}>
              Screen Printing
            </ResponsiveHeading.H2>
            <ResponsiveHeading.P className={classes.description}>
              We provide you with the best of the best. With thousands of garment options and
              high-quality ink types, discharge, plastisol and water-based, screen printing has
              never been this easier for brands, apparel companies, companies and more. Check out
              our website to get an idea of who we are and what we can help you create!
            </ResponsiveHeading.P>
          </div>

          <div className={classes.rightFeaturedProducts}>
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className={classes.featuredProduct}>
                <div className={classes.featuredProductImg}>
                  <Image
                    priority
                    src="/HomePage/featuredShirt.png"
                    layout="fill"
                    objectFit="cover"
                  />
                  <BottomBorderLabel label="Buy Jackets" />
                </div>
                <div className={classes.productCta}>
                  <ResponsiveHeading.PLarge className={classes.productCategory}>
                    Embroidery
                  </ResponsiveHeading.PLarge>
                  <BsArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
