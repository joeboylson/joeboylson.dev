import React, { useMemo } from "react"
import LinkList from "../LinkList"
import { useLocation } from '@reach/router';
import { NavContainer, NavLinkListWrapper } from "./StyledComponents"
import { useCursorText } from "../../hooks/useCursorText"


const Nav = () => {

  const { applyHoverText } = useCursorText();
  const { pathname } = useLocation();

  const links = useMemo(() => ([
    { to: "/home", title: "Home", hoverEffect: applyHoverText("➯ Go Home") },
    { to: "/projects", title: "Projects", hoverEffect: applyHoverText("➯ Open Projects") },
    { to: "/gallery", title: "Gallery", hoverEffect: applyHoverText("➯ Open Gallery") },
  ]), [applyHoverText]);

  return (
    <NavContainer>
      <NavLinkListWrapper>
        <LinkList links={links} selected={pathname} />
      </NavLinkListWrapper>
    </NavContainer>
  )
}

export default Nav
