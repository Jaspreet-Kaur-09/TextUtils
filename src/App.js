import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  const[mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    //kb tk rhega 1sec tk
    setTimeout(()=>{
      setAlert(null);
    },1000)

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode enabled","success");

      //set title of document
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000); //hr 2 sec p
      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // },1500);

      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
    }

  }


  return (
    <>
    <Router>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}></Alert>
   <div className="container my-3">
   <Routes>
    <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
    <Route exact path="/about" element={<About></About>}/>
   </Routes>

   </div>
   
</Router>

    </>
  );
}

export default App;



//note********** test utils apllication 
//*** insude function app()  everything that writeen is a JSX -> its a html with some changes  */
 // 1. inside return -> its return only one element  therefore use -> <> </> to return more element
 // 2.  <h1>Hello {name} </h1>   -> in curly bracket its considered as jvavascript
 //3. tags should be closing which are by default are not closing tags made tyhem closing each and every  like made tags like that :<hr/>,<img />


//note2*** props
 //title=textutils is passed as a props to the navbar
 //aboutText is passed as props to navbar component as About TextUtils


//note3**** 
//<div className="container">
//<TextForm/>
// </div>
//by adding textform in div container as container is a bootstrap class as we used bootstrap text area 
//it will center the text area by adding css 
// here my-3 used to add margin in y-axis


//note4***
//exact path is used for exact matching like if path="/user/home" ans other path="/user" react give /user/home 
//instead of /user which will be provides in case of path (instead of exact path)i.e partial matching
