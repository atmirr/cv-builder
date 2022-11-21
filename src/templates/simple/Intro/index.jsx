import React from "react";
import InlineField from "@components/InlineField";

function Intro({ classes }) {
  return (
    <div className="bg-white rounded-3xl shadow-3xl p-8">
      <div className="pb-4">
        <img
          src="../../assets/images/sample-avatar.jpg"
          width="93"
          className="rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex flex-col gap-1 pb-4">
        <InlineField id="name" className="ext-2xl text-black-800" />
        <InlineField id="position" className="text-xl text-primary" />
      </div>
      <div className="flex flex-col gap-2 text-black-500 font-light">
        <InlineField id="location" />
        <a href="#" target="_blank" className="underline underline-offset-4">
          elon@teslamotors.com
        </a>
        <a href="#" target="_blank" className="underline underline-offset-4">
          http://spacex.com
        </a>
      </div>
    </div>
  );
}

export default Intro;
