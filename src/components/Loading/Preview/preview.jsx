import React, { useEffect } from "react";
import { motion } from "framer-motion";
import WavyText from "../../About/Text/Awesome";
import ParticleAnimation from "../../Geometry/Particules/WaveTube";

const Preview = () => {
  const [replay, setReplay] = React.useState(true);

  useEffect(() => {
    // Désactiver le scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Réactiver le scroll
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
          backgroundColor: "",
          overflow: "hidden", 
        }}
      >
        <ParticleAnimation />
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            fontSize: "3rem",
            color: "white",
          }}
        >
          <WavyText text="Welcome" replay={replay} />
        </motion.h1>
      </div>
    </>
  );
};

export default Preview;
