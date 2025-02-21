import { Button } from "@mui/material";

export const ButtonHome = ({ Icon, Text , href }) => {
  return (
    <Button
      sx={{
        width: "350px",
        height: "60px",
        fontFamily: "DM Sans",
        color: "white",
        textTransform: "none",
        fontSize: "20px",
      }}
      startIcon={Icon}
      className="btn draw-border"
      href={href}
    >
      {Text}
    </Button>
  );
};
