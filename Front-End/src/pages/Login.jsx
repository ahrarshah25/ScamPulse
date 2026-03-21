import React, { useEffect, useState } from "react";
import Form from "../components/Auth/Form";
import Swal from "sweetalert2";
import emailHandler from "../helpers/emailHandler";
import passwordHandler from "../helpers/passwordHandler";
import { userLogin } from "../api/auth/login.api";
import useLoading from "../hooks/useLoading";
import { sendLoginAlert } from "../api/sendMail/loginAlert.api";
import googleAuth from "../services/googleAuth";
import githubAuth from "../services/githubAuth";
import handleRedirect from "../handlers/handleRedirect";
import authRedictHandler from "../handlers/authRedictHandler";
import { sendLoginNotification } from "../api/notifications/loginNotification.api";

const Login = () => {
  const googleLogin = googleAuth();
  const githubLogin = githubAuth();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  authRedictHandler();

  const [loading, setLoading] = useLoading(false);

  const loginUser = async (e) => {
    e.preventDefault();

    const { userEmail, userPassword } = formData;

    if (!userEmail || !userPassword) {
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
      setFormData({ userEmail: "", userPassword: "" });
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
      setFormData({ userEmail: "", userPassword: "" });
      return;
    }

    if (!passwordHandler(userPassword)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Password That Contain 8 Characters.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({ userEmail: "", userPassword: "" });
      return;
    }

    try {
      setLoading(true);

      const { userEmail, userPassword } = formData;

      const res = await userLogin(userEmail, userPassword);
      await sendLoginAlert(userEmail);

      if (res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        }).then(() => handleRedirect(res.data?.user));
        setFormData({ userEmail: "", userPassword: "" });
        await sendLoginNotification(userEmail, res.data?.user.name);
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });
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
      setFormData({ userEmail: "", userPassword: "" });
    }
  };

  return (
    <div>
      <Form
        title="Welcome Back"
        subtitle="Login to your ScamPulse account"
        buttonText="Login"
        showForgot={true}
        bottomText="Don’t have an account?"
        bottomLinkText="Sign up"
        bottomHref="/signup"
        func={loginUser}
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
          {
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.userPassword,
            func: (e) => {
              setFormData({ ...formData, userPassword: e.target.value });
            },
          },
        ]}
        googleClick={googleLogin}
        githubClick={githubLogin}
        showSocialLogin={true}
      />
    </div>
  );
};

export default Login;
