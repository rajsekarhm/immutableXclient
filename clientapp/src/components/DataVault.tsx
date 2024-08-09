import { ChangeEvent } from "react";

type dateVaultType = {
  componentInfo: {
    defaultValue: string | undefined;
    className: string;
    type: string;
    name: string;
    description: string;
    pattern: string;
    maxlength: number;
  };
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

function DataVault({ handleInput, componentInfo }: dateVaultType) {
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
          onClick={() => {}}
          onChange={handleInput}
          pattern={pattern}
          maxLength={maxlength}
        />
      </label>
    </div>
  );
}

export { DataVault };
