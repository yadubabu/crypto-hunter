import React, { useState } from 'react'
import './style.css';
import Carousel from 'react-material-ui-carousel'
import { useSelector } from 'react-redux';
import { Coins } from '../dataTypes';
import { AppStore } from '../redux/store';
import AliceCarousel from 'react-alice-carousel';
import ModelPage from './ModelPage';


type Props = {}

function CoinBanner({}: Props) {
  const coins=useSelector<AppStore,Coins[]>(state=>state.coins)
  const [model,setModel]=useState<boolean>(false);
  const [rate,setRate]=useState(0);

  const [id,setId]=useState<string>('');
  const showCard=async(id:string,rate:number)=>{
    setId(id)
    setModel(true)
    setRate(rate)
  }
  // style={model ? {zIndex:99}:{}}
  return (
    <div className='banner w-full flex'>
      {model ? (<><ModelPage id={id} rate={rate} setModel={setModel}/></>):''}
      {/* {coins && coins?.map(coin=>{
        return(
        <div  id={coin.code} onClick={() => showCard(coin.code,coin.rate)} className='w3-animate-top	slide-logo flex flex-col m-5 text-gray-200 text-center font-bold'>
            <img className='imag' src={require(`../assets/${coin.code.toLowerCase()}.webp`)} alt=''/>
            <div>{coin.code}</div>
            <div>{coin.rate.toFixed(2)}</div>
        </div>
        )
      })} */}

    </div>
  )
}


export default CoinBanner