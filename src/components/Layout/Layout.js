import React from "react";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ margin: "10px" }}>{children}</div>
    </div>
  );
}

export default Layout;
