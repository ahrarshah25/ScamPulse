import React from "react";
import { Link } from "react-router-dom";

const Href = ({ text, linkText, href, subdomain }) => {
  const hostname = window.location.hostname;
  if (subdomain === "auth") {
    let url = "";

    if (hostname.includes("localhost")) {
      url = `http://auth.localhost:5173${href}`;
    } else {
      const rootDomain = hostname.split(".").slice(-2).join(".");
      url = `https://auth.${rootDomain}${href}`;
    }
  return (
    <p className="text-sm text-gray-400 text-center">
      {text}{" "}
      <Link to={url} className="text-teal-400 hover:underline font-medium" >
      {linkText}
      </Link>
    </p>
  );
};
}
export default Href;
