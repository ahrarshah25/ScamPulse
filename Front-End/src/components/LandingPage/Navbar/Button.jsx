import React from 'react';
import { Loader } from 'lucide-react';
import PropTypes from 'prop-types';

const Button = ({ icon: Icon, name, onClick, variant = 'primary', disabled = false, loading = false, className = '' }) => {
  const base = 'flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg',
    outline: 'border border-teal-500 text-teal-600 hover:bg-teal-50',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {loading ? <Loader className="animate-spin" size={18} /> : Icon && <Icon size={18} />}
      {name}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.elementType,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'outline']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;