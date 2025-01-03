

const ValidatorEmail = async (
    formData,
    error,
    setError,
    errortype,
    setErrortype,
  ) => {
    let isValid = true;
  
    for (const field in formData) {
      if (formData[field] === "") {
        setError((prevError) => ({
          ...prevError,
          [field]: true,
        }));
        setErrortype((prevErrortype) => ({
          ...prevErrortype,
          [field]: "*champ de texte requis",
        }));
        isValid = false;
  
      } else if (field === "DateTime") {
        const data = formData[field]
        
        const [datePart, timePart] = data.split(' ');
        const [hour, minute] = timePart.split(':');
        console.log(hour)
        if (hour > 18 || hour < 8) {
          console.log("false hour")
          setError((prevError) => ({
            ...prevError,
            [field]: true,
          }));
          setErrortype((prevErrortype) => ({
            ...prevErrortype,
            [field]: "Veuillez selectionnez une heure valable comprise entre 8H et 18H",
          }));
          isValid = false;
        } 
      }  else {
        setError((prevError) => ({
          ...prevError,
          [field]: false,
        }));
        setErrortype((prevErrortype) => ({
          ...prevErrortype,
          [field]: "",
        }));
      }
    }
  
    return Promise.resolve(isValid);
  };
  
  export default ValidatorEmail;
  