import { Coins } from "../../dataTypes"
import { Types } from "../enums/consonants"

const initialValue={
    coins:[
        {
            cap:1,
            code:'BTC',
            volume:1,
            rate:1,
            delta:{
                hour:1,
                day:1,
                week:1,
                month:1,
                quarter:1,
                year:1
            }
        }
    ]
}

export interface CoinAction{
    type:string,
    payload:Coins[]
}

const coinReduser=(state=initialValue,action:CoinAction)=>{
    
    switch(action.type){
        case Types.SET_COINS:
            return 1;
        case Types.GET_COINS:
            return [...action.payload]
        default:
            return state;
    }
    // if(action.type===Types.SET_DEPEND){
    //     return action.payload
    // }
    // else if(action.type===Types.SET_COINS){
    //      return action.payload
    //      }
    // else {
    //     return state
    // }
    // if(action.type===Types.SET_COINS){
    //     return action.payload
    // }
    // else
    //  if(action.type===Types.GET_COINS){
    //     return [...action.payload]
    // }
    // else{
    //     return state;
    // }
    // switch(action.type){
    //     case Types.SET_COINS:
    //         return state;
    //     case Types.GET_COINS:
    //         return [...action.payload];
    //     default:
    //         return state;
    // }
    // if(action.type===Types.GET_COINS){
    //     return [...action.payload]
    // }
    // else{
    //     return state;
    // }
}
export default coinReduser;