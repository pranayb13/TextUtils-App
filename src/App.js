import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// let name ="Pranay";
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light'); //Wether Dark mode is enabled or not.
  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  // const toggleMode=(mode)=>{
    // if(mode==='red'){
    //   setMode(mode)
    //   document.body.style.backgroundColor='black';
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor='black';
    // }
    // if(mode==="light"){
    //   setMode('dark');
    //   document.body.style.backgroundColor='black';
    //   showAlert("Dark mode has been enabled",'success');
    //   // document.title ='TextUtils - Dark Mode'; //To change the title dynamically.
    //   // setInterval(() => {
    //   //   document.title ='TextUtils is Amazing';
    //   // }, 2000);
    //   // setInterval(() => {
    //   //   document.title ='Install TextUtils Now';
    //   // }, 1500);
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor='white';
    //   showAlert("Light mode has been enabled",'success');
    //   // document.title ='TextUtils - Light Mode'; //To change the title dynamically.
    // }
  // }
  const changeMode=(mode)=>{
    setMode(mode)
    if(mode==='red'||'blue'||'green'||'yellow'){
      document.body.style.backgroundColor='black';
    }

  }
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" aboutText="About " mode={mode} changeMode={changeMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
            {/* /users --> Component 1
            /users/home --> Component 2 */}
            <Route exact path="/About">
              <About mode={mode} changeMode={changeMode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , character counter , verify emails" mode={mode}/>
            </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;