import { NavigateFunction } from "react-router-dom";

export const goBack = (navigate: NavigateFunction) => {
    navigate(-1);
}