import React from "react";

function FailedFlashMessage() {
  return (
    <div className="floating-alerts">
      <div className="alert alert-danger text-center floating-alert shadow-sm">Error: First name only and proper email</div>
    </div>
  );
}

export default FailedFlashMessage;
