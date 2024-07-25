import axios from "axios";
import { Coins } from "../../dataTypes";
import { Types } from "../enums/consonants";
import { addcoinsApi, getcoinsApi } from "../../config/api";


export const setCoinActions=async()=>{
    const data=JSON.parse(localStorage.getItem('coins') || "{}")
    // console.log(data);
    
    await axios.post(addcoinsApi,{data}).then(()=>{
        return{
            type:Types.SET_COINS,
         
        }
    })
    
    
}

export const getCoinActions=async()=>{
    const data=JSON.parse(localStorage.getItem('coins') || "{}")
    // console.log(data);
    
    await axios.post(addcoinsApi,{data}).then(async()=>{
            axios.get(getcoinsApi).then((res)=>{
            console.log(res.data);
            
         })
       
    })
    //  const data=JSON.parse(localStorage.getItem('coins') || "{}")
        // await axios.get('http://localhost:5000/coins/getcoins').then(async(res)=>{
        //     // console.log(res.data);
            
        //     return{
        //         type:Types.GET_COINS,
        //         payload:await res.data
        //     }
        // })
     }

    
   

