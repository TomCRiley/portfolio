import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Tom <span id='waveEmoji'>👋</span>
        <br />I like to make things<div id='cursor'></div>
      </SectionTitle>
      <SectionText>
        I'm a full stack junior web developer with a passion for tech.
      </SectionText>
      <Button
        onClick={() => (window.location = 'https://github.com/TomCRiley')}
      >
        GitHub
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
