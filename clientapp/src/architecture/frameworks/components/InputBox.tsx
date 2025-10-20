import { ChangeEvent, MouseEventHandler } from "react";
import { Input } from "./shadcn/Input";

type inputBoxFields = {
  minlength ?: any
  defaultValue?: string | undefined;
  className: string;
  type: string;
  name: string;
  description: string;
  pattern?: string;
  maxlength?: number;
  helperText?: string;
  id?: string;
  style?: any;
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
    id,
    style,
    minlength
  } = componentInfo;
  return (
    <div className={className} style={style}>
      <Input
        onChange={handleInput}
        onClick={handleClick}
        name={name}
        type={type}
        defaultValue={defaultValue}
        id={id}
        placeholder={description}
        pattern={pattern}
        maxLength={maxlength}
        minLength={minlength || 1}
      />
      <br/>
    </div>
  );
}

export { InputBox, inputBoxFields };
