import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState('');
  const handleUpClick =()=>{
    console.log("upper case was clickeds"+text);
    let newText=text.toUpperCase();
    setText(newText);

  }
  const handleOnChange =(event)=>
  {
    console.log("On Change");
    setText(event.target.value);
  }
  const clearText =(event)=>
  {
    console.log('');
    setText(event.target.value);
  }
  

   return (
    <>
        <div className="clipboard" style={{color: props.mode==='dark'?'white':'#042743', backgroundColor: props.selectColor }}>
          <h1>Enter your text:</h1>
          <h1>{props.heading}</h1>
          <div className="mb-3 ">
          <textarea className="writeText"  value={text} onChange={handleOnChange} id="mybox" rows="8"  cols="120" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to lower case</button>
          <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
          <button className="btn btn-primary mx-3" onClick={clearText}>clear text</button>
         
         
      </div>
      
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 *text.split(" ").length }</p>
          <h2>preview</h2>
          <p>{text}</p>
      </div>
    </>
  )
}