import React, { useState, useEffect } from "react";
import Form from "../components/Auth/Form";
import useLoading from "../hooks/useLoading";
import { useSearchParams } from "react-router-dom";
import { navigate } from "../hooks/useNavigate";
import { forgotPassword } from "../api/auth/resetPassword.api";
import passwordHandler from "../helpers/passwordHandler";
import Swal from "sweetalert2";
import authRedictHandler from "../handlers/authRedictHandler";
import { sendResetPasswordNotification } from "../api/notifications/resetPasswordNotification.api";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    userPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.title = "Reset Password - ScamPulse";
  }, []);

  authRedictHandler();
  const [params] = useSearchParams();

    const token = params.get("token");
    const email = params.get("email");

    if(!token || !email) {
        Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "You are not authorized for reset password",
        showConfirmButton: false,
        timer: 6000,
        customClass: {
          popup: "swal-margin-top",
        },
      }).then(() => navigate("/forgot-password", { subdomain: "auth" }));
    }
  const [loading, setLoading] = useLoading(false);

  const resetPassword = async () => {
    const { userPassword, confirmPassword } = formData;

    if ((!userPassword, !confirmPassword)) {
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
      setFormData({ userPassword: "", confirmPassword: "" });
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
      setFormData({
        userPassword: "",
        confirmPassword: "",
      });
      return;
    }

    if (userPassword !== confirmPassword) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Same Password In Confirm Password Section.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userPassword: "",
        confirmPassword: "",
      });
      return;
    }
    try {
      setLoading(true);

      const newPassword = userPassword;

      const res = await forgotPassword(token, email, newPassword);
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
        }).then(() => navigate("/login", { subdomain: "auth" }))
        setFormData({
          userPassword: "",
          confirmPassword: "",
        })
        await sendResetPasswordNotification(email);
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
        setFormData({
          userPassword: "",
          confirmPassword: "",
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
      setFormData({
        userPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div>
      <Form
        title="Reset Your Account Password"
        subtitle="Enter your new password for ScamPulse account"
        buttonText="Reset Password"
        showForgot={false}
        bottomText="Remember your password?"
        bottomLinkText="Login"
        bottomHref="/login"
        showSocialLogin={false}
        func={resetPassword}
        inputs={[
          {
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.userPassword,
            func: (e) => {
              setFormData({ ...formData, userPassword: e.target.value });
            },
          },
          {
            label: "Confirm Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.confirmPassword,
            func: (e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            },
          },
        ]}
      />
    </div>
  );
};

export default ResetPassword;
