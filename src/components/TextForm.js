import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <div clasName="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert To Upper Case </button>
                <button className="btn btn-danger mx-1" onClick={handleLoClick}>Convert To Lower Case </button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>

            <div className="container my-4" >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words , {text.length} characters</p>
                <h2> Preview </h2>
                <p> {text}</p>
            </div>
        </>
    );
}