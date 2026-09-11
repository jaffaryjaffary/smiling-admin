import { FetchAllDestinationActions, FetchUserInfoActions } from "@/app/Actions";
import VisitorForm from "./component/VisitorForm";

export default async function AddVisitor(){

    const FetchAllDestination = await FetchAllDestinationActions()
    const currentUser = await FetchUserInfoActions()
    return(
        <div className="p-10 h-screen">
            <h1 className="text-2xl font-bold text-gray-400">Add New Visitor</h1>
            <VisitorForm FetchAllDestination={FetchAllDestination} currentUser={currentUser}/>
        </div>
    )
}