import LeftDetailsPage from "./LeftDetails";
import RightDetailsPage from "./RightDetails";

export default function ViewPage({FetchVisitoById,  currentUser}) {
    return(
        <div className='flex gap-10'>
            <div className="hidden w-50 lg:block">
                <h1 className="font-bold text-xl">Visitor Details</h1>
                <RightDetailsPage FetchVisitoById={FetchVisitoById}/>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-xl">Profile Details</h1>
                <LeftDetailsPage FetchVisitoById={FetchVisitoById}  currentUser={ currentUser}/>
            </div>
        </div>
    )
}