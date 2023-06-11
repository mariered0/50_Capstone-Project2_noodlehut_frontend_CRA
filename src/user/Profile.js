import React, { useContext, useState } from "react";
import userContext from "./UserContext";
import { useFormik } from "formik";
import { updateSchema } from "../schemas/updateSchema";
import NoodleHutApi from "../api/api";
import ErrorMessage from "../common/ErrorMessage";
import SuccessMessage from "../common/SuccessMessage";
import { Container, Avatar, Typography, Grid, TextField, Button, Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [submitErrors, setErrors] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const onSubmit = async (values, actions, e) => {
    const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        isAdmin: false
    };

    try {
        const user = await NoodleHutApi.updateCurrentUserProf(currentUser.username, data);
        setCurrentUser(user);
        setErrors(null);
        setSaveSuccess(true);
    }catch (err){
        //Set server-side error to state.
      setErrors(submitErrors => [err]);
    }
  };

  const { handleBlur, errors, touched, handleChange, handleSubmit, values } = useFormik(
    {
        initialValues: {
            username: currentUser.username,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            phone: currentUser.phone,
            email: currentUser.email,
            isAdmin: false
      },
      validationSchema: updateSchema,
      onSubmit,
    }
  );

  return (
    <>
      <Container component="main" maxWidth="xs">
      {saveSuccess && <SuccessMessage content={`Information updated successfully!`}/>}
        <Box
          sx={{
            marginTop: saveSuccess && 2 || 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        > 
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Account Information
          </Typography>

          {submitErrors && <ErrorMessage error={submitErrors} />}

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  value={values.firstName}
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
                  value={values.lastName}
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
                  value={values.username}
                  disabled={true}
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
                  name="email"
                  autoComplete="email"
                  value={values.email}
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
                  name="phone"
                  autoComplete="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone && touched.phone ? true : false}
                  helperText={touched.phone ? errors.phone : ""}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
