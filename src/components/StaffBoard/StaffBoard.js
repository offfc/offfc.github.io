import React from "react";
import "./StaffBoard-module.css";

function StaffBoard({ uid, userName, role }) {
  return (
    <div class="card" style={{ background: "url(https://a.ppy.sh/user-profile-covers/" + uid + ")"}}>
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
      <a href="#" class="acard">
        <i class="fa fa-dribbble"></i>
      </a>
      <p>
        <button class="card-button" href={"https://osu.ppy.sh/users/" + uid}>
          View on osu!
        </button>
      </p>
    </div>
  );
}

export default StaffBoard;
