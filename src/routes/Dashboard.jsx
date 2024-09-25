import { Button, TextField, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InputAdornment from "@mui/material/InputAdornment";

import logo from "../assets/Group.png";
import { ArrowBack } from "@mui/icons-material";

export function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <ArrowBack />
        <Typography>My profile</Typography>
        <EditIcon />
      </div>
      <div className="panel">
        <img className="logo" src={logo} />
        <Typography className="username"></Typography>
        <TextField id="outlined-basic" label="Medical ID" variant="outlined" />
        <TextField id="outlined-basic" label="Allergies" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Telephone"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Rue" variant="outlined" />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#F00" }}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
}
