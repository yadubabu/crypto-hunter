import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CoinHistory, Coins, SingleCoin } from '../dataTypes';
import { fetchSingleData, fetchSingleStock } from '../services/apiServices';
import './style.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaFile } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaRedditAlien } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
type Props = {
    id:string;
    setModel: Dispatch<SetStateAction<boolean>>;
   rate:number
}

function StockmodelPage({id,setModel,rate}: Props) {
    const [data,setData]=useState<SingleCoin|any>()
    const fetchSingle=async()=>{
        setData(await fetchSingleStock(id))
               
    }
const val=useSelector<AppStore>(state=>state.val)   
    useEffect(()=>{
      fetchSingle()
    },[id,val])
     
  return (
    <div className='model flex flex-col'>
        <div>
        <div className='flex justify-between'>
            <span className={`text-3xl font-extrabold text-${data?.color}-700`}>{data?.name}</span>
          
            <button className='cross text-gray-400 mx-2' onClick={()=>setModel(false)}>X</button>
        </div>
                
        </div>
        <div className='info flex flex-col w-full max-h-full'>
        <p style={{color:`${data?.color}`}} className='text-2xl font-bold'>{data?.name}</p>
        <p className='text-2xl text-white'>{data?.depth.toFixed(3)}</p>
        </div>
        <hr/>
        {data && (
          <div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
              <label className='mx-1'>AskTotal:</label>
              <p className='mx-1'>{data.askTotal.toFixed(2)}</p>
            </div>
            <div className='flex p-3'>
              <label className='mx-1'>BidTotal:</label>
              <p className='mx-1'>{data.bidTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
              <label className='mx-1'>Depth:</label>
              <p className='mx-1'>{data.depth.toFixed(2)}</p>
            </div>
            <div className='flex p-3'>
              <label className='mx-1'>Markets:</label>
              <p className='mx-1'>{data.markets}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
                <label className='mx-1'>Volume:</label>
                <p className='mx-1'>{data.volume.toFixed(2)}</p>
            </div>
           
            <div className='flex p-3'>
              <label className='mx-1'>Visitors :</label>
              <p className='mx-1'>{data.visitors}</p>
            </div>
          </div>
        
          <hr/>
            {/* <div className='flex justify-center  cursor-pointer m-2 p-2 '>
                  <a href={data.links.discord} className='-mt-1'>
                      <span className='mx-2 hover:text-red-600'>{data.symbol}</span>
                  </a>
                  <a href={data.links.whitepaper}>
                      <FaFile className='mx-2 hover:text-red-600'/>
                  </a>
                  <a href={data.links.website}>
                      <TbWorldWww className='mx-2 hover:text-red-600'/>   
                  </a>
                  
                  <a href={data.links.reddit}>
                  <FaRedditAlien className='mx-2 hover:text-red-600'/>
                  </a>
                  <a href='#'>
                  <FaFacebookF className='mx-2 hover:text-red-600'/>   
                  </a>
                  <a href='#'>
                  <FaDiscord className='mx-2 hover:text-red-600'/>   
                  </a>
                  <a href='#'>
                  <FaGithub className='mx-2 hover:text-red-600'/>
                  </a>
            </div>         */}
          </div>
        )}
    </div>
  )
  
}

export default StockmodelPage