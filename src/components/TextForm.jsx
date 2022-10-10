import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Upper Case button clicked" + " " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    console.log("Upper Case button clicked" + " " + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("Handle on change")
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Some Text Here');

  return (
    <>
      <div>
        <h3>{props.heading} </h3>
        <div className="mb-3" >
          <textarea className="form-control  " id="myTextarea" placeholder='Enter Some Text Here' onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-outline-primary' onClick={handleUpClick}> Upper Case </button>
        <button className='btn btn-outline-secondary mx-3' onClick={handleLoClick}> Lower Case </button>
      </div>
      <hr />
      <div className='container my-3'>
        <h3>Your Text Summery</h3>
        <p><strong>{text.split(" ").length}</strong> words  and <strong>{text.length}</strong> characters</p>
        <p><strong>{0.008 * text.split(" ").length}</strong> minutes will be taken to read </p>
      </div>
      <hr />
      <div className="mb-3 ">
        <h4>Output</h4>
        <textarea class="form-control" type="text" value={text} placeholder='Enter Some Text Here' disabled readonly />
        <hr />
      </div>
    </>
  )
}
