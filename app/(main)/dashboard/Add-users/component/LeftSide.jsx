import { FaUserCircle } from "react-icons/fa";
export default function LeftSide(){
    return(
        <div>
            <h1 className="text-2xl text-gray-400 font-bold">User Details</h1>
            <div className="flex items-center gap-2 bg-gray-400 rounded-2xl mt-5 p-4">
                <FaUserCircle size={40} />
                <h1 className="text-2xl font-bold">Profile</h1>

                
            </div>
        </div>
    )
}