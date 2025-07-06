import React, { createContext, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: '',
  });

  return (
    <ToastContext.Provider value={{ setToast }}>
      {children}

      <ToastContainer
        position="top-end"
        className="p-3"
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 9999,
          animation: toast.show ? 'slideIn 0.5s ease' : '',
        }}
      >
        <Toast
          show={toast.show}
          onClose={() => setToast({ show: false, message: '' })}
          bg="dark"
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white fw-semibold">
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </ToastContext.Provider>
  );
};
