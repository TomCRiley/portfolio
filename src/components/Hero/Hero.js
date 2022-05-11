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
        Hey, I'm Tom
        <br />I like to make things
      </SectionTitle>
      <SectionText>
        I'm a full stack junior web developer with a passion for trying cool new
        things out and writing readable code.
      </SectionText>
      <Button
        onClick={() => (window.location = 'https://github.com/TomCRiley')}
      >
        Things I Made
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
