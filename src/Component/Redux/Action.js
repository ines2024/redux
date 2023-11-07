import { Add, Delete, Edit } from "./Actiontype"

export const Addmovie=(data)=>{
return {type:Add,payload:data}


}
export const Deletemovie=(id)=>{


    return {type:Delete,payload:id}
    }
export const Updatemovie=(id,data)=>{
    return {type:Edit,payload:{id,data}}
}