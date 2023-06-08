import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
