import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const Newsletter = () => {
  return (
      <div>
          {/* 1st section: Email subscription */}
          <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaEnvelopeOpenText /> Email me for jobs
              </h3>
              <p className="text-primary/75 text-base mb-4">
                  
              </p>
              <div className="w-full space-y-4">
                  {/* Email input */}
                  <input
                      type="email"
                      placeholder="name@mail.com"
                      className="w-full block py-2 pl-3 border focus:outline-none"
                  />
                  {/* Subscribe button */}
                  <input
                      type="submit"
                      value="Subscribe"
                      className="w-full block py-2 bg-pink rounded-sm text-white cursor-pointer font-semibold"
                  />
              </div>
          </div>

          {/* 2nd section: Resume upload */}
          <div className="mt-20">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaRocket /> Get noticed faster
              </h3>
              <p className="text-primary/75 text-base mb-4">
                  
              </p>
              <div className="w-full space-y-4">
                  {/* Resume upload button */}
                  <input
                      type="submit"
                      value="Upload your resume"
                      className="w-full block py-2 bg-pink rounded-sm text-white cursor-pointer font-semibold"
                  />
              </div>
          </div>
      </div>
  );
};

export default Newsletter;