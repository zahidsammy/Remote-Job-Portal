import React from 'react'
import { useState, useEffect } from 'react';
import Banner from '../Component/Banner';
import Jobs from './Jobs';
import Card from '../Component/Card';
import Newsletter from '../Component/Newsletter';
import Sidebar from '../Side Bar/SideBar';




const Home = () => {
  // State for managing selected category, job data, current page, and loading status
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);

  // Fetch job data from the server on component mount
  useEffect(() => {
      setIsLoading(true);
      fetch("http://localhost:8000/all-jobs")
          .then((res) => res.json())
          .then((data) => {
              setJobs(data);
              setIsLoading(false);
          });
  }, []);

  // Input filter state and event handler
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value);
  };

  // Filtering items based on job title
  const filteredItems = jobs.filter(
      (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filtering event handler
  const handleChange = (event) => {
      setSelectedCategory(event.target.value);
  };

  // Button filtering event handler
  const handleClick = (event) => {
      setSelectedCategory(event.target.value);
  };

  // Function to calculate the index range for the current page
  const calculatePageRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return { startIndex, endIndex };
  };

  // Function to handle next page
  const nextPage = () => {
      if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
          setCurrentPage(currentPage + 1);
      }
  };

  // Function to handle previous page
  const prevPage = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  // Function to filter and paginate the job data
  const filteredData = (jobs, selected, query) => {
      let filteredJobs = jobs;

      // Filtering Input Items
      if (query) {
          filteredJobs = filteredItems;
      }

      // Applying selected filter
      if (selected) {
          filteredJobs = filteredJobs.filter(
              ({
                  jobLocation,
                  salaryType,
                  experienceLevel,
                  maxPrice,
                  postingDate,
                  employmentType,
              }) =>
                  jobLocation.toLowerCase() === selected.toLowerCase() ||
                  postingDate === selected ||
                  parseInt(maxPrice) <= parseInt(selected) ||
                  salaryType.toLowerCase() === selected.toLowerCase() ||
                  experienceLevel.toLowerCase() === selected.toLowerCase() ||
                  employmentType.toLowerCase() === selected.toLowerCase()
          );
      }

      // Slice the data based on the current page
      const { startIndex, endIndex } = calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex, endIndex);

      return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  // Get the filtered and paginated data
  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? ( // Loading indicator
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}

          {/* pagination block here, to break down big block of data into smaller and more managable */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
