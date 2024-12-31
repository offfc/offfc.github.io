import React from "react";
import "./FeatureButton-module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FeatureButton({ link, buttonText, spacing }) {
  return (
    <a
      href={link}
      target="_self"
      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-blueArchive transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      style={{ marginRight: spacing ?? 0 }}
    >
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blueArchive group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <ArrowForwardIcon className="w-5 h-5 text-green-400 flex"/>

      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <ArrowForwardIcon className="w-5 h-5 text-white items-center flex"/>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {buttonText}
      </span>
    </a>
  );
}
