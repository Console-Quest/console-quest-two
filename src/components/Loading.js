import React from "react";
import loading from "../../public/assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
