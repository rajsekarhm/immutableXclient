import { Button, Stack } from "@mui/material";

interface ButtonComponentProps {
    description: string | undefined;
    onclickEvent: (event?:any) => void | any 
    buttonSize:string
    isDisabled?:boolean
  }
  
  const ButtonComponent: React.FC<ButtonComponentProps> = ({ description, onclickEvent,buttonSize,isDisabled = false }) => {
    const sizeStyles : any = {
        small: { padding: '5px 10px', fontSize: '12px' },
        medium: { padding: '10px 15px', fontSize: '14px' },
        large: { padding: '15px 20px', fontSize: '16px' },
      };
    return (
      <div> 
         <Button  variant="contained" onClick={onclickEvent} style={{...sizeStyles[buttonSize]}} disabled={isDisabled}>
        {description}
      </Button>
      </div>
    );
  };
  
  export default ButtonComponent;
  