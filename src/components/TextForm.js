import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]= useState('');
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText);
        // props.showAlert("Text Cleared","success");
    }
    const handleEmail =()=>{
        let newText=text.split("@");
        let later = newText[1].split(".");
        setText("Your account is on "+ later[0] + " And your username could be " + newText[0]);
        // props.showAlert("Email verified ","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
       
    }
    return (
        <>
        <div style={{color : props.mode}} className="container ">
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'black',color:props.mode}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode,color:'black'}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode,color:'black'}} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode,color:'black'}} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode,color:'black'}} onClick={handleEmail}>Verify Email</button>
        </div>
        <div style={{color : props.mode}} className="container my-3 ">
            <h2>Your text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters. </p>
            <p>You will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the entered text </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
        </>
    )
}
