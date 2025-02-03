import React from "react";


const withContainer = (WrappedComponent, title) => {
  return (props) => (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "16px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>{title}</h2>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withContainer;
