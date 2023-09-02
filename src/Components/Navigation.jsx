import { Typography } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import theLogo from "../assets/logo.ico";
import { AnimatePresence, MotionConfig, motion, useCycle } from "framer-motion";
import { ThemeContext } from "../App";
import {
  FaAccessibleIcon,
  FaCreativeCommonsNc,
  FaVaadin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DownloadBtn from "./Multiple/DownloadBtn";


export default function Navigation() {
  const [mobileNavOpen, toggleMobileNav] = useCycle(false, true);
  const { BtnEffect, NavEffect, chiildNavEffect } = useContext(ThemeContext);

  const [navFocus, setNavFocus] = useState(0);
  const changeNavFocus = (index) => {
    if (index !== navFocus) {
      setNavFocus(index);
    }
  };

  const navItems = [
    { name: "Overview", to: "/" },
    { name: "Example", to: "/example" },
    { name: "Tour", to: "/tour" },
    { name: "Blog", to: "/blog" },
    { name: "Help", to: "/help" },
  ];

  return (
    <nav className="px-5 py-3 md:px-16 md:py-6 backdrop-blur-md bg-white/70">
      <div className="sticky flex-row-reverse md:flex-row flex items-center justify-between text-blackn h-max w-full">
        <section className="flex items-center gap-x-4 cursor-pointer">
          <Typography as="a" className="text-2xl font-bold">
            Lobhe
          </Typography>
          <Typography as="a" className="text-xl font-bold">
            <img className="h-5" src={theLogo} alt="lobhe" />
          </Typography>
        </section>
        <section className="space-y-6">
          {/* mobile navBar */}
          <AnimatePresence>
            {mobileNavOpen && (
              <MotionConfig
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <motion.div
                  variants={NavEffect}
                  animate={mobileNavOpen ? "open" : "closed"}
                  initial="closed"
                  exit="closed"
                  className="
                  fixed backdrop-blur-lg inset-0 h-screen
                  p-7 justify-center flex flex-col gap-y-7 shadow-inner"
                >
                  <ul>
                    {navItems.map((item, index) => (
                      <motion.li
                        variants={chiildNavEffect}
                        key={index}
                        onClick={() => changeNavFocus(index)}
                      >
                        <Typography
                          variant="small"
                          className={` ${
                            navFocus === index ? "text-black" : "text-gray"
                          } p-1 font-lg text-lg cursor-pointer hover:text-black`}
                        >
                          <Link to={item.to}>{item.name}</Link>
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="w-full h-px rounded-full bg-gray block "></div>
                  <div className="flex justify-center gap-x-2">
                    <motion.span
                      variants={chiildNavEffect}
                      className="h-10 w-12 rounded-lg text-gray hover:text-black text-3xl grid place-items-center cursor-pointer shadow-lg "
                    >
                      <FaAccessibleIcon />
                    </motion.span>
                    <motion.span
                      variants={chiildNavEffect}
                      className="h-10 w-12 rounded-lg text-gray hover:text-black text-3xl grid place-items-center cursor-pointer shadow-lg "
                    >
                      <FaCreativeCommonsNc />
                    </motion.span>
                    <motion.span
                      variants={chiildNavEffect}
                      className="h-10 w-12 rounded-lg text-gray hover:text-black text-3xl grid place-items-center cursor-pointer shadow-lg "
                    >
                      <FaVaadin />
                    </motion.span>
                  </div>
                </motion.div>
              </MotionConfig>
            )}
          </AnimatePresence>
          {/* destop nav */}
          <ul className="p-4 hidden lg:flex justify-center items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li
                variants={BtnEffect}
                whileTap="tap"
                whileHover="hover"
                key={index}
                onClick={() => changeNavFocus(index)}
              >
                <Typography
                  variant="small"
                  className={` ${
                    navFocus === index ? "text-black" : "text-gray"
                  } p-1 font-normal text-lg cursor-pointer hover:text-black`}
                >
                  <Link to={item.to}>{item.name}</Link>
                </Typography>
              </motion.li>
            ))}
          </ul>
        </section>
        <section className="hidden lg:block">
          <DownloadBtn />
        </section>
        <section className="lg:hidden block">
          <motion.button
            animate={mobileNavOpen ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1 z-10"
          >
            <motion.span
              variants={{
                open: {
                  rotate: 45,
                  y: 6,
                },
                closed: { rotate: 0 },
              }}
              className="w-6 h-[2px] bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              className="w-6 h-[2px] bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                open: {
                  rotate: -45,
                  y: -6,
                },
                closed: { rotate: 0 },
              }}
              className="w-6 h-[2px] bg-black block"
            ></motion.span>
          </motion.button>
        </section>
      </div>
    </nav>
  );
}
