import React from "react";
import "./index.scss"; // Importation du fichier CSS
import InputPhone from "../Input/InputPhone";
import { GlobeDemo } from "../Planet/demo";

export const ContactComponent = ({
  HandleChange,
  HandleSubmit,
  formstate,
  formValue,
  setFormValue,
  setError,
  setErrortype,
  setformstate,
  errortype,
  error,
}) => {
  return (
    <div className="contact_container">
      <div className="content">
        <div className="contact_card left">
          <h1>Contact</h1>
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "30%",
            transform: "translateY(-50%)",
            width: "60%", // Ajuste la taille selon tes besoins
            height: "100%",
            zIndex: -10, // Pour s'assurer que le Globe est en fond
          }}
        >
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
