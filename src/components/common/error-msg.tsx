import React from "react";

type ErrorMsgProps = {
  msg?: string; // `msg` is optional to avoid undefined errors
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ msg }) => {
  if (!msg) return null; // Prevent rendering empty div
  return <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{msg}</div>;
};

export default ErrorMsg;
