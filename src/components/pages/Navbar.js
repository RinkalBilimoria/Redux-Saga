import { Link } from "react-router-dom";
import MiniCart from "../pages/MiniCart/MiniCart";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Navbar() {
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "gray",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/blog"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Blog
            </Typography>

            <Typography
              variant="h6"
              component="a"
              href="/about"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              About
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            <MiniCart />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
