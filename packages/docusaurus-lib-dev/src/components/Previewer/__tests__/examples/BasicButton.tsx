import React from 'react';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  onClick,
  type = 'primary',
  disabled = false,
}) => {
  const baseStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    opacity: disabled ? 0.6 : 1,
  };

  const typeStyles = {
    primary: {
      backgroundColor: '#1890ff',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
  };

  return (
    <button
      style={{ ...baseStyles, ...typeStyles[type] }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BasicButton;
