import React from "react";
import StandardInputField from "../StandardInputField/StandardInputField";
import StandardButton from "../StandardButton/StandardButton";

function ConversationInputArea() {
  return (
    <div className="flex justify-center items-center gap-2">
      <StandardInputField
        type={"text"}
        name={"message"}
        id={"message"}
        onChange={() => {}}
        placeholder={"Message"}
      />
      <StandardButton text={"Send"} type={"btn"} next={() => {}} />
    </div>
  );
}

export default ConversationInputArea;
