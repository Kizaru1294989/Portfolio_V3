import React from "react";
import { motion } from "framer-motion";
import WavyText from "../../About/Text/Awesome";
import ParticleAnimation from "../../Geometry/Particules/WaveTube";


const Preview = () => {
  const [replay, setReplay] = React.useState(true);
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Départ : invisible et en bas
    visible: { opacity: 1, y: 0 }, // Arrivée : visible et position normale
  };

  return (
    <>

    <div>
 
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "", 
        margin: 0,
      }}
    > 
      <ParticleAnimation/>
      <motion.h1
        initial="hidden"
        animate="visible"
        // variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          fontSize: "3rem",
          color: "white", 
        }}
      >
        
         <WavyText text="Welcome" replay={replay} />
         
      </motion.h1>
    </div>
    </div>
    </>
  );
};

export default Preview;
