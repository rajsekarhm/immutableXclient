import {Button as ButtonSN} from '../components/shadcn/Button'
interface ButtonProps {
    description: string | any;
    onclickEvent: (event?:any) => void | any 
    buttonSize?:string
    isDisabled?:boolean
  }
  
  const Button: React.FC<ButtonProps> = ({ description, onclickEvent,buttonSize,isDisabled = false }) => {
    return (
      <>
       <ButtonSN  className="bg-black text-white" variant={"outline"} onClick={onclickEvent} disabled={isDisabled}> {description} </ButtonSN>
      </>
    );
  };
  
  export default Button;
  