import regex from "../data/EmailRegex";

const emailHandler = (email) => {
  if (!regex.test(email)) {
    
    return false;
  }
  return true;
};

export default emailHandler;