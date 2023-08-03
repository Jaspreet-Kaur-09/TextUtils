import React,{useState} from 'react'


export default function TextForm(props) {

const handleUpClick=()=>{
    console.log("Uppercase is clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","success");
}

const handleLowClick=()=>{
  console.log("Lowercase is clicked");
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowecase","sucess");
}

const handleResetClick=()=>{
  setText('');
  props.showAlert("Reset text","sucess");
}

const handleCopy=()=>{
  var text=document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied","sucess");
}

const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed","sucess");
}

const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
}

const[text,setText]=useState('');//set text default empty
// setText("next text")

return ( 
<>

<div className="container">
<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
<textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleResetClick}>Reset</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
</div>

<div className="container my-4"style={{color:props.mode==='light'?'black':'white'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter text to preview"}</p>
</div>
</>

  )
}


//Note 1: React Hooks
//import {useState}
// const[count,setCount]=useState(0);
//that means count(variable where value store)
// setCount is a function with help of which updation is occur

//Note2:
// here -> const[text,setText]=useState('Enter text here');
// text='Enter the text'
//suppose if we do this: setText("kjhsjh") now text is this one

//note 3
// <textarea className="form-control" value={text} id="myBox" rows="8"></textarea>
//value of text area is equal to {text}

//note 4
//event.target.value for adding text current to textarea
