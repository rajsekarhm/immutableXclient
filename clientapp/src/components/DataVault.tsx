import { ChangeEvent, MouseEventHandler } from "react";

type field_DataValut = {
  defaultValue?: string | undefined;
  className: string;
  type: string;
  name: string;
  description: string;
  pattern?: string;
  maxlength?: number;
};

type dateVaultType = {
  componentInfo: field_DataValut;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick?: MouseEventHandler<HTMLInputElement>;
};

function DataVault({ handleInput, componentInfo, handleClick }: dateVaultType) {
  const {
    defaultValue,
    className,
    type,
    name,
    description,
    pattern,
    maxlength,
  } = componentInfo;
  return (
    <div className="form-group">
      <label>
        <h6>{description}:</h6>
        <input
          defaultValue={defaultValue}
          type={type}
          className={className}
          name={name}
          onClick={handleClick}
          onChange={handleInput}
          pattern={pattern}
          maxLength={maxlength}
        />
      </label>
    </div>
  );
}

export { DataVault, field_DataValut };
