import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

export const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE;
export const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE;
export const email_JS_KEY = import.meta.env.VITE_EMAIL_JS;

emailjs.init(email_JS_KEY);

export const Email = async (FormData, UserData) => {
  const userEmail =
    UserData.user.emailAddresses && UserData.user.emailAddresses.length > 0
      ? UserData.user.emailAddresses[0].emailAddress
      : null;
  console.log(userEmail);

  try {
    const response = await emailjs.send(serviceId, templateId, {
      username: UserData.user.fullName,
      time: FormData.DateTime,
      address: FormData.StartAdresse,
      telephone: FormData.Phone,
      tarif: FormData.Price,
      service: FormData.Service,
      car: FormData.CarType,
      email_send_to: userEmail,
    });

    if (response && response.status === 200) {
      console.log("email envoyé");
      return true;
    } else {
      console.error("Error sending email. Response:", response);
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
