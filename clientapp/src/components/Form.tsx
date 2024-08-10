import { DataVault, field_DataValut } from "./DataVault";

type FormProps = {
  fields: field_DataValut[];
  handleChange: (event: any) => void | any;
  handleClick: (event: any) => void | any;
  onSubmit: (event: any) => void | any;
};

const Form = ({ fields, handleChange, handleClick, onSubmit }: FormProps) => {
  return (
    <div className="form">
      <form>
        {fields.map((field, index) => (
          <DataVault
            key={index}
            componentInfo={field}
            handleInput={handleChange}
            handleClick={field.type === "file" ? handleClick : undefined}
          />
        ))}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
