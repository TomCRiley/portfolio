import React from 'react';
import { DiFirebase, DiReact, DiSwift } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <br />
    <SectionTitle>
      Tech Stack <span id='Emoji'>❤️‍🔥</span>
    </SectionTitle>
    <SectionText>Technology I've worked with:</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/ES6</li>
          <li>SASS</li>
          <li>React.js</li>
          <li>MERN</li>
          <li>MUI5</li>
          <li>Bulma.io</li>
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          <li>Python</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Sanity.io</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>PostreSQL</li>
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiSwift size='3rem' />
        <ListTitle>Dabbled with...</ListTitle>
        <ListParagraph>
          <li>Swift</li>
          <li>TypeScript</li>
          <li>NextJS</li>
          <li>React Native</li>
          <li>XCode</li>
        </ListParagraph>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
