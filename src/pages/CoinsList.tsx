import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Coins } from '../dataTypes'
import { AppStore } from '../redux/store'
import { setCoinActions, getCoinActions } from '../redux/actions/coinActions'
import { Dispatch } from 'redux';
import {fetchSingleData} from '../services/apiServices';

import ModelPage from './ModelPage'
import { Link } from 'react-router-dom'

type Props = {}

const CoinsList = (props: Props) => {
  const dispatch:Dispatch<any> =useDispatch();
  const [data,setData]=useState<Coins[]>()
  const [model,setModel]=useState<boolean>(false)
  const [id,setId]=useState<string>('');
  const val=useSelector<AppStore,number>(state=>state.val)
  const coins=useSelector<AppStore,Coins[]>(state=>state.coins)
  const fetchData=async()=>{
    dispatch(await setCoinActions)
    dispatch(await getCoinActions(JSON.parse(localStorage.getItem('coins') || "{}")))
  }
useEffect(()=>{
 fetchData()
},[val])
const showCard=async(id:string)=>{
  setId(id)
  setModel(true)
}
  return (
    <div> 
      <div className='bg-gray-900  rounded-md shadow-xl text-center  pt-5 font-semibold'>
        <div className='flex justify-start'>
        <Link id='coin' className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/'>Crypto</Link>
        <Link className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/stocks'>Stocks</Link>
      </div>
      <hr/>
      <div className="table w-full ... ">
        <div className="table-header-group ...">
          <div className="bg-gray-600 table-row text-2xl font-bold ">
            <div className="table-cell text-center ... p-4">S.No</div>
            <div className="table-cell text-center ...">Code</div>
            <div className="table-cell text-center ..."></div>
            <div className="table-cell text-center ...">Price</div>
            <div className="table-cell text-center ...">Volume</div>
          </div>
        </div>
        {/* <div className={showModal}></div> */}

        {coins !== null && coins.slice(0,20).map((coin:Coins,index:number=0)=>{
          return(<>
          <hr/>
          {model ? (<><ModelPage id={id} setModel={setModel}/></>):''}

            <div id={coin.code} onClick={() => showCard(`${coin.code}`)} key={index} className="tbody table-row ... p-5 m-5 bg-gray-800">
              <div className="table-cell ... p-7">{index+1}</div>
              <div className="table-cell ... code">{coin.code}</div>
              <div className="table-cell ..."><img className='w-1/5 -my-4 ' src={require(`../assets/${coin.code.toLowerCase()}.webp`)} alt=''/></div>
              <div className="table-cell ...">{Math.ceil(coin.rate)}</div>
              <div className="table-cell ...">{coin.volume}</div>
              
            </div>
            </>)
        })}
    
      </div>
    </div>
    
  


    </div>
  )
}

export default CoinsList




