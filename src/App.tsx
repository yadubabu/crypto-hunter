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
import { addcoinsApi, getcoinsApi } from './config/api';
import { coinDepend } from './redux/actions/coinActions';
import CoinsList from './pages/CoinsList';

const App=()=> {
  const val=useSelector<AppStore,number>(state=>state.val)
  const coins=useSelector<AppStore,Coins[]>(state=>state.coins)

  const dispatch:Dispatch<any> =useDispatch();
  const [data,setData]=useState<Coins[] >([])
  useEffect(() => {
      const interval = setInterval(async() => {
        localStorage.removeItem('coins');
        localStorage.setItem('coins',JSON.stringify(await fetchLiveData()))
      
        dispatch(coinDepend(JSON.parse(localStorage.getItem('coins') || "{}")[0].rate));
      
      }, 2000); // Reloads the page every 2 seconds
       return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
      
      
  return (
    <div className='App'>
      <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coins/list' element={<CoinsList/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
