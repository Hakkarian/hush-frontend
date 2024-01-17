import styled from "styled-components";

const sizeS = "14px";
const sizeM = "16px";
const sizeL = "24px";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const Title = styled.h3`
    font-size: ${sizeL};
    margin-bottom: 0;
`;

export const Text = styled.p`
    font-size: ${sizeM};
`;

export const URL = styled.a`
    text-decoration: none;
    font-size: ${sizeS};
    color: #2196f3;
`;

export const Image = styled.img`
    display: block;
    max-width: 100%;
`