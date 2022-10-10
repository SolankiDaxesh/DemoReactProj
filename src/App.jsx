import './App.css'
import Navbar from './components/Navbar.jsx'
//import TextForm from './components/TextForm.jsx'
import About from './components/About.jsx'
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <hr />
      <div className='container my-3'>
        {/*<TextForm heading="Enter the Text to analyze" />*/}
        <About />
      </div>

    </>
  )
}
export default App;
