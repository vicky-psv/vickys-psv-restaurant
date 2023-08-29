import { Typography, Paper, Box, Tabs, Tab } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Gallery from "./Gallery";
import Welcome from "./Welcome";
import Contact from "./Contact";
import Restaurant from "./Restaurant";
import Cards from "./Cards";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{display: "flex", alignContent: "center", p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Panels(props) {

  return (
    <Paper sx={{ maxHeight: "100%", overflow: "auto" }}>
      <TabPanel value={props.value} index={0}>
        <Welcome />
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <Restaurant/>
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <Cards/>
      </TabPanel>
      <TabPanel value={props.value} index={3}>
        <Gallery />
      </TabPanel>
      <TabPanel value={props.value} index={4}>
        <Contact />
      </TabPanel>
    </Paper>
  );
}

export default Panels;
