import { FetchAllApprovedVisitorActions } from "@/app/Actions";
import ApprovedVisitor from "./components/ApprovedTable";

export default async function ApprovedUser(){
    const FetchAllApprovedVisitor = await FetchAllApprovedVisitorActions();
    console.log(FetchAllApprovedVisitor)
    return(
        <div className="h-screen">
           <ApprovedVisitor FetchAllApprovedVisitor={FetchAllApprovedVisitor}/>
        </div>
    )
}