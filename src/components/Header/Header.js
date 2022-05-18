import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { DiApple, DiCssdeck } from 'react-icons/di';
import { HeaderMemoji } from '../../constants/constants';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
          }}
        >
          {/* <img src={HeaderMemoji.img} alt={HeaderMemoji.alt} /> */}
          {/* <AiFillBuild size='3rem' />  */}
          <Span>👨🏻‍💻tomriley.dev</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href='https://github.com/TomCRiley'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://github.com/TomCRiley'
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
    </Div3>
  </Container>
);

export default Header;
