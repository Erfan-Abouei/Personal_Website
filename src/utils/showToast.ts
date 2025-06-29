import type { ToastStatus } from "@/types/global.types";
import { Bounce, toast, type ToastPosition } from "react-toastify";

const globalOption = {
    position: "bottom-right" as ToastPosition,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
};

const showToast = (
    toastText: string,
    toastStatus: ToastStatus = "info"
) => {
    switch (toastStatus) {
        case "error":
            toast.error(toastText, globalOption);
            break;

        case "success":
            toast.success(toastText, globalOption);
            break;

        case "warning":
            toast.warn(toastText, globalOption);
            break;

        case "info":
            toast.info(toastText, globalOption);
            break;

        default:
            toast(toastText, globalOption);
            break;
    }
};

export default showToast;
