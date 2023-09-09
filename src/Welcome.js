import { Typography, Stack } from "@mui/material";
import React from "react";

function Welcome() {
  return (
    <Stack
      gap={2}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h2" component="div" color="secondary">
        Willkommen bei Vickys
      </Typography>

      <Typography component="div" variant="subtitle1">
        Willkommen bei Vickys PSV Gaststätte! Entdecken Sie unsere vielfältige
        Speisekarte und genießen Sie köstliche Gerichte in gemütlicher
        Atmosphäre. Ob klassisch oder modern, hier ist für jeden etwas dabei.
        Wir freuen uns darauf, Ihnen unvergessliche Genussmomente zu bereiten.
      </Typography>

      <Typography component="div" variant="subtitle2">
        Öffnungszeiten:
      </Typography>

      <Typography component="div" variant="subtitle1">
        Dienstag bis Sonntag: <strong>11:30 Uhr bis 22:00 Uhr</strong>
      </Typography>
      <Typography component="div" variant="subtitle1">
        Montag: Geschlossen
      </Typography>

      <Typography component="div" variant="subtitle1">
        Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!
      </Typography>
    </Stack>
  );
}

export default Welcome;
