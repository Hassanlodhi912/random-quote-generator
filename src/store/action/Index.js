import { ActionTypes} from "../constant/Action-Types"

export const setQuotes =(quotes)=>{
    return {
        type:ActionTypes.SET_QUOTES,
        payload:quotes
    }
}
export const nextQuotes =()=>{
    return {
        type:ActionTypes.NEXT_QUOTES
    }
}