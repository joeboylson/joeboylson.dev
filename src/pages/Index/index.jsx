import React, { useMemo } from "react";
import BodyCopy from "../../components/BodyCopy";
import ImageBox from "../../components/ImageBox";
import LinkList from "../../components/LinkList";
import Page from "../../components/Page";
import SpacedContent from "../../components/SpacedContent";
import { useCursorText } from "../../hooks/useCursorText";
import { useProfileImage } from "../../hooks/useProfileImage";
import { GreetingWrapper } from "./StyledComponents";

const IndexPage = () => {

  const profileImage = useProfileImage();
  const { applyHoverText } = useCursorText();

  const greetingHoverEffect = useMemo(() => applyHoverText(";)"), [applyHoverText])
  const emailLinkHoverEffect = useMemo(() => applyHoverText("➯ Email me"), [applyHoverText])

  const socialLinks = useMemo(() => ([
    { to: "#", title: "LinkedIn", hoverEffect: applyHoverText("➯ Let's connect on LinkedIn") },
    { to: "#", title: "Github", hoverEffect: applyHoverText("➯ View my experience"), },
    { to: "#", title: "Instagram", hoverEffect: applyHoverText("➯ Check out my photography") },
  ]), [])

  return (
    <Page>

      {/* GREETING */}
      <GreetingWrapper>
        <h1 {...greetingHoverEffect}>Hi, I'm Joe</h1>
      </GreetingWrapper>
      
      {/* ABOUT ME */}
      <ImageBox
        fluid={profileImage.asset.fluid}
        reverse
        skewRight
      >
        <SpacedContent>
          <h2>About Me</h2>
          <BodyCopy
            sections={[
                `I focus primarily on Web Development and Photography, but also enjoy a variety of other activites that
                involve problem solving and self expression.`,
                `During the day, I work as a Software Engineer and utilize my problem-solving skills to develop and 
                maintain websites, often using cutting-edge web technologies to produce unique results.`,
                `I am currently attending the University of Cincinnati and plan to graduate in the Spring of 2022 with
                a Bachelors of Science in Software Development.`,
                `In my free time I shoot photography, hone my skills in the kitchen, practice Spanish, and work on
                personal web development projects.`,
                `To present a more rounded biography of myself, here are a few other things about me: I have a goal of
                living and working in Spain for at least a year, I've been listening to a lot of Jazz lately, I love
                Indian food, I make my own Kombucha, and I'm a big coffee guy.`
            ]}
          />
        </SpacedContent>
      </ImageBox>

      {/* CONTACT */}
      <SpacedContent>
        <h2>Contact</h2>
        <a {...emailLinkHoverEffect} href="mailto:joeboylson@gmail.com">joeboylson@gmail.com</a>
        <LinkList links={socialLinks}/>
      </SpacedContent>

    </Page>
  )
}

export default IndexPage
