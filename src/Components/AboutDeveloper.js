import React from 'react'
import "./AboutDeveloper.css"
const AboutDeveloper = () => {
   
  return (
    <>
        <div className="container" style={{backgroundColor:"--bs-danger-bg-subtle"}}>
            <h1 className='text-center fs-1 fw-bold'>I've been waiting for you</h1>
            <div className="main">
                <div id='content'>
                    <p>Hi I'm Aravind,</p>
                    <p id='changeWord'>""</p>
                    <p>things for web</p>
                </div>
                
                <img src="./public\WhatsApp Image 2023-06-18 at 5.49.46 PM.jpeg" class="rounded float-end" alt="..."/>
            </div>
        </div>
    </>
  )
}

export default AboutDeveloper