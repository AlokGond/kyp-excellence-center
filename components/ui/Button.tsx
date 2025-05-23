import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center shadow-md hover:shadow-lg';
  const focusRingOffsetColor = 'focus:ring-offset-kyp-magenta'; // For buttons on magenta bg

  const variantStyles = {
    primary: `bg-kyp-yellow hover:bg-kyp-dark-yellow text-kyp-magenta focus:ring-kyp-dark-yellow ${focusRingOffsetColor}`, // Yellow button, magenta text
    secondary: `bg-kyp-pink-accent hover:bg-pink-600 text-kyp-white focus:ring-kyp-pink-accent ${focusRingOffsetColor}`, // Pink accent button
    outline: `border-2 border-kyp-yellow text-kyp-yellow hover:bg-kyp-yellow hover:text-kyp-magenta focus:ring-kyp-yellow ${focusRingOffsetColor}`, // Yellow outline
    ghost: `bg-transparent text-kyp-yellow hover:bg-kyp-yellow/20 focus:ring-kyp-yellow ${focusRingOffsetColor}`,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
