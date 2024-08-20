import React from "react";
import "./StaffBoard-module.css";
import FeatureButton from "../FeatureButton";

function StaffBoard({ uid, userName, role }) {
  return (
      <div className="card">
      <img
        src={"https://a.ppy.sh/" + uid}
        alt=""
        style={{ width: 100 + "%" }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"
      ></link>
      <h1>{userName}</h1>
      <p class="card-title">{role}</p>
      <p style={{ marginTop: "10px" }}>
        <FeatureButton link={ "https://osu.ppy.sh/users/" + uid} buttonText="在 osu! 查看"/>
      </p>
      <br />
    </div>
  );
}

export default StaffBoard;

