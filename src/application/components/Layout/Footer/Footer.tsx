import React from 'react';
import { Container } from '@mantine/core';
import { clsx } from 'clsx';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { useFooterStyles } from './Footer.styles';
import { FooterHeading } from '@/application/components/Layout/Footer/FooterHeading';
import { contactUsData, footerLinks, socials } from '@/application/data/data';

export function Footer() {
  const { classes } = useFooterStyles();
  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.innerFooter}>
        {/*   First Footer Col  */}
        <div className={classes.footerCol}>
          <FooterHeading>My Account</FooterHeading>
          <FooterHeading>Sign In</FooterHeading>
          <FooterHeading>Create Account</FooterHeading>
          <FooterHeading>Forgot Password</FooterHeading>
        </div>

        {/*   Second Footer col   */}
        <div className={clsx(classes.footerCol, classes.borderLeft)}>
          <FooterHeading>{footerLinks.our_company.name}</FooterHeading>

          <div>
            {footerLinks.our_company.links.map((link) => (
              <div key={link.name} className={classes.footerLink}>
                {link.name}
              </div>
            ))}
          </div>

          <FooterHeading className={classes.contactUs}>Contact Us</FooterHeading>

          <div className={classes.footerLink}>{contactUsData.address}</div>

          <a href={`mailto:${contactUsData.email}`} className={classes.footerLink}>
            {contactUsData.email}
          </a>
        </div>

        {/*   Third Footer Col    */}
        <div className={clsx(classes.footerCol, classes.borderLeft, classes.responsiveBorderLeft)}>
          <FooterHeading>{footerLinks.services.name}</FooterHeading>

          <div>
            {footerLinks.services.links.map((link) => (
              <div key={link.name}>
                <div className={classes.footerLink}>{link.name}</div>
                <div className={classes.subLinks}>
                  {link.subLinks.map((subLink) => (
                    <Link key={subLink.name} href={subLink.href}>
                      <div className={clsx(classes.footerLink, classes.subLink)}>
                        - &nbsp;
                        {subLink.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*   Fourth Footer Col    */}
        <div className={clsx(classes.footerCol, classes.borderLeft)}>
          <FooterHeading>Help</FooterHeading>
          <FooterHeading>Instant Quote</FooterHeading>
          <FooterHeading>Sizing</FooterHeading>
          <FooterHeading>Custom Art Design</FooterHeading>
          <FooterHeading>FAQ</FooterHeading>

          <div>
            <FooterHeading className={classes.followUs}>Follow Us</FooterHeading>
          </div>

          <div className={classes.socials}>
            {socials.instagram && (
              <a
                href={socials.instagram.href}
                rel="noreferrer noopener"
                className={classes.socialLink}
              >
                <FaInstagram />
              </a>
            )}

            {socials.youtube && (
              <a
                href={socials.youtube.href}
                rel="noreferrer noopener"
                className={classes.socialLink}
              >
                <AiOutlineYoutube />
              </a>
            )}

            {socials.facebook && (
              <a
                href={socials.facebook.href}
                rel="noreferrer noopener"
                className={classes.socialLink}
              >
                <FaFacebookF />
              </a>
            )}

            {socials.linkedIn && (
              <a
                href={socials.linkedIn.href}
                rel="noreferrer noopener"
                className={classes.socialLink}
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
