import React from "react";
import { useSelector } from "react-redux";
import { selectSetting } from "@slices/settings";
import Template from "./templates";

function App({ classes }) {
  const primaryColor = useSelector(selectSetting("primaryColor"));
  return (
    <div className="mx-auto w-[705px] h-[997.5px] bg-secondary">
      <Template />
    </div>
  );
}

export default App;
