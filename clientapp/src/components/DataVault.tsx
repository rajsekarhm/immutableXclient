import { ChangeEvent } from "react";

type dateVaultType = {
  componentInfo : {
    className:string,
    type:string,
    name:string,
    description:string
  },
  handleInput: (event:ChangeEvent<HTMLInputElement>) => void
}

function DataVault({ handleInput,componentInfo }:dateVaultType) {
  const {className,type,name,description} =  componentInfo
  return (
    <div className="form-group">
      <label>
        <h6>{description}:</h6>
        <input
          type={type}
          className={className}
          name={name}
          onClick={() => {}}
          onChange={handleInput}
        />
      </label>
    </div>
  );
}

export { DataVault };
