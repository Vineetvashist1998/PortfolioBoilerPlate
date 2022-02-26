import Link from 'next/link';
import React from 'react';
import { AiFillAudio, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillShopping, AiFillThunderbolt } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" >
       <a style={{display :"flex", alignItems : "center", color :'white', marginBottom: "20px"}} >
         <DiCssdeck size = "3rem" /><Span>Portfolio</Span>
       </a>
      </Link>
    </Div1>

    <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
       
    </Div2>

    <Div3>
      <SocialIcons hreaf="wwww.github.com" >
           <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons hreaf="wwww.linkdin.com" >
           <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons hreaf="wwww.instagram.com" >
           <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons hreaf="#Footer" >
           <AiFillThunderbolt size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
