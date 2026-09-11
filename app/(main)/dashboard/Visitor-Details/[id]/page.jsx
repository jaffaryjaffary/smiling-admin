import { FetchUserInfoActions, FetchVisitorContactByIdActions } from "@/app/Actions";
import ViewPage from "./components/View";

export default async function Details({params}) {
    const {id} = await params
    const currentUser = await FetchUserInfoActions()

    const FetchVisitoById = await FetchVisitorContactByIdActions(id)
    console.log(FetchVisitoById)
    return(
        <div className="h-screen p-10">
         <ViewPage FetchVisitoById={FetchVisitoById}  currentUser={ currentUser}/>
        </div>
    )
    
}