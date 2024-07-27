import axios from "axios";
import { Coins } from "../../dataTypes";
import { Types } from "../enums/consonants";
import { addcoinsApi, getcoinsApi } from "../../config/api";


export const coinDepend=(val:number)=>{
    return {
        type:Types.SET_DEPEND,
        payload:val
    }
}

export const setCoinActions=async()=>{
    const data=JSON.parse(localStorage.getItem('coins') || "{}")
        await axios.post(addcoinsApi,{data}).then(()=>{
            return {
                type:Types.SET_COINS,
                payload:'success'
            }
        })
    // if(data){
    //     await axios.post(addcoinsApi,{data}).then(()=>{
    //         return{
    //             type:Types.SET_COINS,
    //             payload:JSON.parse(localStorage.getItem('coins') || "{}")
    //         }
    //     })
    // }
    }
    
    export const getCoinActions=async(data:Coins)=>{
        // await axios.get(getcoinsApi).then(async(res)=>{
            return {
                type:Types.GET_COINS,
                payload:data
            }
        
        }
    //  const data=JSON.parse(localStorage.getItem('coins') || "{}")
        // await axios.get('http://localhost:5000/coins/getcoins').then(async(res)=>{
        //     // console.log(res.data);
            
        //     return{
        //         type:Types.GET_COINS,
        //         payload:await res.data
        //     }
        // })
     

    
   

