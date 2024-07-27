import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CoinHistory, Coins, SingleCoin } from '../dataTypes';
import { fetchSingleData } from '../services/apiServices';
import './style.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaFile } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { TbHexagonLetterXFilled } from "react-icons/tb";
import { FaRedditAlien } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
    id:string;
    setModel: Dispatch<SetStateAction<boolean>>;
   rate:number
}
type Time={
  start:number,
  end:number
}

function ModelPage({id,setModel,rate}: Props) {
    const [data,setData]=useState<SingleCoin|any>()
    const [key,setKey]=useState(1)
    const [time,setTime]=useState<Time>({
      start:Math.floor(new Date().getTime() - (key*24*60*60*1000)),
      end:Math.floor(new Date().getTime())
    })
    const [getDate,setGetDate]=useState<Date|any>([])
    const fetchSingle=async()=>{
        setData(await fetchSingleData(id, time.start, time.end))
            setGetDate( await data?.history.map((coin:CoinHistory,index:number)=>{
              let date = new Date(coin.date);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return key === 1 ? time : date.toLocaleDateString();
              
            })
          )         
    }
   console.log(data);
   
    useEffect(()=>{
      fetchSingle()
    },[id])
     
  return (
    <div className='model flex flex-col'>
        <div>
        <div className='flex justify-between'>
            <span className={`text-3xl font-extrabold text-${data?.color}-700`}>{data?.code}</span>
           
            <button className='cross text-gray-400 mx-2' onClick={()=>setModel(false)}>X</button>
        </div>
        <div>
          <Line data = {{labels: getDate,
          datasets: [
            {
              label: `${key===1 ? '24 Hours' : key} Data`,
              data: data?.history.map((coin:CoinHistory)=>coin.rate),
              fill: true,
              backgroundColor: 'white',
              borderColor: 'red',
            },
                  ],}}

  options = {{  
    elements:{
      point:{
        radius:1,
      }
    },
    scales: {
      x: {
        suggestedMax: 1100,
         ticks:{
            color:'green',
            font:{
            size:12,
            weight:'bold',
                 },
                 
                }
      },
      y: {
         ticks:{
            color:'green',
            font:{
            size:12,
            weight:'bold',
                 },
                 
                }
      }
  },
    responsive: true,
    plugins: {
      
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${id} Prices`,
        font:{
          size:18,
          weight:'bold',
        }
      },
 
      
    },
   
    }}/>
        
        </div>
        <div className='flex justify-evenly '>
            <button className='p-3 m-3 text-black btn border-gray-100 bg-white' onClick={()=>{
                              setKey(1)

                const start=Math.floor(new Date().getTime() - (key*24*60*60*1000))
                const end=Math.floor(new Date().getTime() )
                setTime({start,end})
                fetchSingle()
            }}>24 Hour</button>
            <button onClick={()=>{
                              setKey(7)

                const start=Math.floor(new Date().getTime() - (key*24*60*60*1000))
                const end=Math.floor(new Date().getTime() )
                setTime({start,end})
                fetchSingle()
            }}>Week</button>
            <button onClick={()=>{
                              setKey(30)

                const start=Math.floor(new Date().getTime() - (key*24*60*60*1000))
                const end=Math.floor(new Date().getTime() )
                setTime({start,end})
                fetchSingle()
            }}>Month</button>
            <button onClick={()=>{
                              setKey(90)

                const start=Math.floor(new Date().getTime() - (key*24*60*60*1000))
                const end=Math.floor(new Date().getTime() )
                setTime({start,end})
                fetchSingle()
            }}>Quarter</button>
            <button onClick={()=>{
                              setKey(365)

                const start=Math.floor(new Date().getTime() - (key*24*60*60*1000))
                const end=Math.floor(new Date().getTime() )
                setTime({start,end})
                fetchSingle()
            }}>Year</button>
        </div> 
        </div>
        <hr/>
        <div className='info flex flex-col w-full max-h-full'>
        <img className='logo' src={require(`../assets/${id.toLowerCase()}.webp`)} alt=''/>
        <p style={{color:`${data?.color}`}} className='text-4xl font-bold'>{data?.name}</p>
        <p className='text-2xl text-white'>{rate.toFixed(3)}</p>
        </div>
        <hr/>
        {data && (
          <div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
              <label className='mx-1'>Age:</label>
              <p className='mx-1'>{data.age}</p>
            </div>
            <div className='flex p-3'>
              <label className='mx-1'>Rank:</label>
              <p className='mx-1'>{data.rank}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
              <label className='mx-1'>Exchanges:</label>
              <p className='mx-1'>{data.exchanges}</p>
            </div>
            <div className='flex p-3'>
              <label className='mx-1'>Markets:</label>
              <p className='mx-1'>{data.markets}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex p-3'>
                <label className='mx-1'>CirculatingSupply:</label>
                <p className='mx-1'>{data.circulatingSupply}</p>
            </div>
           
            <div className='flex p-3'>
              <label className='mx-1'>TotalSupply :</label>
              <p className='mx-1'>{data.totalSupply}</p>
            </div>
          </div>
        
          <hr/>
            <div className='flex justify-center  cursor-pointer m-2 p-2 '>
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
            </div>        
          </div>
        )}
    </div>
  )
}

export default ModelPage