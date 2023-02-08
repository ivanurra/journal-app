import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  displayName: "John Doe",
  email: "johndoe@mail.com",
  password: "123456",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email must contain @"],
  password: [
    (value) => value.length >= 6,
    "Password must contain at least 6 characters.",
  ],
  displayName: [(value) => value.length >= 1, "Name is mandatory."],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
  };

  return (
    <AuthLayout title="CREATE YOUR ACCOUNT">
      <h1>FormValid {isFormValid ? "Valid" : "Not valid"}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@domain.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
              >
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
