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
          flexWrap: "wrap" 
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

      <Typography component="div" variant=" subtitle1">
        offeriert eine große Bandbreite an vegetarischen, bürgerlichen,
        mediterranen, aber auch internationalen Gerichten, die immer frisch
        zubereitet werden. Zu den vielfältigen Salattellern wird
        selbstgebackenes Brot gereicht und das Fleisch stammt vom örtlichen
        Metzger.
      </Typography>

      <Typography component="div" variant=" subtitle1">
        Werktags von Montag bis Freitag zwischen 11:30 - 15:00 Uhr bieten wir
        einen Mittagstisch an. Zur Auswahl steht ein veganes, ein vegetarisches
        sowie ein Fleisch- oder ein Fischgericht.
      </Typography>

      <Typography component="div" variant=" subtitle1">
        Weiter haben wir auch einige Alternativen zu diesen Mittagsgerichten.
        Wenn Sie zu einem Essen einen erlesenen Wein genießen möchent haben wir
        hierfür eine große Auswahl. Von 15:00 bis 17:30 Uhr bieten wir unter der
        Woche eine kleine Vesperkarte an.
      </Typography>

      <Typography component="div" variant=" subtitle1">
        Bitte beachten Sie in Ihrem eigenen Interesse, dass unser Lokal
        insbesondere an Wochenenden abends bzw. an Sonn- und Feiertagen
        ganztags, häufig stark ausgelastet ist.
      </Typography>

      <Typography component="div" variant=" subtitle1">
        Wir empfehlen deshalb ab fünf Personen rechtzeitig zu reservieren, da
        wir ansonsten nicht garantieren können, über hinreichend freie Plätze
        für Sie zu verfügen.
      </Typography>
    </Stack>
  );
}

export default Restaurant;
