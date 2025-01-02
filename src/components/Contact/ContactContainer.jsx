import ContactComponent from "./ContactComponent";


export const ContactContainer = () =>{
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  return (

    <ContactComponent/>
  )

}