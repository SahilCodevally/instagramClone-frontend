import React from "react";

function Loading() {
  return (
    <div id="splash-screen" className="splash-screen">
      <svg className="splash-spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
}

export default Loading;
