import React from 'react'
import { Navigate } from "react-router-dom";

const AlredyLogin = ({children}) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        return <Navigate to="/" replace={true} />;
      }
      return <>{children}</>;
}

export default AlredyLogin