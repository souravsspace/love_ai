import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { MotionConfig, motion, useCycle } from "framer-motion";
import { ThemeContext } from "../../App";
import { FiCornerUpLeft } from "react-icons/fi";
import BeforeFooter from "../../Components/Multiple/BeforeFooter";

export default function Tour() {
  const [tourVideo, toggleTourVideo] = useCycle(false, true);
  const { BtnEffect } = useContext(ThemeContext);

  const tourVideoVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <main className="h-full w-full grid place-items-start mt-[2rem] mb-[10rem]">
      <div className="mx-2 md:mx-10 text-center items-center grid gap-y-20">
        <section>
          <Typography
            className="text-4xl md:text-5xl lg:text-7xl "
            variant="h1"
          >
            Lobhe <span className="text-primary">Tour</span>
          </Typography>
          <Typography>
            Build your first machine learning model in ten minutes. No code or
            experience required.
          </Typography>
        </section>
        <section className="mx-5 md:mx-10 lg:mx-48">
          <MotionConfig
            transition={{
              type: "tween",
            }}
          >
            <motion.div
              variants={BtnEffect}
              whileTap="tap"
              whileHover="hover"
              className=" hover:shadow-2xl rounded-2xl cursor-pointer transition-all ease-out duration-200"
            >
              <motion.div
                onClick={() => toggleTourVideo()}
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                animate={tourVideo ? "open" : "closed"}
                className="rounded-2xl bg-transparent"
              >
                <img
                  className="rounded-2xl"
                  src="https://www.lobe.ai/assets/tour/Video.jpg"
                />
              </motion.div>
            </motion.div>
            <motion.div
              variants={{
                closed: {
                  opacity: 0,
                  y: "-100%",
                },
              }}
              animate={tourVideo ? "open" : "closed"}
              className="grid place-items-center fixed inset-0 backdrop-blur-md bg-black/50"
            >
              <span
                className="text-3xl text-white cursor-pointer absolute top-5 left-5"
                onClick={() => toggleTourVideo()}
              >
                <FiCornerUpLeft />
              </span>

              <iframe
                className="rounded-2xl w-96 h-64 sm:w-[28] sm:h-[20rem] lg:w-2/3 lg:h-2/3"
                width="1000"
                height="630"
                src="https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?si=AYRoVbHxvLY3YiD1&amp;start=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoplay="1"
              ></iframe>
            </motion.div>
          </MotionConfig>
        </section>
        <BeforeFooter/>
      </div>
    </main>
  );
}
