import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { LanguageContext } from "./components/LanguageContext";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("ENG");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        <Header />
        <div className="content">
          <Content />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
