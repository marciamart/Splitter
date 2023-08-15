import styled, { css } from 'styled-components';

interface ChipButtonProps{
    active?: boolean
}

export const StyleChipButton = styled.button<ChipButtonProps>`

    background-color: #00474B;
    border-radius: 6px;
    padding: 12px 32px 12px 32px ;
    width: 100%;
    color: #FFFFFF;
    font-family: 'Space Mono', monospace;
    font-size: 16px;

    &:hover{
        background-color: #9FE8DF;
        color: #00474B;
    }

    ${({active})=>active?css`background-color: #27C0AC; color: #00474B` : ''}
`