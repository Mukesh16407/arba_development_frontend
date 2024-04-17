import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <nav>
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
        <div className="avtar">
          <NavLink to="/cart">
            <ShoppingCartIcon style={{ fontSize: "3rem", color: "#00AEAE" }} />
          </NavLink>

          <Avatar style={{ background: "#00AEAE" }} onClick={handleClick} />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              My Store
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </>
        </Menu>
      </nav>
    </header>
  );
};
