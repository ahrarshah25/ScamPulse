import React from "react";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";
import Divider from "./Divider";
import SocialIcon from "./SocialIcon";
import Anchor from "./Anchor";
import Href from "./Href";
import LeftLogo from "./LeftLogo";

const Form = ({
  title,
  subtitle,
  inputs,
  buttonText,
  showForgot,
  bottomText,
  bottomLinkText,
  bottomHref,
  func,
  googleClick,
  githubClick,
  showSocialLogin,
}) => {
  return (
    <div className="py-8 min-h-screen flex items-center justify-center bg-black">
      <div className="px-8 w-full max-w-md bg-gray-950 p-8 rounded-2xl border border-gray-800">
        <LeftLogo />

        <Heading title={title} subtitle={subtitle} />

        <div className="space-y-4 mt-6">
          {inputs.map((item, i) => (
            <Input key={i} {...item} value={item.value} func={item.func} />
          ))}

          {showForgot && (
            <div className="flex justify-end">
              <Anchor
                text="Forgot password?"
                href="/forgot-password"
                subdomain="auth"
              />
            </div>
          )}

          <Button func={func} text={buttonText} />
        </div>

        {showSocialLogin && (
          <>
            <Divider />

            <div className="space-y-3">
              <SocialIcon type="google" onClick={googleClick} />
              <SocialIcon type="github" onClick={githubClick} />
            </div>
          </>
        )}

        <div className="mt-6">
          <Href
            text={bottomText}
            linkText={bottomLinkText}
            href={bottomHref}
            subdomain="auth"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
