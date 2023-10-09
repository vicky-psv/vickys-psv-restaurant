import {
  Typography,
  Stack,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";

function Cards() {
  return (
    <Stack
      gap={2}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h3" component="div" color="secondary">
        Speisen und Getränke bei Vickys
      </Typography>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Das aktuelle Speiseangebot:
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="./speisekarte.pdf"
            target="_blank"
          >
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Speisekarte" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="./MittagsMenues.pdf"
            target="_blank"
          >
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Mittagskarte" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}

export default Cards;
