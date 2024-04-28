import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageChooser() {
  const { setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="ENG">English</option>
      <option value="GER">German</option>
      <option value="TR">Turkish</option>
      <option value="AR">Arabic</option>
      <option value="SP">Spanish</option>
    </select>
  );
}

export default LanguageChooser;
