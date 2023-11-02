import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


const Display = () => {

       const [student, setStudent] = useState({
        first_Name: "",
        job_Title: "",
        last_Name: ""
    });


    const {id}=useParams()

    useEffect(() => {
        loadEmployee();
      }, []);
      

      const loadEmployee = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/employee/${id}`);
            setStudent(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    




  return (

    <div  className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center  m-4'>Add Employee</h2>
            
            <div className='card'>
                <div className='card-header'>
                    Details of User ID:
                    <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>First Name:</b>
                                {student.first_Name}

                            </li>

                            <li className='list-group-item'>
                                <b>Last Name:</b>
                                {student.last_Name}

                            </li>

                            <li className='list-group-item'>
                                <b>Job Title:</b>
                                {student.job_Title}

                            </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>Home</Link>
            </div>
        </div>
   </div>
  )
}

export default Display
