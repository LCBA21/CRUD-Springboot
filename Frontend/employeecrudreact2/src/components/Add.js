import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Add = () => {
    const [student, setStudent] = useState({
        first_Name: "",
        job_Title: "",
        last_Name: ""
    });

    const navigate=useNavigate()

    const { first_Name, job_Title, last_Name } = student;

    const handleOnChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8085/add", student);
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

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8085/employees')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);


  return (
    <div  className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center  m-4'>Add Employee</h2>
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
                    <button onClick={handleSubmit} className='btn btn-outline-primary'>Add</button>
                    <Link  className='btn btn-outline-danger mx-3' to={"/"}>Cancel</Link>
   
                    </div>
            </div>
        </div>
           {/* <form  >


                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="first_Name"
                        value={first_Name}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="job_Title"
                        value={job_Title}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_Name"
                        value={last_Name}
                        onChange={handleOnChange}
                    />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form> */}
      
            {/* <table className="custom-table">
        <thead>
          <tr className="table-header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{item.first_Name}</td>
              <td>{item.last_Name}</td>
              <td>{item.job_Title}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default Add
