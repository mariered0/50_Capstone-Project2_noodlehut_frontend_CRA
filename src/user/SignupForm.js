import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./UserContext";
import { useFormik } from "formik";
import { userFormSchema } from "../schemas";
import Copyright from "./Copyright";
import ErrorMessage from "../common/ErrorMessage";
import { Container, Avatar, Typography, Grid, TextField,  Button, Link, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


const SignupForm = () => {
  const { token, signup } = useContext(userContext);
  const navigate = useNavigate();
  const [submitErrors, setErrors ] = useState(null);

  const onSubmit = async (values, actions, e) => {
    const msg = await signup(values);
    if (msg.success) {
      navigate.apply('/');
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
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      isAdmin: false
    },
    validationSchema: userFormSchema,
    onSubmit,
  });

  return (
    <>
    
    <Container component="main" maxWidth="xs">
      
      <Box 
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {submitErrors && <ErrorMessage error={submitErrors} /> }

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName && touched.firstName ? true : false} 
                helperText={touched.firstName ? errors.firstName : ""}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName ? true : false} 
                helperText={touched.lastName ? errors.lastName : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username ? true : false} 
                helperText={touched.username ? errors.username : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email ? true : false} 
                helperText={touched.email ? errors.email : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone ? true : false} 
                helperText={touched.phone ? errors.phone : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
 
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
        <Copyright sx={{mt: 5}} />
    </Container>
    </>
  );
};



export default SignupForm;
