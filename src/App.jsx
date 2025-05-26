import "./App.css";
import React, { lazy, Suspense } from "react";

const AuthApp = lazy(() => import("authApp/AuthApp"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthApp />
      </Suspense>
    </>
  );
}

export default App;
