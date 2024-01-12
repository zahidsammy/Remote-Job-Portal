import React from 'react'
import InputField from '../Component/InputField'

const WorkExperience = ({handleChange}) => {
    return (
      <div>
           <h4 className="text-lg font-medium mb-2">Work experience</h4>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>Any Experience
          </label>
          <InputField
            handleChange={handleChange}
            value="Internship"
            title="Internship"
            name="test"
          />
          <InputField
            handleChange={handleChange}
            value="Work Junior"
            title="Work remotely"
            name="test"
          />
          <InputField
            handleChange={handleChange}
            value="Work Associate"
            title="Work Associate"
            name="test"
          />
          <InputField
            handleChange={handleChange}
            value="Senior"
            title="Senior"
            name="test"
          />
        </div>
      </div>
    )
  }
  
  export default WorkExperience