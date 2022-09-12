import { ActionTypes } from "../constant/Action-Types";
const initialState = {
    list:[
        
    ]

}

export const quotesReducer = (state=initialState , {type, payload}) =>{
    switch (type){
        case ActionTypes.SET_QUOTES:
            return{
                ...state,
                list : payload
            };
            default :
            return state;
    }
}