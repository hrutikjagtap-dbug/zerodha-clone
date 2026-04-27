import React from "react";

function NotFound() {
  return (
    <div
      className="container mt-5 text-center
    "
    >
      <h1
        className="mt-5"
      >
        404
      </h1>
      <p
        className="mt-3"
        style={{
          color: "red",
        }}
      >
        Sorry, The page your looking for not found.
      </p>
    </div>
  );
}

export default NotFound;
