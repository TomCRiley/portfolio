import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';

import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Human things <span id='Emoji'>💃🏻</span>
    </SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.thing}</BoxNum>

          <BoxText href={card.url}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
