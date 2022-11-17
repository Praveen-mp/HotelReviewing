import { actionTypes } from 'react-redux-form';
import * as ActionType from './ActionType'
export const Comments = (state={
    errmess:null,
    comments:[]
},action)=>{
    
    switch(action.type){
        case ActionType.ADD_COMMENTS:
            return {...state,isLoading:false,errMess:null,comments:action.payload}
        case ActionType.COMMENTS_FAILED:    
            return {...state,isLoading:false,errMess:action.payload,comments:[]}
        case ActionType.ADD_COMMENT:
            var comment=action.payload
            // comment.id=state.comments.length;
            return {...state,comments:state.comments.concat(comment)};
        default:
            return state;
    }
}