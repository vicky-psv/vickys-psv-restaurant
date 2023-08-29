import { Box, Typography, Stack } from "@mui/material";
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
        Willkommen bei Vicky PSV Gastsätte! Wir freuen uns, dass Sie sich für
        unser Restaurant interessieren. Bei uns erwartet Sie eine einzigartige
        kulinarische Erfahrung, die von unserem talentierten Küchenteam und
        unserem herzlichen Servicepersonal ermöglicht wird. Egal, ob Sie auf der
        Suche nach traditionellen Gerichten oder neuen Geschmackserlebnissen
        sind, bei uns werden Sie sicherlich fündig. Tauchen Sie ein in eine
        gemütliche Atmosphäre und genießen Sie köstliche Speisen, die mit
        frischen Zutaten zubereitet werden. Wir sind stolz darauf, unseren
        Gästen ein unvergessliches kulinarisches Erlebnis zu bieten. Kommen Sie
        vorbei und lassen Sie sich von uns verwöhnen!
      </Typography>

      <Typography component="div" variant="subtitle2">
        Öffnungszeiten
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
