import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, register } from "../../store/actions/userActions";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmpassword: "",
  });

  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (avatar) {
      setAvatarPreview(URL.createObjectURL(avatar));
    }
  }, [avatar]);

  const setProfile = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, fullname, password, confirmpassword } = user;
    if (password !== confirmpassword) {
      // Passwords don't match, show an error message or handle it as per your UI requirements
      console.error("Passwords do not match");
      return;
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("fullname", fullname);
    formData.append("password", password);
    formData.append("user_profile", avatar);

    dispatch(register(formData));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error]);

  return (
    <div>
      <Grid container component="main" sx={{ justifyContent: "space-evenly" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{ height: "85vh", overflow: "hidden" }}
        >
          <Box sx={{ width: "33.4%", position: "absolute" }}>
            <Box
              sx={{ background: "#00aeae", width: "100%", height: "85vh" }}
            />
          </Box>
          <Box
            sx={{
              background: "#089d9d",
              width: "36vh",
              height: "36vh",
              borderRadius: "50%",
              position: "relative",
              right: "2rem",
              bottom: "2rem",
            }}
          />
          <Box
            sx={{
              background: "#089d9d",
              width: "36vh",
              height: "36vh",
              borderRadius: "50%",
              position: "relative",
              left: "17rem",
              top: "7rem",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8} md={3} elevation={6} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              accept="images/*"
              id="avatarInput"
              style={{ display: "none" }}
              onChange={setProfile}
              name="avatar"
            />
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                style={{
                  width: "10%",
                  height: "10%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Fab
                sx={{ background: "#00aeae" }}
                size="medium"
                color="secondary"
                aria-label="add"
                onClick={() => document.getElementById("avatarInput").click()}
              >
                <AddIcon />
              </Fab>
            )}

            <Typography
              sx={{ fontWeight: 700, marginBottom: "10px" }}
              variant="h5"
            >
              APP NAME
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
              }}
              variant="h5"
            >
              Lorem ipsum dolor, sit amet adipisicing qui rerum natus
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "7px",
              }}
            >
              <TextField
                variant="standard"
                size="small"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={user.username}
                onChange={handleOnchange}
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="standard"
                size="small"
                required
                fullWidth
                id="fullname"
                label="Fullname"
                name="fullname"
                value={user.fullname}
                onChange={handleOnchange}
                autoComplete="fullname"
                autoFocus
              />
              <TextField
                variant="standard"
                size="small"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleOnchange}
                autoComplete="email"
                autoFocus
              />
              <Input
                fullWidth
                id="password"
                name="password"
                value={user.password}
                onChange={handleOnchange}
                type={showPassword ? "text" : "password"}
                defaultValue="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="password"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "#00aeae" }} />
                      ) : (
                        <Visibility sx={{ color: "#00aeae" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <TextField
                variant="standard"
                size="small"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm password"
                type="password"
                id="confirmpassword"
                value={user.confirmpassword}
                onChange={handleOnchange}
                autoComplete="confirmpassword"
              />

              <Button
                sx={{ background: "#00aeae", borderRadius: "10px", mt: 2 }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Register
              </Button>
              <Grid container sx={{ mt: 2, mb: 1 }}>
                <Grid item xs>
                  <Typography>Already have an account?</Typography>
                </Grid>
                <Grid item>
                  <Link sx={{ color: "#000" }} href="#" variant="body2">
                    {"login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
