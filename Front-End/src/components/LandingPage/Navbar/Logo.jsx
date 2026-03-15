import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Logo = ({ color = '#374151' }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 text-teal-600 cursor-pointer hover:opacity-80 transition-opacity"
      aria-label="Scam Pulse Home"
    >
      <Shield color="#14b8a6" strokeWidth={2.5} size={30} />
      <h1 className="text-xl font-semibold tracking-wide">
        Scam <span style={{ color }}>Pulse.</span>
      </h1>
    </Link>
  );
};

export default Logo;