import { Product } from "./product";
import { ResponseModel } from "./responeModel";

export interface ProductResponseModel extends ResponseModel{
    data:Product[]
    
}