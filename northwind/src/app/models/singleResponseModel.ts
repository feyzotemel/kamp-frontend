import { ResponseModel } from "./responeModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T;

}