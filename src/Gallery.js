import * as React from "react";
import pic1 from "./resources/img/pic1.png";
import pic2 from "./resources/img/pic2.png";
import pic3 from "./resources/img/pic3.png";
import pic4 from "./resources/img/pic4.png";
import pic5 from "./resources/img/pic5.jpg";
import pic6 from "./resources/img/pic6.jpg";
import pic7 from "./resources/img/pic7.jpg";
import pic8 from "./resources/img/pic8.jpg";
import pic9 from "./resources/img/pic9.jpg";
import pic10 from "./resources/img/pic10.jpg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack, Typography } from "@mui/material";

const itemData = [
  {
    img: pic5,
    title: "",
    rows: 3,
    cols: 1,
  },
  {
    img: pic6,
    title: "",
    cols: 3,
  },
  {
    img: pic7,
    title: "",
  },
  {
    img: pic8,
    title: "",
  },
  {
    img: pic9,
    title: "",
    rows: 3,
    cols: 1,
  },
  {
    img: pic10,
    title: "",
  },
  {
    img: pic1,
    title: "",
  },
  {
    img: pic2,
    title: "",
  },
  {
    img: pic3,
    title: "",
  },
  {
    img: pic4,
    title: "",
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Gallery() {
  return (
    <Stack
      gap={2}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h2" component="div" color="secondary">
        Gallery
      </Typography>
      <ImageList variant="quilted" cols={4} rowHeight={121}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
