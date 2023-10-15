import React from "react";
import { unsetToken } from "../../services/auth";

const Logout = () => {
  return (
    <section>
      <h1>Logout</h1>
      <div className={` btnSolid  bg-lipstick`} onClick={unsetToken}>
        <h4 className={`btn-text white`}>Logout</h4>
      </div>
    </section>
  );
};

export default Logout;
