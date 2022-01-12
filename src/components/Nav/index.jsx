import React, { useMemo } from "react"
import styled from "styled-components";
import LinkList from "../LinkList"
import { useLocation } from '@reach/router';
import { useCursorText } from "../../hooks/useCursorText"

const NavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: var(--background);
    border-bottom: 1px solid black;
    z-index: +1;
`;
    
const NavLinkListWrapper = styled.div`
    padding: 12px 36px;
    display: flex;
    gap: 6px;
    margin: auto;
    max-width: calc(1400px - 48px);
`;

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
