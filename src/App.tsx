import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import { Button } from '@mui/material';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { fetchLiveData} from './services/apiServices';
import { Coins } from './dataTypes';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from './redux/store';
import { Dispatch } from 'redux';
import { getCoinActions, setCoinActions } from './redux/actions/coinActions';
import { getcoinsApi } from './config/api';


const App=()=> {
  const coins=useSelector<AppStore,Coins[]>(state=>state.coins)
  const dispatch:Dispatch<any> =useDispatch();
  const [data,setData]=useState<Coins[]>()
  useEffect(() => {
      const interval = setInterval( () => {
     fetchLiveData().then(()=>dispatch(getCoinActions))
      }, 2000); // Reloads the page every 2 seconds
       return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
  // useEffect(()=>{
  //    axios.get(getcoinsApi).then((res)=>{
  //    console.log(res.data);
     
  // })

  // },[])
      // useEffect(() => {
      //   const interval = setInterval(async() => {
      //  if(JSON.parse(localStorage.getItem('coins') || "{}") ){
      //   dispatch(getCoinActions)
      //  }
      //   }, 2000); // Reloads the page every 2 seconds
      //    return () => clearInterval(interval); // Cleanup the interval on component unmount
      //   }, []);
      console.log(coins);
      
  return (
    <div className='App'>
      <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
