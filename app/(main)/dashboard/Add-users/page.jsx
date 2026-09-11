import { FetchAllUserActions } from "@/app/Actions";
import AddUserPage from "./component/AddUser";

export default async function AddUser(){
  const FetchAllUser = await FetchAllUserActions()
   
    return(
     <div className="p-10 h-screen">
        
       <AddUserPage FetchAllUser={FetchAllUser}/>
     </div>
    )
  
}