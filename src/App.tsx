import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { fetchLiveData, getStocks} from './services/apiServices';
import { Coins } from './dataTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from './redux/store';
import { Dispatch } from 'redux';
import { coinDepend } from './redux/actions/coinActions';
import CoinsList from './pages/CoinsList';
import StockList from './pages/StockList';

const App=()=> {
  const dispatch:Dispatch<any> =useDispatch();
  useEffect(() => {
      const interval = setInterval(async() => {
        localStorage.removeItem('coins');
        localStorage.setItem('coins',JSON.stringify(await fetchLiveData()))
        dispatch(coinDepend(JSON.parse(localStorage.getItem('coins') || "{}")[0].rate));
      
      }, 2000); // Reloads the page every 2 seconds
       return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
      useEffect(() => {
        const interval = setInterval(async() => {
          localStorage.removeItem('stocks');
          localStorage.setItem('stocks',JSON.stringify(await getStocks()))
        
   
        }, 2000); // Reloads the page every 2 seconds
         return () => clearInterval(interval); // Cleanup the interval on component unmount
        }, []);  
      // useEffect(()=>{
      //   getStocks()
      // },[])
  return (
    <div className='App'>
      <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coins/list' element={<CoinsList/>}/>
        <Route path='/stocks/list' element={<StockList/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
