import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Button } from "@material-tailwind/react";

export default function DownloadBtn() {
  const { BtnEffect } = useContext(ThemeContext);
  return (
    <motion.div variants={BtnEffect} whileTap="tap">
      <Button
        variant="gradient"
        size="lg"
        className="bg-primary rounded-full hover:scale-105 transition-all ease-linear duration-200"
      >
        Download
      </Button>
    </motion.div>
  );
}
