import axios from "axios";
import { Coins } from "../../dataTypes";
import { Types } from "../enums/consonants";
import { addcoinsApi, addstockApi, getcoinsApi } from "../../config/api";




export const setStockActions=async()=>{
    const data=JSON.parse(localStorage.getItem('stocks') || "{}")
        await axios.post(addstockApi,{data}).then(()=>{
            return {
                type:Types.SET_STOCKS,
                payload:'success'
            }
        })
  
    }
    
    export const getStockActions=async(data:Coins)=>{
        // await axios.get(getcoinsApi).then(async(res)=>{
            return {
                type:Types.GET_STOCKS,
                payload:data
            }
        
        }
   
     

    
   

