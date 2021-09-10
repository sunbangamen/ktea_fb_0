import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp } from "../../helpers/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      <Link color="inherit" href="#">
        (사)안전재해환경대책본부
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  // material
  const classes = useStyles();

  // functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await signUp(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원 가입
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="company" label="회사명" id="company" autoComplete="company" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" required fullWidth id="lastName" label="이름" name="lastName" autoComplete="lname" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="phone" name="phone" variant="outlined" required fullWidth id="phone" label="연락처" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="phone1" name="phone1" variant="outlined" required fullWidth id="phone1" label="회사연락처" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="position" name="position" variant="outlined" required fullWidth id="position" label="해당부서" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={handleOnChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={handleOnChange} />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
            </Grid> */}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up(회원가입)
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                (이미 계정이 있습니까? 로그인)
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
