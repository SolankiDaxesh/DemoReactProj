import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
//import About from './components/About.jsx'
function App() {
  const [mode, setDarkMode] = useState('light');
  const [textMod, setTextMod] = useState('dark');
  const toggleMode =()=>
  {
    if(mode === 'light' && textMod === 'dark'){
    setDarkMode ('dark')
    setTextMod('light')
    }
    else{
      setDarkMode ('light')
      setTextMod('dark')
    }
  };
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} textMod={textMod}/>
      <hr />
      <div className='container my-3'>
      <TextForm heading="Enter the Text to analyze" />
      {/*<About />*/}
      </div>
    </>
  )
}
export default App;
