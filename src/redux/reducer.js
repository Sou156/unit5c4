import {GET_DATA_ERROR, GET_DATA_LOADING,GET_DATA_SUCCESS} from "./actionTypes"

const init= {
  data:{
    loading:false,
    result:[],
    error:false
  }
}
export const reducer= (store=init,{type,payload})=>{
  switch(type){
    case GET_DATA_LOADING:
      return ({...store,data:{
        ...store.data,loading:true
      }})
      case GET_DATA_SUCCESS:
        return ({...store,data:{
          ...store.data,loading:false,
          result:payload
        }})
        case GET_DATA_ERROR:
          return({...store,data:{
            ...store.data,error:false
          }})
          default:
            return store
  }
}