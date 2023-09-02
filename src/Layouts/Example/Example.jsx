import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";
import BeforeFooter from "../../Components/Multiple/BeforeFooter";
import React from "react";

export default function Example() {
  const { BtnEffect } = useContext(ThemeContext);
  const cardDetails = [
    {
      title: "Plant Species",
      subtitle:
        "Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
      src: "https://www.lobe.ai/assets/examples/Plants.mp4",
    },
    {
      title: "Hand Gestures",
      subtitle:
        "Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
      src: "https://www.lobe.ai/assets/examples/Hand%20Count.mp4",
    },
    {
      title: "Personal Trainer",
      subtitle:
        "Train your app to recognize different workout positions to create an automated personal trainer that counts your reps",
      src: "https://www.lobe.ai/assets/examples/Feel%20the%20Burn.mp4",
    },
    {
      title: "Emotional Reactions",
      subtitle:
        "Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
      src: "https://www.lobe.ai/assets/examples/Laughing.mp4",
    },
    {
      title: "Interactive Painting",
      subtitle:
        "Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
      src: "https://www.lobe.ai/assets/examples/Painting%20with%20Mike.mp4",
    },
    {
      title: "Safety Precautions",
      subtitle:
        "Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
      src: "https://www.lobe.ai/assets/examples/Mask%20Up.mp4",
    },
    {
      title: "Whale Watching",
      subtitle:
        "Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.",
      src: "https://www.lobe.ai/assets/examples/Whales.mp4",
    },
    {
      title: "Beehive Health",
      subtitle:
        "Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.",
      src: "https://www.lobe.ai/assets/examples/Bees.mp4",
    },
    {
      title: "Baby Monitor",
      subtitle:
        "Train your app to detect when babies are sleeping or awake to notify parents before they start crying.",
      src: "https://www.lobe.ai/assets/examples/Sleeping.mp4",
    },
    {
      title: "Smart Checkout",
      subtitle:
        "Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.",
      src: "https://www.lobe.ai/assets/examples/Checkout.mp4",
    },
    {
      title: "Fire Watch",
      subtitle:
        "Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late",
      src: "https://www.lobe.ai/assets/examples/Wildfire.mp4",
    },
    {
      title: "Scientific Research",
      subtitle:
        "Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.",
      src: "https://www.lobe.ai/assets/examples/Microscope.mp4",
    },
    {
      title: "Wildlife Behavior",
      subtitle:
        "Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.",
      src: "https://www.lobe.ai/assets/examples/African%20Wildlife.mp4",
    },
    {
      title: "Equipment Analytics",
      subtitle:
        "Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.",
      src: "https://www.lobe.ai/assets/examples/Compression.mp4",
    },
    {
      title: "Telescopic Imagery",
      subtitle:
        "Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.",
      src: "https://www.lobe.ai/assets/examples/Telescope.mp4",
    },
    {
      title: "Aerial Imagery",
      subtitle:
        "Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.",
      src: "https://www.lobe.ai/assets/examples/Deforestation.mp4",
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
            Lobhe <span className="text-primary">Examples</span>
          </Typography>
          <Typography>
            One tool, endless possibilities. Discover all the machine learning
            models you can train with Lobe.
          </Typography>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-[4rem] gap-x-8 my-[4rem]">
          {cardDetails.map((card, index) => (
            <motion.div variants={BtnEffect} whileHover="hover" whileTap="tap">
              <Card
                key={index}
                className="cursor-not-allowed hover:shadow-2xl transition-all ease-linear duration-200"
              >
                <CardHeader>
                  <video autoPlay loop muted playsInline src={card.src} />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography color="gray">{card.subtitle}</Typography>
                </CardBody>
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
