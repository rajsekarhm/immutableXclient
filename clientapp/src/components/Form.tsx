import { Stack } from "@mui/material";
import ButtonComponent from "./Button";
import { DataVault, field_DataVault } from "./DataVault";

type FormProps = {
  fields: field_DataVault[];
  handleChange: (event: any) => void | any;
  handleClick: (event: any) => void | any;
  onSubmit: (event: any) => void | any;
};

const Form = ({ fields, handleChange, handleClick, onSubmit }: FormProps) => {
  return (
    <div className="form">
      <Stack>
      {fields.map((field, index) => (
          <DataVault
            key={index}
            componentInfo={field}
            handleInput={handleChange}
            handleClick={field.type === "file" ? handleClick : undefined}
          />
        ))}
      </Stack>
        <ButtonComponent buttonSize="small" onclickEvent={onSubmit} description="submit"/>
    </div>
  );
};

export default Form;
