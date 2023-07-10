import  React,{useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

//import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
export default function App() {

  //use to set the dark mode in the application page
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      message : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = ()=>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      //document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success")
    }

    else{
      setMode("dark");
      document.body.style.backgroundColor = "#2C3333";
      //document.body.style.color = "#EEEEEE";
      showAlert("Dark Mode has been enabled", "success");
    }
  }

   
    return (

        <>
        {/* <Main> */}

          <Navbar mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <TextForm heading="Enter the text you want to analyze" mode={mode} showAlert={showAlert}/>
          {/* <Routes>
            <Route exact path='/' element={<TextForm heading="Enter the text you want to analyze" mode={mode} showAlert={showAlert}/>}/> 
            <Route exact path='/about' element={<About/>}/>  
            
          </Routes>
          
        </Main> */}
        </>
    );
  
  }




