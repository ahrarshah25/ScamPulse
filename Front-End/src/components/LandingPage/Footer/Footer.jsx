import React from "react";
import FooterBrand from "./FooterBrand";
import FooterHeading from "./FooterHeading";
import FooterLinks from "./FooterLinks";
import FooterDivider from "./FooterDivider";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          <FooterBrand />

          <div>
            <FooterHeading title="Product" />
            <FooterLinks
              links={[
                { name: "Integrations", icon: "plug" },
                { name: "Pricing", icon: "tag" },
                { name: "Changelog", icon: "git" },
                { name: "Documentation", icon: "docs" },
              ]}
            />
          </div>

          <div>
            <FooterHeading title="Company" />
            <FooterLinks
              links={[
                { name: "About Us", icon: "users" },
                { name: "Careers", icon: "briefcase" },
                { name: "Privacy Policy", icon: "lock" },
                { name: "Terms of Service", icon: "file" },
              ]}
            />
          </div>

        </div>

        <FooterDivider />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
