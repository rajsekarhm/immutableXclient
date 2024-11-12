import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import Button from "./Button";
import { InputBox, inputBoxFields } from "./InputBox";

type FormProps = {
  schema: inputBoxFields[];
  handleChange: (event: any) => void | any;
  handleClick: (event: any) => void | any;
  onSubmit: (event: any) => void | any;
};

const Form = ({ schema, handleChange, handleClick, onSubmit }: FormProps) => {
  const { inputsFileds, isSelectFieldsNeed, selectFields }  : any= schema
  return (
    <div className="form">
      <Stack>
        {inputsFileds.map((field:any, index:any) => (
          <InputBox
            key={index}
            componentInfo={field}
            handleInput={handleChange}
            handleClick={field.type === "file" ? handleClick : undefined}
          />
        ))}
      </Stack>
      {isSelectFieldsNeed ? selectFields.map((select:any) => {
        const {fields,handleChange, description,defaultOption} = select
        const default_value = defaultOption
        return(
          <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
          <InputLabel >{description}</InputLabel>
          <Select
            name = {description}
            label={description}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {fields.map((field:any) =>  <MenuItem value={field.value}>{field.option}</MenuItem> )}
          </Select>
          </FormControl>
        )
      }) : null}
      <Button onclickEvent={onSubmit} description="submit" />
    </div>
  );
};

export default Form;

 