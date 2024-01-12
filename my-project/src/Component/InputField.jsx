import React from 'react'

// Functional component for rendering a radio input with label
const InputField = ({ handleChange, value, title, name }) => {
    return (
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value={value} // Set the value prop as the input value
          name={name}
        />
        <span className="checkmark"></span>
        {title}
      </label>
    );
  };
// Export the InputField component as the default export
export default InputField