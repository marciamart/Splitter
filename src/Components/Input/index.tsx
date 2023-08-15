import React, { Dispatch } from 'react';
import { IconContainer, InputContainer,InputAQ} from "./Input"
import { Div } from '../../Styles/Styles';

interface InputProps {
    inputText?: string
    icon?: React.ReactElement
    error?: string
    value: string
    setValue: Dispatch<string>
}

const Input: React.FC<InputProps> = ({icon, inputText, error, setValue, value})=>{
    const hasError = error === undefined? false: true


    return(
        <Div>
            <InputContainer hasError={hasError} htmlFor='value'>
                {icon === undefined? null : <IconContainer> {icon} </IconContainer> }
                <InputAQ id='value' name='value' placeholder={inputText} onChange={(e)=>setValue(e.target.value)} value={value} />
            </InputContainer>
            {error}
        </Div>
        
    )
    
} 

export default Input;


