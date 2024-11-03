import { Stack } from "@mui/material";
import Button from "./Button";
import { InputBox, inputBoxFields } from "./InputBox";

type FormProps = {
  schema: inputBoxFields[];
  handleChange: (event: any) => void | any;
  handleClick: (event: any) => void | any;
  onSubmit: (event: any) => void | any;
};

const Form = ({ schema, handleChange, handleClick, onSubmit }: FormProps) => {
  return (
    <div className="form">
      <Stack>
        {schema.map((field, index) => (
          <InputBox
            key={index}
            componentInfo={field}
            handleInput={handleChange}
            handleClick={field.type === "file" ? handleClick : undefined}
          />
        ))}
      </Stack>
      <Button buttonSize="small" onclickEvent={onSubmit} description="submit" />
    </div>
  );
};

export default Form;
