import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let navigateFn = null;

export const useNavigator = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigateFn = navigate;
    }, [navigate]);
};

export const navigate = (to, options) => {
    if (navigateFn) {
        navigateFn(to, options);
    } else {
        console.error("Navigate function not initialized. Make sure to call useNavigator inside a component!");
    }
};