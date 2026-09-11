import moment from "moment";
import { CgProfile } from "react-icons/cg";

export async function LeftPage({FetchApprovedVisitorById}) {

    return(
        <div className="mt-5">
            <div className="p-2 bg-gray-400 rounded-2xl flex items-center gap-2">
              <CgProfile size={40}/>
              <h1 className="text-xl font-bold text-slate-500">Profile</h1>
            </div>
            <span className="flex items-center gap-2 mt-5">
                <h1 className="font-bold">Approved By:</h1>
                <p className="text-slate-500">{FetchApprovedVisitorById?.approvedByFname}  {FetchApprovedVisitorById?.approvedByLname}</p>
            </span>
            <div className="flex items-center gap-2">
                <h1 className="font-bold">Approved Date:</h1>
                <p className="text-slate-500">{moment(FetchApprovedVisitorById.createAt).format('Do MM YYYY')}</p>
            </div>
        </div>
    )
    
}