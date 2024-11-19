// components/StyledButton.tsx
import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

interface StyledButtonProps extends ButtonProps {
  buttonText : string;
  setButtonText : React.Dispatch<React.SetStateAction<string>>;
  scrollHandler : () => void;
  v : string;
}

const StyledButton: FC<StyledButtonProps> = ({ 
  children,
  buttonText,
  setButtonText,
  v
}) => {
  return (
    <Button
        fontSize={["13px", "13px", "13px", "14px", "15px", "15px", "15px"]}
        variant="unstyled"
        color="#333333" // 기본 텍스트 색상
        position="relative"
        onClick={() => {
          setButtonText(v);
        }}
        h="auto"
        _hover={{
          "color" : "#A3468C",
        }}
        transition="color 0.2s ease"
        _after={{
          content : "''",
          position : "absolute",
          bottom : -2,
          left : 0,
          width : children === buttonText ?  "100%" : "0",
          height : "2px",
          backgroundColor : "#A3468C",
          transition : "width 0.5s ease"
        }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
