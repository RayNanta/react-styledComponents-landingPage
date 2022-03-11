import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { 
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon  
  } from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusve membership to receive the latest news and trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubscribe at any time.
            </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email" />
                <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Services</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Gmail</FooterLink>
              <FooterLink to='/'>Yahoo</FooterLink>
              <FooterLink to='/'>Call Center</FooterLink>
              <FooterLink to='/'>Direct Message</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Introduction</FooterLink>
              <FooterLink to='/'>Products</FooterLink>
              <FooterLink to='/'>Clients</FooterLink>
              <FooterLink to='/'>Our Commitment</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>YouTube</FooterLink>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              TieAwsm.
            </SocialLogo>
            <WebsiteRights>TieAwsm. ©2022</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer