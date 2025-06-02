import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import useLoginUser from "./zustand/useLoginuser";
const AuthApp = lazy(() => import("authApp/AuthApp"));

function App() {
  const { updateLoginUserDetails, isAuthenticated, userDetails } =
    useLoginUser();

  const handleLoginUserDetails = (event) => {
    updateLoginUserDetails(event.detail);
  };

  useEffect(() => {
    window.addEventListener("getUserData", handleLoginUserDetails);

    return () => {
      window.removeEventListener("getUserData", handleLoginUserDetails);
    };
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthApp />
        </Suspense>
      ) : (
        <div>hello {userDetails?.name}</div>
      )}
    </>
  );
}

export default App;
