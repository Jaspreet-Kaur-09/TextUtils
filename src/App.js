import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';



function App() {
  return (
    <>
   <Navbar title="TextUtils" aboutText="About TextUtils"/>
   <div className="container my-3">
   {/* <TextForm heading="Enter the text to analyze"/> */}
   <About></About>
   </div>
   


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