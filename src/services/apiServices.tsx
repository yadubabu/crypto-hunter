import axios from 'axios';
import {addcoinsApi, cryptoUrl, getcoinsApi} from '../config/api';
import { apiKey } from '../config/api';
import { Coins } from '../dataTypes';
import { Types } from '../redux/enums/consonants';
import { Dispatch } from 'redux';

export const fetchLiveData= async()=>{
    const liveData=await fetch(new Request(cryptoUrl), {
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
    localStorage.removeItem('coins')
    localStorage.setItem('coins',JSON.stringify(liveData))
   
  }

 
    // alert('hai')
    // await axios.get(getcoinsApi).then((res)=>{
    //     // console.log(res.data);
        
    //     return async(dispatch: Dispatch) =>{
    //         dispatch(coinActions(await res.data))
    //     }
    // })
  