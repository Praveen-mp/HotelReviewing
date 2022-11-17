import { type } from '@testing-library/user-event/dist/type';
import { baseUrl } from '../shared/baseUrl';
import { DISHES } from '../shared/dishes';
import * as ActionType from './ActionType'
import { Comments } from './comments';
export const addComment=(comment)=>({
    type:ActionType.ADD_COMMENT,
    payload:{
      
        comment:comment
    }
})
export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{
    const newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date= new Date().toISOString()
    return fetch(baseUrl+ 'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error'+response.status +':'+response.statusText)
            error.response=response;
            throw error;
        }
      },
      error=>{
        var errmess=new Error(error.message)
        throw errmess;
      })
      .then(response=>response.json())
      .then(response=> dispatch(addComment(response)))
      .catch(error=>{console.log("post comments",error.message);
    alert("your comment could not be posted\nError:",error.message)})
}
// thunk start


export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {
                
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            ////if no responmse from server 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .catch(error => {
            console.log('Post Comments', error.message);
            alert('Comment could not be posted\nError' + error.message);
        });

}







export const fetchLeaders = () => (dispatch) => {

    dispatch( leadersLoading() );

    return fetch( baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        ////if no responmse from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then( leaders => dispatch( addLeaders(leaders) ) ) 
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
});



export const fetchDishes=()=>(dispatch)=>{  
    dispatch(dishesLoading(true));
      return fetch(baseUrl+'dishes')
      .then(response=>{
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error '+response.status +':'+response.statusText)
            error.response=response;
            throw error;
        }
      },
      error=>{
        var errmess=new Error(error.message)
        throw errmess;
      })
       .then(response=>response.json())
       .then(dishes=> dispatch(addDishes(dishes)))
       .catch(error=>dispatch(dishesFailed(error.message)))
}
export const dishesLoading=()=>({
    type:ActionType.DISHES_LOADING
})
export const dishesFailed=(errmess)=>({
    type:ActionType.DISHES_FAILED,
    payload:errmess
})
export const addDishes=(dishes)=>({
    type:ActionType.ADD_DISHES,
    payload:dishes
})
export const fetchPromos=()=>(dispatch)=>{  
     dispatch(promosLoading(true));
       return fetch(baseUrl+'promotions')
       .then(response=>{
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error'+response.status +':'+response.statusText)
            error.response=response;
            throw error;
        }
      },
      error=>{
        var errmess=new Error(error.message)
        throw errmess;
      })
        .then(response=>response.json())
        .then(promos=> dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error.message)))
}
export const promosLoading=(errmess)=>({
    type:ActionType.PROMOS_LOADING,
    payload: errmess
})
export const promosFailed=(errmess)=>({
    type:ActionType.PROMOS_FAILED,
    payload:errmess
})
export const addPromos=(promos)=>({
    type:ActionType.ADD_PROMOS,
    payload:promos
})
export const fetchComments=()=>(dispatch)=>{  
   
    return fetch(baseUrl+'comments')
    .then(response=>{
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error'+response.status +':'+response.statusText)
            error.response=response;
            throw error;
        }
      },
      error=>{
        var errmess=new Error(error.message)
        throw errmess;
      })
     .then(response=>response.json())
     .then(comment=> dispatch(addComments(comment)))
     .catch(error=>dispatch(commentsFailed(error.message)))
}
//thunk end
export const commentsFailed=(errmess)=>({
    type:ActionType.COMMENTS_FAILED,
    payload: errmess
})
export const addComments=(comments)=>({
    type:ActionType.ADD_COMMENTS,
    payload:comments
})
