import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import SalaryPage from '../Pages/SalaryPage';
import CreateJob from '../Pages/CreateJob';
import JobDetails from '../Pages/JobDetails';
import Login from '../Pages/Login';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import MyJobs from '../Pages/MyJobs';
import UpdateJob from '../Pages/UpdateJob';
import SignUp from '../Pages/SignUp';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        
         
        {
            path: "/",
            element: <Home/>
        }, 
        {
            path: "/my-Job",
            element: <PrivateRoute><MyJobs/></PrivateRoute>
        },
        {
            path: "/salary",
            element: <SalaryPage/>
        },
        {
            path: "/edit-job/:id",
            element: <UpdateJob/>,
            loader: ({params}) => fetch(`http://localhost:8000/all-jobs/${params.id}`)
        },
        {
            path: "/post-job",
            element: <CreateJob/>
        },
       
        {
            path: "/jobs/:id",
            element: <JobDetails/>
        }
      ]
    },

    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/Sign-up",
        element: <SignUp/>
    }
  ]);
  
    <div>Route</div>
  

export default router