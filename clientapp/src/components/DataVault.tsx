import { Box, TextField } from "@mui/material";
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
    <div className={className}>
      <Box>
          <TextField 
          name={name}
          type={type}
          defaultValue={defaultValue}
          id="outlined-required"
          label={description}
          onClick={handleClick ? handleClick : () => {}}
          onChange={handleInput} />
        </Box>
    </div>
  );
}

export { DataVault, field_DataValut };
