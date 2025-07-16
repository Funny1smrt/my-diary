import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case "/":
                document.title = "Головна | Мій щоденник";
                break;
            case "/tasks":
                document.title = "Завдання | Мій щоденник";
                break;
            default:
                document.title = "Мій щоденник";
        }
    }, [location.pathname]);
}
export default usePageTitle;