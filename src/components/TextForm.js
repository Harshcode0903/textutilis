import React , {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success")
  }
  const handleClearClick = ()=>{
    
    let newText= '';
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("on change");s
    setText(event.target.value);
  }
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');
  // text="new text";wrong way to change the state
  // setText("new Text");

  const handleCopy=() =>{
    var text=document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  }


  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#1c3556'}}>
        <h2 mb-4="true" >{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#1c3556'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'#403636'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
