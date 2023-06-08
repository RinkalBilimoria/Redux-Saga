import { Box } from "@mui/material";
import Navbar from "../components/pages/Navbar";

export default function Header() {
  return (
    <Box
      sx={{
        mb: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
    </Box>
  );
}
