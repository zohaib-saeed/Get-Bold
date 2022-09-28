import React, { useState } from 'react';
import { Container, Group, ActionIcon, Stack } from '@mantine/core';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import { clsx } from 'clsx';
import { Carousel, Embla } from '@mantine/carousel';
import { useSellersStyles } from '@/application/components/homePage/SellersSection.styles';
import { ResponsiveHeading } from '@/application/components/ResponsiveHeading/ResponsiveHeading';
import { ProductCard } from '@/application/components/ProductCard/ProductCard';

type Props = {};

export function SellersSection(props: Props) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const { classes } = useSellersStyles();

  const onNextClick = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  const onPrevClick = () => {
    if (embla) {
      embla.scrollPrev();
    }
  };

  return (
    <div className={classes.sellers}>
      <Container size="xl">
        <div className={classes.bestSellersWithButtons}>
          <ResponsiveHeading.H1WithGreen normalText="Our Best" greenText="Sellers" />
          <Group spacing="xs">
            <ActionIcon onClick={onPrevClick} className={clsx(classes.actionIconNormal)}>
              <MdOutlineArrowBackIosNew size={15} />
            </ActionIcon>
            <ActionIcon onClick={onNextClick} className={clsx(classes.actionIconBack)}>
              <MdOutlineArrowForwardIos size={15} />
            </ActionIcon>
          </Group>
        </div>

        {/*  Carousel  Items    */}
        <div className={classes.carouselContainer}>
          <Carousel
            slideGap="md"
            align="start"
            getEmblaApi={setEmbla}
            withControls={false}
            slideSize="33.333333%"
            loop
            slidesToScroll={1}
            breakpoints={[
              { maxWidth: 'lg', slideSize: '50%' },
              { maxWidth: 'md', slideSize: '100%' },
            ]}
            // mx="auto"
            // height={566}
          >
            <Carousel.Slide>
              <ProductCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProductCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProductCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProductCard />
            </Carousel.Slide>
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
