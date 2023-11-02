import React from 'react'
import { Link } from 'react-router-dom'

const ControlPanel = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Full Stack Employee Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex ml-auto" role="search"> 
        <Link class="btn btn-outline-light" type="submit" to={'/addemployee'}>Add Employee</Link>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default ControlPanel
