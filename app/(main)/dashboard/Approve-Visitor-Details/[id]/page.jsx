
import { FetchApproveUserByIdAction, FetchUserInfoActions } from "@/app/Actions";
import ApprovedVisitor from "./components/ApproveVisitor";

export default async function ApprovedUser({params}){

    const {id}= await params

    const FetchApprovedVisitorById = await FetchApproveUserByIdAction(id)
     const currentUser = await FetchUserInfoActions()
    console.log(FetchApprovedVisitorById)
  
    return(
        <div className="h-screen">

          <ApprovedVisitor FetchApprovedVisitorById={FetchApprovedVisitorById} currentUser={currentUser}/>
        </div>
    )
}