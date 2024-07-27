import { Types } from "../enums/consonants"

const initialValue={
    val:1
}

export interface CoinAction{
    type:string,
    payload:number
}

const coinDepenReducer=(state=initialValue,action:CoinAction)=>{
  if(action.type===Types.SET_DEPEND){
    return action.payload
  }
  else{
    return state
  }
}
export default coinDepenReducer;