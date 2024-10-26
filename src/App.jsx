import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add.jsx";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
