import { Stocks } from "../../dataTypes"
import { Types } from "../enums/consonants"

const initialValue={
    stocks:[
        {
        name: '4swap',
        depth:1,
        volume:1,
        markets:1,
        askTotal:1,
        bidTotal:1,
        code:'gemini',
        png64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.png',
        png128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.png',
        webp64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.webp',
        webp128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.webp'
    },
]
}
    


export interface StockState{
    type:string,
    payload:Stocks[]
}

const stockReduser=(state=initialValue,action:StockState)=>{
    
    switch(action.type){
        case Types.SET_STOCKS:
            return 1;
        case Types.GET_STOCKS:
            return [...action.payload]
        default:
            return state;
    }
   
}
export default stockReduser;