import React from 'react';

const Button = ({ onClick, children, variant = 'primary', size = 'md', disabled = false, className, ...rest }) => {
  let buttonClasses = "py-2 px-4 rounded font-bold transition-colors duration-200";

  if (variant === 'primary') {
    buttonClasses += " bg-blue-500 hover:bg-blue-700 text-white";
  } else if (variant === 'secondary') {
    buttonClasses += " bg-gray-300 hover:bg-gray-400 text-gray-800";
  } else if (variant === 'danger') {
    buttonClasses += " bg-red-500 hover:bg-red-700 text-white";
  }

  if (size === 'sm') {
    buttonClasses += " text-sm";
  } else if (size === 'lg') {
    buttonClasses += " text-lg";
  }

  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed";
  }

  // Ensure custom className is appended with a leading space if it exists
  if (className) {
    buttonClasses += ` ${className}`;
  }

  // Trim any leading/trailing spaces that might result from concatenation
  buttonClasses = buttonClasses.trim();

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 