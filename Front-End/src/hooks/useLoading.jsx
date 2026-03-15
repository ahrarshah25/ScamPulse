import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useLoading = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleLoading = () => {
    setValue((prev) => !prev);
  };

  useEffect(() => {
    if (value) {
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Processing...",
        didOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          popup: "swal-margin-top",
        },
      });
    } else {
      Swal.close();
    }
  }, [value]);

  return [value, toggleLoading];
};

export default useLoading;