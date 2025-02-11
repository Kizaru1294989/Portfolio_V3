import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export const IconTextField = ({
  iconStart,
  iconEnd,
  InputProps,
  Ref,
  ...props
}) => {
  return (
    <TextField
      //       sx={
      //         {
      //       input: { color: 'white' } ,
      //        "& .MuiInputLabel-root": {color: 'red'},
      //        "& .MuiOutlinedInput-root": {
      //    "& > fieldset": { borderColor: "white" },
      //  },
      //         }
      //       }
      variant="outlined"
      ref={Ref}
      {...props}
      InputProps={{
        ...InputProps,

        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : (
          ""
        ),
      }}
    />
  );
};
