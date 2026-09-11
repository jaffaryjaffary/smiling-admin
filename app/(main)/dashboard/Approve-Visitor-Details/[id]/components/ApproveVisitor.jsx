import { LeftPage } from "./LeftSide";
import RightPage from "./RightSide";

export default function ApprovedVisitor({FetchApprovedVisitorById, currentUser}){
    return(
        <div className="h-screen p-10 flex gap-10">
            <div className="hidden md:block  w-[30%]">
                <h1 className="text-2xl font-bold text-slate-500">Approved Visitor Details</h1>
                <LeftPage FetchApprovedVisitorById={FetchApprovedVisitorById}/>
            </div>

            <div className="md: w-full">
                <h1 className="text-2xl font-bold text-slate-500">Profile Details</h1>
                <RightPage FetchApprovedVisitorById={FetchApprovedVisitorById} currentUser={currentUser}/>
            </div>

        </div>
    )
}