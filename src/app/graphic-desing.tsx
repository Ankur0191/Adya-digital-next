"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

const GraphicDesign = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Creative Assets <br /> That Elevate Brands
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          Eye-catching visuals, compelling designs, and impactful creatives — everything your marketing campaign needs to make your brand unforgettable.
        </p>

        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10 mt-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0 mt-10 md:mt-0"
          >
            <EvervaultCardSnippet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
