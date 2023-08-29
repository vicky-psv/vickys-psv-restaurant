import React from "react";
import { Stack, Typography } from "@mui/material";

function Logo(props) {
  if (props.small) {
    return (
      <Stack direction={"row"}>
        <Typography
          variant="subtitle1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            alignContent: "center",
            alignItems: "center",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "underline",
          }}
        >
          Vickys
        </Typography>
        <Stack direction={"column"}>
          <Typography
            variant="subtitle1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Polizei - SV
          </Typography>
          <Typography
            variant="subtitle1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Gaststätte
          </Typography>
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack direction={"row"}>
      <Typography
        variant="subtitle1"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          flexGrow: 1,
          alignContent: "center",
          alignItems: "center",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "underline",
        }}
      >
        Vickys
      </Typography>
      <Stack direction={"column"}>
        <Typography
          variant="subtitle1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Polizei - SV
        </Typography>
        <Typography
          variant="subtitle1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Gaststätte
        </Typography>
      </Stack>
    </Stack>);
  }
}

export default Logo;
