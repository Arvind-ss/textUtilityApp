import React, { useState } from 'react';
export default function TextForm(props) {
    const handelUpClick=()=>{
        let newText=text.toUpperCase();       
        setText(newText)
        props.showAlert(" Converted to UpperCase","success ")
    }
    const handelLoClick=()=>{
     let newText=text.toLowerCase();
     setText(newText) 
     props.showAlert(" Converted to LowerCase","success ")
    }
    const handelClearClick=()=>{
    let newText='';
    setText(newText)
    props.showAlert(" Text Cleared!","success ") 
    }
    const handelRemoveExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(" Extra spaces removed","success ")
    }
    const handelReversetext=()=>{
      let newText=text.split("").reverse().join("");
      setText(newText)
      props.showAlert(" Text Reversed","success ")
    }
    
    const handelOnChange=(event)=>{
        setText(event.target.value)
    }
    
    
    
    const [text,setText]= useState("");
    
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'? 'White':'Black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="exampleFormControlTextarea1"
          rows="1" 
          style={{backgroundColor:props.mode==='dark'? 'White':'#EEEEEE'}}   
        ></textarea>
      </div>
      <button type="button" className={`btn mx-2 btn-outline-${props.mode==='dark'? 'light' : 'dark'}`}
      onClick={handelUpClick}>
        Convert to UpperCase
      </button>
      <button type="button" className={`btn mx-2 btn-outline-${props.mode==='dark'? 'light' : 'dark'}`}
      onClick={handelLoClick}>
        Convert to LowerCase
      </button>

      {/* //clearText */}
      <button type="button" className={`btn mx-2 btn-outline-${props.mode==='dark'? 'light' : 'dark'}`}
      onClick={handelClearClick}>
        Clear Text
      </button>

      {/* reverseString */}
      <button type="button" className={`btn mx-2 btn-outline-${props.mode==='dark'? 'light' : 'dark'}`}
      onClick={handelReversetext}>
        Reverse Text
      </button>

      {/* removeExtraSpaces */}
      <button type="button" className={`btn mx-2 btn-outline-${props.mode==='dark'? 'light' : 'dark'}`}
      onClick={handelRemoveExtraSpaces}>
        Remove Extra Spaces
      </button>

      
    </div>
    <div className="container" style={{color:props.mode==='dark'? 'White':'Black'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} Words and {text.length} Characters</p>
      <h2>Preview</h2>
      <p >{text}</p>
    </div>
    </>
  );
}
