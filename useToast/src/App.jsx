import React from 'react';
import { ToastProvider, useToast } from './ui/ToastContext.jsx';

const ToastButtons = () => {
  const { addToast } = useToast(); // Destructure addToast from the context

  return (
    <div>
      <button onClick={() => addToast('Info Message', 'info')}>Info</button>
      <button onClick={() => addToast('Success Message', 'success')}>
        Success
      </button>
      <button onClick={() => addToast('Error Message', 'error')}>Error</button>
      <button onClick={() => addToast('Warning Message', 'warning')}>
        Warning
      </button>
    </div>
  );
};

export default function App(props) {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  );
}