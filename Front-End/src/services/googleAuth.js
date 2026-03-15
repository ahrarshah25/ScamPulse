import { useGoogleLogin } from "@react-oauth/google";

const googleAuth = () => {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:5173/google-auth",
    // onSuccess: async (tokenResponse) => {
    //   try {
    //     const accessToken = tokenResponse.access_token;

    //   await getGoogleUserInfo(accessToken);

    //   const idToken = tokenResponse.id_token;
    //   await googleAuth(idToken);
    //   } catch (error) {
    //     console.error(error);
    //     Swal.fire({
    //     toast: true,
    //     position: "top-end",
    //     icon: "error",
    //     title: "Error While Logging With Google: " + error.message,
    //     showConfirmButton: false,
    //     timer: 2000,
    //     customClass: {
    //       popup: "swal-margin-top",
    //     },
    //   });
    //   }
    // },
    // onError: () => {
    //   Swal.fire({
    //     toast: true,
    //     position: "top-end",
    //     icon: "error",
    //     title: "Google Login Failed",
    //     showConfirmButton: false,
    //     timer: 2000,
    //     customClass: {
    //       popup: "swal-margin-top",
    //     },
    //   });
    // }
  });

  return googleLogin;
};

export default googleAuth;
