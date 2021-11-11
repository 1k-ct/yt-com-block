import React from "react";
import "./App.css";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles, styled } from "@mui/material/styles";
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import { color, minWidth } from "@mui/system";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const word = data.get("words");
    const user = data.get("user");
    console.log(word);
    console.log(user);
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#282c34",
        minWidth: "350px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* <header
        style={{
          backgroundColor: "#282c34",
          minWidth: "400px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      > */}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BasicSwitch label="禁止ワードをブロックする" />
        <BasicSwitch label="チャンネルをブロックする" />
        <Typography component="h1" variant="h5">
          登録
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "90%" }}
        >
          <TextField
            margin="normal"
            required
            variant="filled"
            fullWidth
            id="words"
            label="words"
            name="words"
            autoComplete="words"
            // autoFocus
            focused
            color="success"
          />
          <TextField
            margin="normal"
            required
            variant="filled"
            fullWidth
            id="user"
            label="user"
            name="user"
            autoComplete="user"
            // autoFocus
            focused
            color="success"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2, width: "40%" }}
          >
            Register
          </Button>
        </Box>
      </Box>
      {/* </header> */}
    </div>
  );
}

function BasicSwitch({ label }: { label: string }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any): void => {
    setChecked(event.target.checked);
  };

  // const booLabel = (is: boolean): string => {
  //   if (is) {
  //     return "Android12";
  //   }
  //   return "Android13";
  // };

  return (
    <FormGroup>
      <FormControlLabel
        checked={checked}
        onChange={handleChange}
        control={<Android12Switch defaultChecked color="success" />}
        // label={booLabel(checked)}
        label={label}
        sx={{ color: "white" }}
      // style={{ color: "white", minWidth: "350px" }}
      />
    </FormGroup>
  );
}
