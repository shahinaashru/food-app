import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // good for debugging

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      {/* Safe error output */}
      <p style={{ color: "gray" }}>
        <i>{error?.statusText || error?.message || "Page not found."}</i>
      </p>
    </div>
  );
}
