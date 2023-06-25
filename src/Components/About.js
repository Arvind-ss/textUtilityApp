import React from "react";

export default function About(props) {
  
    

  return (
    <div className="container" style ={{color:props.mode==='dark'? 'White':'Black'}} >
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item"   >
          <h2 className="accordion-header" style ={{color:props.mode==='dark'? '#1F3E34':'Black'}} >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style ={{backgroundColor:props.mode==='dark'? '#1F3E34':'white',color:props.mode==='dark'? 'White':'Black'}}
            >
              <h4> About App </h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample" 
            
          >
            <div className="accordion-body" >
             TextUtils is a web-based text utility tool built using React JS. It offer a user-friendly interface and efficient performance. It allows users to edit, format, manipulate and convert text.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" style ={{color:props.mode==='dark'? 'White':'Black'}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style ={{backgroundColor:props.mode==='dark'? '#1F3E34':'white',color:props.mode==='dark'? 'White':'Black'}}

            >
              <h4> About Developer </h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Hi I'm Aravind, I <strong> Sketch,Design,Develop </strong> things for web. I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me.
            </div>
          </div>
        </div>
        
      </div>    
      

      
    </div>
    
  );
}

