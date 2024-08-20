import React from "react";
import "./StaffCard-module.css";
import FeatureButton from "../FeatureButton/FeatureButton.js";

function StaffCard({ uid, userName, role }) {
  return (
      <div className="card">
      <img
        src={"https://a.ppy.sh/" + uid}
        alt=""
        style={{ width: 100 + "%" }}
      />
      <h1>{userName}</h1>
      <p className="card-title">{role}</p>
      <p style={{ marginTop: "10px" }}>
        <FeatureButton link={ "https://osu.ppy.sh/users" + uid} buttonText="在 osu! 查看"/>
      </p>
      <br />
    </div>
  );
}

export default StaffCard;
