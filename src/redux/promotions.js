import {PROMOTIONS} from '../shared/promotions';
import * as ActionType from './ActionType'
export const Promotions = (state= 
    {isLoading:true,
        errmes:null,
        promotions:[]
    },action)=>{
    switch(action.type){
        case ActionType.ADD_PROMOS:
            return {...state,isLoading:false, errMess:null,promotions:action.payload}
        case ActionType.PROMOS_FAILED:
            return {...state,isLoading:false, errMess:action.payload,promotions:[]}
        case ActionType.PROMOS_LOADING:
            return {...state,isLoading:true, errMess:null,promotions:[]}
        default:
            return state;
    }
}