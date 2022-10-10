import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case button clicked" + " " + text);
    let newText = text.UpperCase;
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("Handle on change")
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Some Text Here');

  return (
    <div>
      <h3>{props.heading} </h3>
      <div className="mb-3">
        <textarea className="form-control" id="myTextarea" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
