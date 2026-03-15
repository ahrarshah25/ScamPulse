import React from "react";
import Logo from "../Navbar/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <Logo />

      <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
        ScamPulse is an AI-powered fraud prevention platform built
        to protect modern businesses from digital scams and threats.
      </p>

      <div className="flex items-center gap-5">
        <a className="hover:text-teal-400 transition" href="#">
          <Github size={20} />
        </a>
        <a className="hover:text-teal-400 transition" href="#">
          <Twitter size={20} />
        </a>
        <a className="hover:text-teal-400 transition" href="#">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
