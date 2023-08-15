import { styled } from "styled-components";

export const Body = styled.body`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;
background-color: rgba(197, 228, 231, 1);

@media screen and (max-width:750px){
    gap: 24px;
    padding-top: 2rem;
}
`
