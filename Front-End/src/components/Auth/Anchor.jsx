import { Link } from "react-router-dom";

const Anchor = ({ text, href }) => {
  return (
    <Link to={href} className="text-sm text-teal-400 hover:text-teal-300 transition">
      {text}
    </Link>
  );
};

export default Anchor;
