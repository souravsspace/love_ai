import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";
import BeforeFooter from "../../Components/Multiple/BeforeFooter";

export default function Blog() {
  const { BtnEffect } = useContext(ThemeContext);
  const cardDetails = [
    {
      title: "Use your model in Power Platform",
      subtitle:
        "We're excited to announce a new integration with Microsoft Power Platform.",
      footer: "Release . November 15, 2021",
      src: "https://www.lobe.ai/assets/blog/use-your-model-in-power-platform/lobe-and-power-platform.png",
    },
    {
      title: "Introducing new ways to use model",
      subtitle:
        "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
      footer: "Release . March 23, 2021",
      src: "https://www.lobe.ai/assets/blog/introducing-new-ways-to-use-your-model/March%20Release%20Cards%204.jpg",
    },
    {
      title: "Using your model 101",
      subtitle:
        "Learn everything you need to know to export your model and use it in your app.",
      footer: "Product . March 23, 2021",
      src: "https://www.lobe.ai/assets/blog/exporting-your-model-101/March%20Release%20Bison.jpg",
    },
    {
      title: "Machine Learning Kit with Adafruit",
      subtitle:
        "Introducing a brand new machine learning kit from Adafruit and Lobe.",
      footer: "Product . March 31, 2021",
      src: "https://www.lobe.ai/assets/blog/machine-learning-kit-with-adafruit/Adafruit%20Lobe%20Hero.jpg",
    },
    {
      title: "Four New Features in Lobe",
      subtitle:
        "Select your camera source, export your model to new formats, and more in the new Lobe.",
      footer: "Release . December 10, 2020",
      src: "https://www.lobe.ai/assets/blog/four-new-features-in-lobe/Release%202.jpg",
    },
    {
      title: "Endless Camera Sources",
      subtitle:
        "Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
      footer: "Product . December 10, 2020",
      src: "https://www.lobe.ai/assets/blog/endless-camera-sources/4.jpg",
    },
    {
      title: "Machine Learning Made Easy",
      subtitle:
        "Everything you need to train custom machine learning models in a free, easy to use app.",
      footer: "Release . October 26, 2020",
      src: "https://www.lobe.ai/assets/blog/introducing-the-new-lobe/Plants%20Overlay.jpg",
    },
  ];
  return (
    <main className="mt-[2rem] mb-[10rem] lg:mx-44 sm:mx-8 mx-4">
      <div className="grid place-items-center">
        <section className="text-center">
          <Typography
            className="text-4xl md:text-5xl lg:text-7xl "
            variant="h1"
          >
            Lobhe <span className="text-primary">Blog</span>
          </Typography>
          <Typography>
            Read about our newest releases, and get tips on how to create custom
            machine learning models with Lobe.
          </Typography>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-[4rem] gap-x-8 my-[4rem]">
          {cardDetails.map((card, index) => (
            <motion.div variants={BtnEffect} whileHover="hover" whileTap="tap">
              <Card
                key={index}
                className="cursor-pointer hover:shadow-2xl transition-all ease-linear duration-200"
              >
                <CardHeader>
                  <img src={card.src} alt="" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography color="gray">{card.subtitle}</Typography>
                </CardBody>
                <CardFooter>
                  <Typography color="gray">{card.footer}</Typography>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </section>
      </div>
      <div className="text-center">
        <BeforeFooter />
      </div>
    </main>
  );
}
