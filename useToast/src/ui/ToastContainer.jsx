import "./toast.css"
export default function ToastContainer({ toasts }) {
    return (
      <div className='toast-container' role="alert" aria-live="assertive">
        {toasts.map(({ id, message, type }) => (
          <div key={id} className={`toast toast-${type}`} role="alert">
            {message}
          </div>
        ))}
      </div>
    );
  }