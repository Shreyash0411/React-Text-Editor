import React,{useState} from 'react'

export default function TextForm(props) {

    // use state created to deal with all the texts
    const [text, setText] = useState("");

    // function to convert text into uppercase
    const handleUCClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to uppercase","success");
    }

    // function to convert text into lowercase
    const handleLCClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lowercase","success");
    }

    // function to convert text into capitalized form
    const handleCapitalized =()=>{
        let newText = (function()
            {
                let sampleText = text.toLowerCase();
                const words = sampleText.split(" ");

                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() +    words[i].substring(1) ;
                    }
                
                const newString = words.join(" ");
                return newString;
            }
        )

        setText(newText);
        props.showAlert("Text has been Capitalized","success");
    }

    // function to convert text into capitalized format
    const handleCopy= ()=>{
        let textWritten = document.getElementById("myBox");
        textWritten.select(); 
        navigator.clipboard.writeText(textWritten.value);
        props.showAlert("Text has been copied","success");
    }

    // function to clear the text from the text area
    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been Cleared","success");

    }

    // function to maintain the state of the text and allowing the user
    // to write on the text area without any bloackage
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }




    return (
        <React.Fragment>
        <div className='container' style={{color : props.mode === "dark"? "#EEEEEE":"black"}}>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8" style={{backgroundColor : props.mode==="light"?"white":"#2D4356", color : props.mode === "light"?"black":"white"}}></textarea>
            </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUCClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLCClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalized}>Convert To Capitalized</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy All Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear All Text</button>
        </div>

        <div className="container my-3" style={{color : props.mode === "dark"? "#EEEEEE":"black"}}>
            <h4>Your text summary is -:</h4>
            <p>{text.split(" ").filter((elm)=>{return elm.length!=0}).length} Words, {text.length} Characters</p>
            <p>{0.008* text.split(" ").length} Minutes Read</p>

            <h2>Preview -:</h2>
            <p>{text}</p>
        </div>

           
        </React.Fragment>
  )
}
