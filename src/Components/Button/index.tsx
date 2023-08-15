import {StyleButton} from './Button';

interface ButtonProps{
    title: string
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, disabled, ...props }) => {
 
  return (
    <StyleButton disabled={disabled}>
        {title}
    </StyleButton>
  );
};

export default Button;