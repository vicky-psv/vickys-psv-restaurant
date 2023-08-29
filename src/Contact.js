import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import Impressum from "./Impressum";

export default function Contact() {
  const [value, setValue] = React.useState(false);

  return (
    <Stack sx={{ flex: 1 }}>
      <Typography variant="h2" component="div" color="secondary">
        Kontakt
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Stack
          gap={1}
          sx={{
            p: 2,
          }}
        >
          <Typography component="div" variant="h6">
            Vickys PSV Gaststätte
          </Typography>

          <Typography component="div" variant="subtitle1">
            Lörracher Str. 20,
          </Typography>
          <Typography component="div" variant="subtitle1">
            79115 Freiburg im Breisgau
          </Typography>
        </Stack>

        <Stack
          gap={1}
          sx={{
            p: 2,
          }}
        >
          <Typography component="div" variant="h6">
            Tel. 0761 21480952
          </Typography>

          <Typography component="div" variant="subtitle1">
            info@vickys-psv-gaststaette.de
          </Typography>
          <Typography component="div" variant="subtitle1">
            https://www.vickys-psv-gaststaette.de/
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Typography
        variant="caption"
        component="div"
        color="secondary"
        align="center"
        sx={{ mb: 4, cursor: "pointer" }}
        onClick={() => setValue(!value)}
      >
        Impressum
      </Typography>

      {value && <Impressum />}
    </Stack>
  );
}
