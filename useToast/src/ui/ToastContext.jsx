import React, {
    useContext,
    createContext,
    useState,
    useCallback,
  } from 'react';
  import ToastContainer from './ToastContainer';
  
  const ToastContext = createContext();
  
  export const useToast = () => useContext(ToastContext);
  
  export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
  
    const addToast = useCallback((message, type = 'info', duration = 10000) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type }]);
  
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    }, []);
  
    return (
      <ToastContext.Provider value={{ addToast }}>
        {children}
        <ToastContainer toasts={toasts} />
      </ToastContext.Provider>
    );
  };
  