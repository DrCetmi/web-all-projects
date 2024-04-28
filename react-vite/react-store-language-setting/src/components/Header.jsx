import React from "react";
import LanguageChooser from "./LanguageChooser";

function Header() {
  return (
    <div>
      <h2>Please select your language: </h2>
      <LanguageChooser />
    </div>
  );
}

export default Header;
