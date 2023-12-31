import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (

  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
  <div className={`form-check form-switch`}>
  <input className="form-check-input" onChangeCapture={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark</label>
</div>
    </div>
  </div>
</nav>

  )
}

// Navbar.PropTypes={
//   title: PropTypes.string.isRequired, //required
//   aboutText: PropTypes.string,
// }

//if values not passed in props default value set 
// Navbar.defaultProps={
//   title:'Set title here',
//   aboutText:'About text here'
// }




//note ->
//1 just write rfc for react function base component
//2 impt import prop types 
//3 javascripts written in this braces { } i.e {props.about}

