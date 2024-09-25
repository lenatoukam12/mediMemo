import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, TextField, Typography, Link } from "@mui/material";
import "../App.css";
import logo from "../assets/Group.png";
import appName from "../assets/MEDIMEMO.png";
import { validationField, validationForm } from "../validation";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    const error = validationField(fieldName, value);
    if (!error) {
      //setErrors((prevState) => ({ ...prevState, [fieldName]: "" }));
      setErrors((prevState) => {
        const newState = { ...prevState };
        delete newState[fieldName];
        return newState;
      });
    } else {
      setErrors((prevState) => ({ ...prevState, [fieldName]: error }));
    }

    setCredentials((prevState) => {
      return { ...prevState, [fieldName]: value };
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const errors = validationForm(credentials);
      if (Object.keys(errors).length === 0) {
        // console.log(credentials);
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await result.json();
        console.log(data);

        const exists = data.some(
          (item) => item.username === credentials.username
        );
        if (exists) {
          navigate("/dashboard");
        } else {
          console.error("erreur");
        }
      } else {
        setErrors(errors);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={logo} />
        <img className="appName" src={appName} />
      </div>
      <div className="panel">
        <Typography fontWeight={700} fontSize={20} textAlign="center">
          Let&apos;s Sign You in!
        </Typography>
        <form
          className="form-login"
          onSubmit={handleLogin}
          //{(e) => {
          //  e.preventDefault(), console.log(credentials);
          //}}
        >
          <TextField
            value={credentials.name}
            name="username"
            type="username"
            label="Email or Username"
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            value={credentials.password}
            name="password"
            label="Password"
            type="error"
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Typography textAlign="right">
            <Link>Forget password</Link>
          </Typography>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#F00" }}
          >
            Login
          </Button>
        </form>
        <Typography textAlign="center">
          Don&apos;t have an count?<Link>Sign up!</Link>
        </Typography>
      </div>
    </div>
  );
}

//export default App;
