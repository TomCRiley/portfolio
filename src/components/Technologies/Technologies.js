import React from 'react';
import { DiAsterisk, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>I've worked with a range of tech so far,</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          Experience with <br />
          MongoDB and Node
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiAsterisk size='3rem' />
        <ListTitle>Currently learning...</ListTitle>
        <ListParagraph>
          I've dabbled in native Swift
          <br /> and have tried out React Native. I'm also looking at
          TypeScript.
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
