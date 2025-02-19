import axios from 'axios';
import {addcoinsApi, coinSingle, cryptoUrl, getcoinsApi} from '../config/api';
import { apiKey } from '../config/api';
import { Coins } from '../dataTypes';
import { Types } from '../redux/enums/consonants';
import { Dispatch } from 'redux';

export const fetchLiveData= async()=>{
    const liveData=await fetch(new Request(`${cryptoUrl}/coins/list`), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": apiKey,
      }),
      body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 20,
        meta: false,
      }),
    }).then(async(res)=>(await res.json()))
    .catch(err=>console.log(err));
    
    return liveData;
 
  }

  export const fetchSingleData=async(id:string,start:number,end:number)=>{
  
    const single=await fetch(new Request(coinSingle), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": apiKey,
      }),
      body: JSON.stringify({
        currency: "USD",
        code: id,
        start: start,
        end: end,
        meta: true,
      }),
    }).then((res)=>res.json()).catch(err=>console.log(err))
    
    return await single;
    
  }

  export const fetchSingleStock=async(id:string)=>{
  
    const single=await fetch(new Request("https://api.livecoinwatch.com/exchanges/single"), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": apiKey,
      }),
      body: JSON.stringify({
        currency: "ETH",
        code: id,
        meta: true,
      }),
    }).then((res)=>res.json().catch(err=>console.log(err)));
    
    
    return await single;
    
  }
 
  export const getStocks=async()=>{
    const stockData=await fetch(new Request(`${cryptoUrl}/exchanges/list`), {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
        'x-api-key': apiKey
      }),
      body: JSON.stringify({
        currency: 'USD',
        // sort: 'visitors',
        order: 'descending',
        offset: 0,
        limit: 5,
        meta: true
      })
    }).then((res)=>res.json()).catch(err=>console.log(err))

    return stockData;
  }