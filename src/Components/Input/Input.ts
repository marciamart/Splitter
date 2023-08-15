import { css, styled } from "styled-components";



interface InputProps{
    hasError: boolean;
}
export const Box = styled.div``

export const InputContainer = styled.label<InputProps>`
    display: flex;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    height: 48px;
    background-color: rgba(243, 248, 251, 1);
    color: rgba(113, 164, 168, 1);
    align-items: center;
    position: relative;

    &:focus-within{
        outline: 1px solid #5FABA1;
    }

    ${({hasError})=> hasError? css`outline: 1px solid #B47C6D` : ''}
`

export const IconContainer = styled.div`
    display: flex;
    height:100%;
    justify-content: center;
    align-items: center;
`
export const InputAQ = styled.input`
    display: flex;
    width: 100%;
    height: 32px;
    outline:none;
    background-color: transparent;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    color: #71A4A8;
    text-align: end;
`