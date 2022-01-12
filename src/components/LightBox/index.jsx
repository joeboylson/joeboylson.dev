import React from "react";
import styled from "styled-components";

const LightBoxContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: +2;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    display: grid;
    place-items: center;
`;

const LightBox = ({ children, onExit, id }) => {
    return (
        <LightBoxContainer onClick={onExit} id={id}>
            { children }
        </LightBoxContainer>
    )
}

export default LightBox;