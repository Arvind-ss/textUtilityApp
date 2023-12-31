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
              <h4> Analyze Your Text </h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample" 
            
          >
            <div className="accordion-body" >
             TextUtils is a web-based text utility tool built using React JS. It offer a user-friendly interface and efficient performance. It allows users to edit, format, manipulate and analyze your text quickly and efficiently.
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
              <h4> Free to use </h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant chracter count & word count statistics for a given text. TextUtils reports the number of words and character .thus it is suitable for writing text with word/character.Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        
      </div>    
      

      
    </div>
    
  );
}

