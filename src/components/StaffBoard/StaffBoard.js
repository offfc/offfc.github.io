import React from "react";
import "./StaffBoard-module.css";

function StaffBoard() {
  return (
    <div class="card">
      <img src="img.jpg" alt="John" style={{ width: 100 + "%" }} />
      <link
        rel="stylesheet"
        href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"
      ></link>
      <h1>John Doe</h1>
      <p class="card-title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <a href="#" class="acard">
        <i class="fa fa-dribbble"></i>
      </a>
      <a href="#" class="acard">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#" class="acard">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="#" class="acard">
        <i class="fa fa-facebook"></i>
      </a>
      <p>
        <button class="card-button">Contact</button>
      </p>
    </div>
  );
}

export default StaffBoard;