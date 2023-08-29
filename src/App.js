import React from "react";
import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import Panels from "./Panels";
import Header from "./Header";
import theme from "./theme";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Header onMenuItemClcked={handleChange} />
      </Grid>
      <Grid item md={3} xs={0}></Grid>
      <Grid  item md={6} xs={12}>
        <Box sx={{ m: matches ? 0 : 6 }}>
          <Paper>
            <Panels value={value} />
          </Paper>
        </Box>
      </Grid>
      <Grid item md={3} xs={0}></Grid>
    </Grid>
  );
}

export default App;
