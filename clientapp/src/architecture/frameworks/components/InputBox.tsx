import { ChangeEvent, MouseEventHandler } from "react";
import { Input } from "./shadcn/Input";

type inputBoxFields = {
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
      />
      <br/>
    </div>
  );
}

export { InputBox, inputBoxFields };
