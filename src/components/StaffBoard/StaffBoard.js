import React from "react";
import "./StaffBoard-module.css";

function StaffBoard({ uid, userName, role }) {
  return (
    <div class="card" style={{ background: "url(../assets/triangles.png)" + uid + ")"}}>
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
      <br />
      <p>
        <a href={"https://osu.ppy.sh/users/" + uid} target="_blank" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View on osu!</span>
        </a>
      </p>
      <br />
    </div>
  );
}

export default StaffBoard;

