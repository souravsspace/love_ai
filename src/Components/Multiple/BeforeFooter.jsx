import { Typography } from "@material-tailwind/react";
import React from "react";
import DownloadBtn from "./DownloadBtn";

export default function BeforeFooter() {
  return (
    <main>
      <Typography className="text-4xl md:text-5xl lg:text-7xl " variant="h1">
        Train your app <br /> with Lobhe
      </Typography>
      <Typography className="mt-4">
        <DownloadBtn />
      </Typography>
    </main>
  );
}
