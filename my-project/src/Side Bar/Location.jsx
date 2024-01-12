import React from 'react'
import { Input } from 'postcss'
import InputField from '../Component/InputField'

// Location component for handling location selection
const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="Anywhere in the World"
          title="Anywhere in the World"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="New Zealand"
          title="New Zealand"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Austrilia"
          title="Austrilia"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="USA"
          title="USA"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;