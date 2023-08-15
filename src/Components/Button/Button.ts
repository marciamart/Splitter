import styled from 'styled-components';

export const StyleButton = styled.button`

    background-color: rgba(38, 194, 173, 1);
    border-radius: 6px;
    padding: 12px 16px 12px 16px ;
    color: rgba(0, 71, 75, 1);
    width: 100%;
    font-family: 'Space Mono', monospace;

    &:hover{
        background-color: rgba(159, 232, 223, 1);
    }

    &:disabled{
        background-color: rgba(13, 104, 109, 1);
    }
`