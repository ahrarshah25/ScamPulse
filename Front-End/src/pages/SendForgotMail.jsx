import React, { useState } from "react";
import Form from "../components/Auth/Form";
import emailHandler from "../helpers/emailHandler";
import { sendForgotPasswordMail } from "../api/auth/sendForgotPasswordMail.api";
import useLoading from "../hooks/useLoading";
import Swal from "sweetalert2";

const SendForgotMail = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
  });

  const [loading, setLoading] = useLoading(false)

  const sendPasswordResetMail = async () => {
    const { userEmail } = formData;
    if (!userEmail) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Empty Input.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({ userEmail: "" });
      return;
    }

    if (!emailHandler(userEmail)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title:
          "Pleasde Enter Correct Email WIth Correct Syntax.\nFor Example: scampulse.io@gmail.com",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({ userEmail: "" });
      return;
    }

    try {
        setLoading(true);

      const res = await sendForgotPasswordMail(userEmail);

      if (res.status === 200 || res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `${res.data?.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });
        setFormData({ userEmail: "" });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: `${res.data?.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });
        setFormData({ userEmail: "" });
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Error: " + (error.response?.data?.message || error.message),
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({ userEmail: "" });
    }
  };
  return (
    <div>
      <Form
        title="Send Password Reset Mail"
        subtitle="Enter email to sent password reset mail for ScamPulse account"
        buttonText="Send Mail"
        showForgot={false}
        bottomText="Remember your password?"
        bottomLinkText="Login"
        bottomHref="/login"
        func={sendPasswordResetMail}
        inputs={[
          {
            label: "Email",
            type: "email",
            placeholder: "you@scampulse.io",
            value: formData.userEmail,
            func: (e) => {
              setFormData({ ...formData, userEmail: e.target.value });
            },
          },
        ]}
        showSocialLogin={false}
      />
    </div>
  );
};

export default SendForgotMail;
