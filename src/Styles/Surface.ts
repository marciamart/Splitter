import { styled } from "styled-components";

export const Surface = styled.div`
display: flex;
background-color: #FFFFFF;
width: 100%;
max-width: 806px;
min-width: 360px;
padding: 2rem;
gap: 2rem;
border-radius: 24px;


@media screen and (max-width:750px){
    flex-direction: column;
}
`