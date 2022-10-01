import React from 'react';
import { Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useChooseUsStyles } from './ChooseUsSection.styles';
import { ResponsiveHeading } from '@/application/components/ResponsiveHeading/ResponsiveHeading';

export function ChooseUsSection() {
  const { classes } = useChooseUsStyles();
  const itemsData = [
    { url: '/Homepage/turn-around.svg', title: 'Great turnaround' },
    { url: '/Homepage/quality-services.svg', title: 'High quality Services' },
    { url: '/Homepage/competitive-prices.svg', title: 'Competitive prices' },
    { url: '/Homepage/free-shipping.svg', title: 'Free shipping' },
    { url: '/Homepage/printing.svg', title: 'Printing as low as 12 pieces per design' },
  ];
  return (
    <div className={classes.chooseUs}>
      <Container size="xl" className={classes.chooseUsSection}>
        {/* => Heading for small screens */}
        <ResponsiveHeading.H1WithGreen
          className={classes.headingGreenSmall}
          normalText="Why"
          greenText="Choose Us"
        />
        {/* Section Left => Image */}
        <div className={classes.img}>
          <Image src="/Homepage/choose-us.png" alt="choose-us" layout="fill" objectFit="cover" />
        </div>
        {/* Section Right => Info Text */}
        <div className={classes.sectionDetail}>
          <ResponsiveHeading.H1WithGreen
            className={classes.headingGreen}
            normalText="Why"
            greenText="Choose Us"
          />
          <ResponsiveHeading.P className={classes.sectionDetail_description}>
            GetBold’s reputation is based on a tireless search for customer satisfaction. Our
            promptness of service, seamlessness, superior quality and affordability are what mark us
            distinctive from others. We are always keen to travel the extra mile to ensure that you
            get the best services, competitive prices and of course a great turnaround.
          </ResponsiveHeading.P>
          <div className={classes.items}>
            {itemsData.map((item, index) => (
              <div>
                <div className={classes.iconItem}>
                  <div className={classes.iconItemImg}>
                    <Image
                      src={item.url}
                      alt="icon"
                      priority
                      // width={57}
                      // height={57}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <ResponsiveHeading.P className={classes.iconItemTitle}>
                    {item.title}
                  </ResponsiveHeading.P>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
