import React, { useContext } from "react";
import { ErrorContext } from "../contexts/ErrorContext";

function GlobalErrorPage() {
  const { error, clearError } = useContext(ErrorContext);

  if (!error) return null; // no error, render nothing

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255,255,255,0.95)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        textAlign: "center",
      }}
    >
      <h1>Error</h1>
      <p>{error}</p>
      <button
        onClick={clearError}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
    </div>
  );
}

export default GlobalErrorPage;
