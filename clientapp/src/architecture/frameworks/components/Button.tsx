import { Button as ButtonComponent, Stack } from "@mui/material";

interface ButtonProps {
    description: string | undefined;
    onclickEvent: (event?:any) => void | any 
    buttonSize:string
    isDisabled?:boolean
  }
  
  const Button: React.FC<ButtonProps> = ({ description, onclickEvent,buttonSize,isDisabled = false }) => {
    const sizeStyles : any = {
        small: { padding: '5px 10px', fontSize: '12px' },
        medium: { padding: '10px 15px', fontSize: '14px' },
        large: { padding: '15px 20px', fontSize: '16px' },
      };
    return (
      <div> 
         <ButtonComponent  variant="contained" onClick={onclickEvent} style={{...sizeStyles[buttonSize]}} disabled={isDisabled}>
        {description}
      </ButtonComponent>
      </div>
    );
  };
  
  export default Button;
  