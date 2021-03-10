import { Category } from "./category";
import { ResponseModel } from "./responeModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
    
}