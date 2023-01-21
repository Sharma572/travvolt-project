
// import './App.css';
import Dashboard from './Pages/Dashboard/Component/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Active from './Pages/Activities/Active';
import MainPage from './UI/MainPage';
import { useSelector } from 'react-redux';
import { useState } from 'react';


function App() {
   const reducerState = useSelector((state) => state);
   // const [state, setState] = useState([]);
   // setState([...state, reducerState.logIn.token.data.data.id ])
 
   
  return (
   <>
<MainPage />
{/* <Dashboard /> */}
</>
   );
}
/*
 <div className="App">
 <MainPage />
 </div>*/
export default App;
