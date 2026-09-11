import { CgProfile } from "react-icons/cg";
import moment from 'moment'
export default function RightDetailsPage({FetchVisitoById}){
    return(
        <div>
            <h1 className="text-sm text-gray-400">Manage Booking</h1>
            <div className="mt-5 bg-gray-300 rounded-2xl p-2">
               <CgProfile size={40} />
            </div>
            <h1 className="mt-5 font-bold">Booking Date:<br/>
                <span className="text-gray-400">{moment(FetchVisitoById?.createAt).format('Do MM YYYY')}
                    </span> </h1>
        </div>
    )
}