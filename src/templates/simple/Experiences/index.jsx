import React from "react";
import InlineField from "@components/InlineField";
import FieldsList from "@components/FieldsList";

function Experiences({ classes }) {
  return (
    <div className="flex flex-col gap-4">
      <InlineField
        id="experiences-header"
        className="uppercase text-2xl text-black-800"
      />
      {/* TODO: Should write a component called BlocksList on top of the FieldsList */}
      <div className="flex flex-col gap-8">
        <FieldsList id="experiences" type="BLOCKS">
          <div>
            <InlineField
              id="role"
              variant="h3"
              className="text-xl text-primary"
            />
            <InlineField id="date" className="text-base text-black-500" />
            {/* TODO: Should write another component called FieldsList on top of this and changed the name of this to List (Or sth. like that) */}
            <FieldsList
              id="activities"
              type="FIELDS"
              className="list-disc pl-4 pt-3 text-sm text-black-500 font-light font-light"
            >
              <InlineField id="activity" />
            </FieldsList>
          </div>
        </FieldsList>
      </div>
    </div>
  );
}

export default Experiences;
