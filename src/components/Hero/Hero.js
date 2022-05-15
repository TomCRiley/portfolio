import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import Image from 'next/image';
// import TomMacbook from '/public/images/tom_macbook.png';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Tom <span id='Emoji'>👋</span>
        <br />I like to make things<div id='cursor'></div>
      </SectionTitle>
      <SectionText>
        I'm a junior full stack web developer with a passion for tech.
      </SectionText>
      {/* <div>
        <Image
          src='/public/images/tom_macbook.png'
          alt='Memoji'
          width={100}
          height={100}
        />
      </div> */}
      <Button
        onClick={() => (window.location = 'https://github.com/TomCRiley')}
      >
        GitHub
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
