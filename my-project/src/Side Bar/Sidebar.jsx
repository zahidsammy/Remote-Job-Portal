import React from 'react'
import Location from './Location';
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExperience from './WorkExperience';
import EmploymentType from './EmploymentType';

// Sidebar component for displaying job search filters
const Sidebar = ({ handleChange, handleClick }) => {
    return (
        <div className='space-y-5'>
        {/* Section heading for Filters */}
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
  
        {/* Location filter component */}
        <Location handleChange={handleChange} />
  
        {/* Salary filter component */}
        <Salary handleChange={handleChange} handleClick={handleClick} />
  
        {/* Job Posting Date filter component */}
        <JobPostingData handleChange={handleChange} />
  
        {/* Work Experience filter component */}
        <WorkExperience handleChange={handleChange} />
  
        {/* Employment Type filter component */}
        <EmploymentType handleChange={handleChange} />
      </div>
    )
  }
  
  export default Sidebar