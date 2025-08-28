'use client';

import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5s
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`toast-notification ${
        type === 'success' ? 'toast-success' : 'toast-error'
      }`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        padding: '16px 20px', // balanced padding for good height
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '300px', // less wide
        minHeight: '60px', // consistent height
        animation: 'slideIn 0.3s ease-out',
        transform: isVisible ? 'translateX(0)' : 'translateX(120%)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: '20px', marginTop: '2px' }}>
        {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
      </div>

      {/* Message */}
      <div
        style={{
          flex: 1,
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.4',
        }}
      >
        {message}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          padding: '2px',
          lineHeight: '1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaTimes />
      </button>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Toast;
