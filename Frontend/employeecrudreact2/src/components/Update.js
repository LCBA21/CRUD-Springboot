import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const [student, setStudent] = useState({
        first_Name: "",
        job_Title: "",
        last_Name: ""
    });

    const {id}=useParams()

    const navigate=useNavigate()

    const { first_Name, job_Title, last_Name } = student;

    const handleOnChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
        
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8085/update/${id}`, student);

            setStudent({
                first_Name: "",
                job_Title: "",
                last_Name: ""
            });
            console.log("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
        navigate("/")
    }

  return (
         <div  className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center  m-4'>Edit Employee</h2>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                              First Name
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='First Name'
                            name="first_Name"
                            value={first_Name}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Last Name' className='form-label'>
                              Last Name
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Last Name'
                            name="last_Name"
                            value={last_Name}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Job Title' className='form-label'>
                                Job Title
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Job Title'
                            name="job_Title"
                            value={job_Title}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className='mb-3'>
                    <button onClick={handleSubmit} className='btn btn-outline-primary'>Edit</button>
                    <Link  className='btn btn-outline-danger mx-3' to={"/"}>Cancel</Link>
   
                    </div>
            </div>
        </div>      
    </div>
      
  )
}

export default Update
