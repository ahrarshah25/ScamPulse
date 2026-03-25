import { Link } from "react-router-dom";

const Anchor = ({ text, href, subdomain }) => {
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
    <Link to={url} className="text-sm text-teal-400 hover:text-teal-300 transition">
      {text}
    </Link>
  );
};
}
export default Anchor;