import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
   <LeftSection>
     <SectionTitle main center >
       Welcome to <br/>
       my Personal Portfolio
     </SectionTitle>

     <SectionText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
     </SectionText>
     <Button onClick= {() => window.location = 'https://gmail.com/' } >Learn More</Button>
   </LeftSection>
  </Section>
);

export default Hero;