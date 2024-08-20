import React from "react";
import "./StaffCard-module.css";
import FeatureButton from "../FeatureButton/FeatureButton.js";

// TODO: Bottom margin won't work, why?
function StaffCard({ uid, userName, role }) {
  return (
      <div className="card">
      <img
        src={"https://a.ppy.sh/" + uid}
        alt="User Avatar"
        style={{ width: 100 + "%" }}
      />
      <p className="card-title">{userName}</p>
      <p className="card-subtitle">{role}</p>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FeatureButton link={ "https://osu.ppy.sh/users" + uid} buttonText="在 osu! 查看"/>
      </p>
      <br />
    </div>
  );
}

export default StaffCard;
