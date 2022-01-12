import React, { useMemo } from "react"
import styled from "styled-components";
import FullWidthSolidus from "../FullWidthSolidus";
import { Link } from "gatsby"
import MigraAsterisk from "../MigraAsterisk";

const LinkListContainer = styled.div`
    display: flex;
    gap: 4px;
`;

const LinkList = ({ links, selected=null }) => {

  const listItems = useMemo(() => {
    return links.reduce((_links, {to, title, hoverEffect}, i) => {

      const isSelected = to === selected;
      const isLastLink = i === (links.length - 1)
      const _hoverEffect = isSelected ? {} : hoverEffect

      const LinkComponent = () => (
        <Link to={to} {..._hoverEffect}>
          {title}
          { isSelected && <MigraAsterisk/> }
        </Link>
      )

      if (isLastLink) return [..._links, LinkComponent];
      return [..._links, LinkComponent, FullWidthSolidus]
    }, [])

  }, [links, selected]);

  return (
    <LinkListContainer>
      { listItems.map((Component, i) => ( <Component key={i}/> ))}
    </LinkListContainer>
  )
}

export default LinkList
