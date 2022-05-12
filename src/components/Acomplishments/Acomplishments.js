import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Side Quests</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.thing}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
