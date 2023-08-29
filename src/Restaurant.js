import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import essen1 from "./resources/img/essen1.png";
import essen2 from "./resources/img/essen2.png";

const itemData = [
  {
    img: essen1,
    title: "Breakfast",
  },
  {
    img: essen2,
    title: "Burger",
  },
];

function Restaurant() {
  return (
    <Stack
      gap={2}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h2" component="div" color="secondary">
        Unsere Küche
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="food1"
          src={`${itemData[0].img}?w=164&h=164&fit=crop&auto=format`}
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="food 2"
          src={`${itemData[1].img}?w=164&h=164&fit=crop&auto=format`}
        />
      </Box>

      <Typography component="div" variant="subtitle1">
        Genießen Sie traditionell badische Gerichte, zubereitet mit den besten
        Zutaten der Region. Sowohl vegetarische Gerichte, als auch Fleisch- und
        Fischgerichte. Gleichzeitig bereichern wir unsere Küche mit mediterranen
        Aromen, Gewürzen und frischem Gemüse.
      </Typography>

      <Typography component="div" variant="subtitle1">
        Werktags von Dienstag bis Freitag zwischen 11:30 - 15:00 Uhr bieten wir
        einen sich wechselnden Mittagstisch an, sowie vielseitige Alternativen.
      </Typography>

      <Typography component="div" variant="subtitle1">
        Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!
      </Typography>
    </Stack>
  );
}

export default Restaurant;
