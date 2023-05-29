import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./UserContext";
import { useFormik } from "formik";
import { signInSchema } from "../schemas/signInSchema";
import Copyright from "./Copyright";
import ErrorMessage from "../common/ErrorMessage";
import { CssBaseline, Container, Avatar, Typography, Grid, TextField,  Button, Link, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SigninForm = () => {
    const { token, signin } = useContext(userContext);
    const navigate = useNavigate();
    const [submitErrors, setErrors ] = useState(null);

    const onSubmit = async (values, actions, e) => {
        console.log('it was ran');
        console.log('enterd values:', values);
        const msg = await signin(values);
        if (msg.success) {
          navigate('/');
          console.log("submitted successfully!")
          actions.resetForm();
        }else {
          //Set server-side error to state.
          setErrors(submitErrors => [msg.e[0].data.error.message]);
        }
      }

    const { handleBlur, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        validationSchema: signInSchema,
        onSubmit,
      });

    return (
    // <ThemeProvider theme={defaultTheme}>
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {submitErrors && <ErrorMessage error={submitErrors} /> }

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username ? true : false} 
              helperText={touched.username ? errors.username : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password ? true : false} 
              helperText={touched.password ? errors.password : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid justifyContent="flex-end"
                  container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </>
    // </ThemeProvider>
    )
}

export default SigninForm;