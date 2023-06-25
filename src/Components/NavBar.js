import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> {props.title}</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/aboutDeveloper">About Developer</Link>
        </li> */}
        
      </ul>
        <div className="btn-group">
          <button type="button" className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-2` }  onClick={props.toogleMode}>{`${props.mode==="dark"?"Light Mode":"Dark Mode"}`}</button>
          {/* <button type="button" className={`btn btn-${props.mode==='light'? 'dark':'light'} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/" onClick={props.toogleShade("#343a40")}>Black Shade</a></li>
            <li><a className="dropdown-item" href="/" onClick={props.toogleShade("#1F3E34")}>Green Shade</a></li>
            <li><a className="dropdown-item" href="/" onClick={props.toogleShade("#7D1935")}>Red Shade</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Separated link</a></li>
          </ul> */}
        </div>
        {/* <div className={`form-check form-switch mx-4 text-${props.mode==='light'? 'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode}/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div> */}
      <form className="d-flex" role="search">
        <input className="form-control me-2 text-dark" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
NavBar.protoTypes={
    title:PropTypes.string,
    about:PropTypes.string
}
NavBar.defaultProps={
    title:"Set the title",
    about:"Set the About"
}

export default NavBar