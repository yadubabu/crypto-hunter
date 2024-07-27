import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CoinHistory, Coins, SingleCoin } from '../dataTypes';
import { fetchSingleData } from '../services/apiServices';
import './style.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
import { win32 } from 'path/win32';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
    id:string;
    setModel: Dispatch<SetStateAction<boolean>>;
   
}
type Time={
  start:number,
  end:number
}

function ModelPage({id,setModel}: Props) {
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
    console.log(data?.history);
    
    useEffect(()=>{
      fetchSingle()
    },[id])
     
  return (
    <div className='model flex flex-col'>
        <div>
        <div className='flex justify-between'>
            <span className='text-3xl font-extrabold'>{id}</span>
            <button onClick={()=>setModel(false)}>X</button>
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
        text: `${id} Info`,
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
        <div>
            Coin Info
        </div>
    </div>
  )
}

export default ModelPage