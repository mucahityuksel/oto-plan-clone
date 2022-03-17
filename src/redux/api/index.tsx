import axios from "axios";

import { call, put } from "@redux-saga/core/effects";
import { ApiCallback } from "../types/saga";

export interface SagaGenericParams<Type> {
    type: string;
    payload: ApiCallback<Type>;
    url:string
  }
  
export function getData (url:string){
    return axios.get(url)
}
  export function* getFromApi<Type>({payload,url}:SagaGenericParams<Type>):any{
     try {
         const res  = yield call(getData,url)
         console.log(res)
         payload.onSuccess(res.data.Message,res.data.Result)
     } catch (error) {
         
     }
  }