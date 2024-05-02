import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Zucker News
          </Typography>
          {user.email && user.password && (
            <Button
              onClick={() => handleLogout()}
              color="inherit"
              sx={{
                border: 2,
                borderRadius: 5,
                "&:hover": { backgroundColor: "#1947d2" },
              }}
            >
              Logout
            </Button>
          )}
          {(!user.email || !user.password) && (
            <Button
              color="inherit"
              sx={{
                border: 2,
                borderRadius: 5,
                "&:hover": { backgroundColor: "#1947d2" },
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
