import React, { Dispatch, useEffect, useState } from 'react'
import CoinBanner from './CoinBanner'
import { useDispatch, useSelector } from 'react-redux';
import { Coins, Stocks } from '../dataTypes';
import { setCoinActions, getCoinActions } from '../redux/actions/coinActions';
import { AppStore } from '../redux/store';
import { getStockActions, setStockActions } from '../redux/actions/stockActions';
import StockmodelPage from './StockmodelPage';
import { Link } from 'react-router-dom';

type Props = {}

function StockList({}: Props) {
  const dispatch:Dispatch<any> =useDispatch();
  const [data,setData]=useState<Coins[]>()
  const [model,setModel]=useState<boolean>(false)
  const [id,setId]=useState<string>('');
  const val=useSelector<AppStore,number>(state=>state.val)
  const stocks=useSelector<AppStore,Stocks[]>(state=>state.stocks)
  const fetchData=async()=>{
    dispatch(await setStockActions)
    dispatch(await getStockActions(JSON.parse(localStorage.getItem('stocks') || "{}")))
  }
useEffect(()=>{
 fetchData()
},[val])
console.log(stocks);
const showCard=async(id:string)=>{
  setId(id)
  setModel(true)
}
  return (
    <div>
        <CoinBanner/>
        <div className='flex justify-start'>
        <Link id='coin' className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/'>Crypto</Link>
        <Link className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/stocks/list'>Stocks</Link>
        </div>
        <div className="table w-full ... ">
        <div className="table-header-group ...">
          <div className="bg-gray-600 table-row text-2xl font-bold ">
            <div className="table-cell text-center ... p-4">S.No</div>
            <div className="table-cell text-center ...">Code</div>
            <div className="table-cell text-center ...">Price</div>
            <div className="table-cell text-center ...">Volume</div>
          </div>
        </div>
        {/* <div className={showModal}></div> */}

        {stocks.map((stock:Stocks,index:number=0)=>{
          return(<>
          <hr/>
          {model ? (<><StockmodelPage id={id} rate={stock.depth} setModel={setModel}/></>):''}

            <div id={stock.code} onClick={() => showCard(`${stock.code}`)} key={index} className="tbody table-row ... p-5 m-5 bg-gray-800">
              <div className="table-cell ... p-7">{index+1}</div>
              <div className="table-cell ... code">{stock.code}</div>
              <div className="table-cell ...">{Math.ceil(stock.depth)}</div>
              <div className="table-cell ...">{stock.volume}</div>
              
            </div>
            </>)
        })}
    
      </div>
    </div>
  )
}

export default StockList