import React from "react";
import {
  Plug,
  Tag,
  GitCommit,
  BookOpen,
  Users,
  Briefcase,
  Lock,
  FileText,
} from "lucide-react";

const icons = {
  plug: Plug,
  tag: Tag,
  git: GitCommit,
  docs: BookOpen,
  users: Users,
  briefcase: Briefcase,
  lock: Lock,
  file: FileText,
};

const FooterLinks = ({ links }) => {
  return (
    <ul className="space-y-5">
      {links.map((item, i) => {
        const Icon = icons[item.icon];
        return (
          <li key={i}>
            <a
              href="#"
              className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
            >
              <Icon size={16} className="text-teal-500" />
              <span className="relative">
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
