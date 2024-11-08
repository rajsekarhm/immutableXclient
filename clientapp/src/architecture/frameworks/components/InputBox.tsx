import { Box, TextField } from "@mui/material";
import { ChangeEvent, MouseEventHandler } from "react";

type inputBoxFields = {
  defaultValue?: string | undefined;
  className: string;
  type: string;
  name: string;
  description: string;
  pattern?: string;
  maxlength?: number;
  helperText?:string
  id?:string
  style?:any
};

type inputBoxProps = {
  componentInfo: inputBoxFields;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick?: MouseEventHandler<HTMLInputElement>;
};

function InputBox({ handleInput, componentInfo, handleClick }: inputBoxProps) {
  const {
    defaultValue,
    className,
    type,
    name,
    description,
    pattern,
    maxlength,
    helperText,
    id,
    style
  } = componentInfo;
  return (
    <div className={className} style={style} >
      <Box>
        <TextField 
          name={name}
          type={type}
          defaultValue={defaultValue}
          id={id}
          label={description}
          onClick={handleClick ? handleClick : () => {}}
          onChange={handleInput} 
          helperText= {helperText}/>
        </Box>
        <br/>
    </div>
  );
}

export { InputBox, inputBoxFields };
