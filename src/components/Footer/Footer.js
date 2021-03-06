import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiTwotoneMail,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:hello@tomriley.dev'>
            👨🏻‍💻 hello@tomriley.dev
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Thanks for making it this far! Check out my GitHub and LinkedIn, or
            send me an email.
          </Slogan>
        </CompanyContainer>
        <SocialIcons
          href='https://github.com/TomCRiley'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons
          href='https://www.linkedin.com/in/tomcriley/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons
          href='mailto:hello@tomriley.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiTwotoneMail size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
