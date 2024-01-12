import React from 'react'

// Functional component for rendering a page header
const PageHeader = ({title, path}) => {
    return (
      <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
          <div>
              <h2 className='text-3xl text-pink font-medium mb-1 text-center'>{title}</h2>
              <p className='text-sm text-center'> <a href="/">Home</a> / {path}</p>
          </div>
      </div>
    )
  }
// Export the PageHeader component as the default export
export default PageHeader