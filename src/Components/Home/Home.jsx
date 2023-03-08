import React , { useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        window.addEventListener('load', function() {
            // Check if user is logged in
            if (userIsLoggedIn()) {
              document.querySelector('#login-link').style.display = 'none';
              document.querySelector('#logout-item').style.display = 'block';
            } else {
              document.querySelector('#login-link').style.display = 'block';
              document.querySelector('#logout-item').style.display = 'none';
            }
          
            // Handle logout click
            document.querySelector('#logout-link').addEventListener('click', function() {
              logoutUser();
            });
          });
          
          function userIsLoggedIn() {
            // Check if user is logged in
            // Return true or false
          }
          
          function logoutUser() {
            // Log user out
            // Update UI as needed
          }
          
      });


  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" id="login-link">Login</Link>
          {/* <a className="nav-link" href="#" id="login-link">Login</a> */}
        </li>
        <li className="nav-item d-none" id="logout-item">
          <a className="nav-link" href="#" id="logout-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}

export default Home;