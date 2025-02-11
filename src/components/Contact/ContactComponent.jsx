import React from "react";
import "./index.scss"; // Importation du fichier CSS
import InputPhone from "../Input/InputPhone";
import  { GlobeDemo } from "../Planet/demo"


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
})  => {
  return (
    <div className="contact_container">
      <div className="content">
        <div className="contact_card left">
          <h1>Contact</h1>
        </div>

        <div className="contact_card right">
          <GlobeDemo/>


        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
