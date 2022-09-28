import React from 'react';
import Image from 'next/image';
import { Container, Divider, Input } from '@mantine/core';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { useHeaderStyles } from '@/application/components/Layout/Header/Header.styles';
import { MobileMenuBtn } from '@/application/components/Layout/Header/MobileMenuBtn';

type Props = {};

const categories = [
  { name: 'Tops' },
  { name: 'Hats' },
  { name: 'Outerwear' },
  { name: 'Workwear' },
  { name: 'Gender' },
  { name: 'Bottoms' },
  { name: 'Accesories' },
  { name: 'Sales' },
];

export function Header(props: Props) {
  const { classes } = useHeaderStyles();
  return (
    <div className={classes.header}>
      <div className={classes.topBar}>
        Free Shipping | Get as little as 12 mixed units per design
      </div>
      <Container size="xl">
        <div className={classes.innerHeader}>
          {/*   Left Logo Section */}
          <Link href="/src/pages">
            <div className={classes.logo}>
              <Image src="/logo.svg" width={200} height={43} />
            </div>
          </Link>
          <div className={classes.input}>
            <Input placeholder="Search in here..." rightSection={<FiSearch />} />
          </div>
          <div className={classes.rightSection}>
            {/*   Help Here */}
            <div className={classes.actionItem}>
              <div className={classes.actionImg}>
                <Image src="/HomePage/customer-support.svg" width={35} height={35} />
              </div>
              <div className={classes.actionItemData}>
                <div className={classes.topTitle}>Help Here</div>
                <div className={classes.title}>+1 866 333 2553</div>
              </div>
            </div>

            {/*   Sign In */}
            <div className={classes.actionItem}>
              <div className={classes.actionImg}>
                <Image src="/HomePage/add-user.svg" width={35} height={35} />
              </div>
              <div className={classes.actionItemData}>
                <div className={classes.topTitle}>Sign In</div>
                <div className={classes.title}>My Account</div>
              </div>
            </div>
            {/* cart */}
            <div className={classes.cart}>
              <div className={classes.actionImg}>
                <Image src="/HomePage/cart.svg" width={35} height={35} />
              </div>
              <div className={classes.cartNo}>0</div>
            </div>
            {/*  Mobile Menu Btn  */}
            <div className={classes.mobileMenuBtn}>
              <MobileMenuBtn />
            </div>
          </div>
        </div>
        <div className={classes.dividerContainer}>
          <Divider />
        </div>

        {/* Categories */}
        <div className={classes.categories}>
          {categories.map((category) => (
            <div className={classes.category} key={category.name}>
              {category.name}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
