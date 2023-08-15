import {StyleChipButton} from './ChipButton';

interface ChipButtonProps{
    value: string
    onClick?: () => void
    active?: boolean
}

const ChipButton: React.FC<ChipButtonProps> = ({value, onClick,active}) => {
 
  return (
    <StyleChipButton onClick={onClick} active={active}>
        {value}
    </StyleChipButton>
  );
};

export default ChipButton ;