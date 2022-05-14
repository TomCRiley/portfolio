import React from 'react';

import { BiCodeAlt, BiLinkExternal } from 'react-icons/bi';
import { HiExternalLink } from 'react-icons/hi';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { DiGithub, DiGithubAlt, DiGithubBadge } from 'react-icons/di';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>
      Side Quests <span id='Emoji'>✨</span>
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, img, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={img} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>
              <BiLinkExternal size='3rem' />
            </ExternalLinks>
            <ExternalLinks href={source}>
              <DiGithubBadge size='3rem' />
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
