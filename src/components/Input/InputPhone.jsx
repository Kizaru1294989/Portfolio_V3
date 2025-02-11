import React from "react";
import { IconTextField } from "./IconTextField";

const InputPhone = ({
  classname,
  required,
  placeholder,
  value,
  type,
  onChange,
  dataOnChange,
  error,
  errorlabel,
  Icon,
  Ref,
}) => {
  return (
    <>
      <IconTextField
        Ref={Ref}
        placeholder={"00 00 00 00 00"}
        iconStart={Icon}
        style={{ width: "100%" }}
        error={error}
        helperText={error ? errorlabel : ""}
        id="outlined"
        variant="outlined"
        label={placeholder}
        className={classname}
        type={type}
        value={value}
        sx={{
          input: { color: "black" },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
        onChange={(e) => {
          const formattedValue = e.target.value
            .replace(/\s/g, "")
            .replace(/(\d{2})(?=\d)/g, "$1 "); // autospace
          onChange(
            dataOnChange.state,
            dataOnChange.setState,
            dataOnChange.name,
            formattedValue,
          );
        }}
        required={required}
      />
    </>
  );
};

export default InputPhone;
