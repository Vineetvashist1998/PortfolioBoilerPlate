import React from 'react';
import { DiFirebase, DiReact, DiUikit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech" >
  <SectionDivider/>
  <h1></h1>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size= "3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph> Experience with <br/> React.js</ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size= "3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph> Experience with <br/>Node & Databases</ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiUikit size= "3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph> Experience with <br/>Tools like Adobe XD</ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
