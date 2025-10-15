import React from 'react'

const Nav =() =>{
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="">
                <i className="fas fa-graduation-cap me-2"></i>
                UniversityRankings
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Universities</a>


                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">News</a>
                    </li>
                </ul>
                

                <form className="d-flex search-form" method="GET" action="/">
                    <input className="form-control" type="search" name="q" placeholder="Search universities..." aria-label="Search"/>
                    <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Nav;
