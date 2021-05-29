import { toast } from "react-toastify";

toast.configure();

export const notify = (type, message) => {
  if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: false,
      autoClose: 2700,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  if (type === "warning") {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  if (type === "info") {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: false,
      autoClose: 2500,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};
