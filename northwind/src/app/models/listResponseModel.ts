import { ResponseModel } from "./responeModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
    
}