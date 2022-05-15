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
            Thanks for making it this far! Check out my GitHub and LinkedIn to
            the right, or send me an email.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/TomCRiley'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://github.com/TomCRiley'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='mailto:hello@tomriley.dev'>
          <AiTwotoneMail size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
