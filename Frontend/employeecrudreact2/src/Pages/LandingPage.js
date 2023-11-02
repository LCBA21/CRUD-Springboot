import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const LandingPage = () => {
    const [data, setData] = useState([]);

    const {id}=useParams()

    useEffect(() => {
        loadEmployee();
      }, []);


      const loadEmployee= async()=>{
        axios.get('http://localhost:8085/employees')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      }

      const deleteEmployee=async(id)=>{
         await axios.delete(`http://localhost:8085/delete/${id}`)

         loadEmployee();

      }



  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Job Title</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.first_Name}</td>
              <td>{item.last_Name}</td>
              <td>{item.job_Title}</td>
              <td>
                    <Link className='btn btn-primary mx-2' to={`/view/${item.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/update/${item.id}`}>Edit</Link>
                    <button onClick={()=>deleteEmployee(item.id)} className='btn btn-danger mx-2'>Delete</button>

              </td>
            </tr>
          ))}
  </tbody>
</table>


        </div>
      
    </div>
  )
}

export default LandingPage
