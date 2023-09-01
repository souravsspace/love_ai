import { Typography } from "@material-tailwind/react";
import theLogo from "../assets/logo.ico";
import {
  FaAccessibleIcon,
  FaCreativeCommonsNc,
  FaVaadin,
} from "react-icons/fa";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

export default function Footer() {
  const { BtnEffect } = useContext(ThemeContext);
  const footerItems = [
    { head: "About", items: ["Download", "Overview", "Example", "Blog"] },
    {
      head: "General",
      items: ["Notice", "License", "Press Inquiry", "Press Images"],
    },
    { head: "Resources", items: ["help", "Tour", "Contact", "Privacy"] },
  ];

  return (
    <footer>
      <hr className="border-t-1 border-gray/20 my-10 mx-16" />
      <div className="container mx-auto px-2 md:px-32">
        <main className="grid place-content-center text-center gap-5 lg:text-left grid-cols-2 lg:grid-cols-5 lg:mx-16">
          <section className="space-y-2 row-end-4 lg:row-auto col-span-2 lg:col-auto my-24 lg:my-0">
            <div className="flex items-center justify-center lg:justify-start gap-x-4 cursor-pointer">
              <Typography as="a" className="text-xl font-bold">
                Lobhe
              </Typography>
              <Typography as="a" className="text-xl font-bold">
                <img className="h-5" src={theLogo} alt="lobhe" />
              </Typography>
            </div>
            <Typography>A product by Microsoft.</Typography>
            <Typography>All rights reserved.</Typography>
            <Typography>© Microsoft 2021</Typography>
          </section>
          {footerItems.map((item, index) => (
            <section key={index}>
              <Typography className="text-xl font-bold">{item.head}</Typography>
              <ul className="space-y-2 mt-2">
                {item.items.map((item, index) => (
                  <li key={index}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="flex flex-col justify-center items-center gap-2">
            <motion.div variants={BtnEffect} whileTap="tap">
              <motion.span
                varriat={BtnEffect}
                whileTap="tap"
                className="h-10 w-10 rounded-full text-gray hover:text-black text-3xl grid hover:scale-105 transition-all ease-linear duration-200 place-items-center cursor-pointer shadow-lg "
              >
                <FaAccessibleIcon />
              </motion.span>
            </motion.div>

            <motion.div variants={BtnEffect} whileTap="tap">
              <motion.span
                varriat={BtnEffect}
                whileTap="tap"
                className="h-10 w-10 rounded-full text-gray hover:text-black text-3xl grid hover:scale-105 transition-all ease-linear duration-200 place-items-center cursor-pointer shadow-lg "
              >
                <FaCreativeCommonsNc />
              </motion.span>
            </motion.div>
            <motion.div variants={BtnEffect} whileTap="tap">
              <motion.span
                varriat={BtnEffect}
                whileTap="tap"
                className="h-10 w-10 rounded-full text-gray hover:text-black text-3xl grid hover:scale-105 transition-all ease-linear duration-200 place-items-center cursor-pointer shadow-lg "
              >
                <FaVaadin />
              </motion.span>
            </motion.div>
          </section>
        </main>
      </div>
    </footer>
  );
}
