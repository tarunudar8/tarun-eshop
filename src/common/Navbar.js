import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" sx={{ mr: 2 }} color="inherit">
            <ShoppingCart />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            upGrad E-Shop
          </Typography>
          <SearchBar />
          <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/logout"><input type="button" />LOGOUT</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;