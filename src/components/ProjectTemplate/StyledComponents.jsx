import styled from "styled-components";

export const ProjectTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;

    div:nth-child(2) {
        align-self: flex-end;
    }
`;

export const ProjectTextContentItem = styled.div`
    width: 100%;
    max-width: 700px;
`;