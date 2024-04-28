import React from "react";
import "./Input.css";

const Input = ({ name, type, value, onChange, label }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={onChange} required />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export default Input;
