import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href="tel:100-100-100">9717715918</LinkItem>
      </LinkColumn>

      <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="mailto:vineet.vashist.54@gmail.com">vineet.vashist.54@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>

     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Innovating one Project at a Time</Slogan>
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons hreaf="wwww.github.com" >
           <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons hreaf="wwww.linkdin.com" >
           <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons hreaf="wwww.instagram.com" >
           <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
