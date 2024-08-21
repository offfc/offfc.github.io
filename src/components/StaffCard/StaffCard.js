import React from "react";
import "./StaffCard-module.css";
import FeatureButton from "../FeatureButton/FeatureButton.js";

function StaffCard({ uid, userName, role }) {
  return (
    <div className="card">
      <div>
        <img
          className="card-img"
          src={"https://a.ppy.sh/" + uid}
          alt="User Avatar"
        />
      </div>
      <p className="card-title fade-in">{userName}</p>
      <p className="card-subtitle fade-in">
        <i className="fa fa-rocket"></i> {role}
      </p>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FeatureButton
          link={"https://osu.ppy.sh/users" + uid}
          buttonText="在 osu! 查看"
        />
      </p>
      <br />
    </div>
  );
}

export default StaffCard;
