import { React, useEffect, useState } from "react";
import { HandleChange } from "../../tools/Handlechange";
import ValidatorEmail from "../Validator/ValidatorEmail";

export const ContactContainer = () =>{
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errortype, setErrortype] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formstate, setformstate] = useState({
    sendemail:false,
  });

  const [step , setstep] = useState(0)
  const HandleSubmit = async (event) => {
    event.preventDefault();
    switch(step) {
      case 0 :
        try {
          // if (confirmation) {
          //   setPage((page) => page + 1);
          // } else {
          //   setPage((page) => page);
          // }
        }
        catch (error) {
           console.error(error);
        }
        break;
        default:
          
    }
  }
  return (

    <ContactComponent/>
  )

}