import { FetchAllDestinationActions } from "@/app/Actions";
import UploadDestPage from "./components/UploadDest";

export default async function Dest(){
    const FetchAllDestination = await FetchAllDestinationActions()
    console.log("FetchAllDestination", FetchAllDestination)
    return(
        <div className="h-screen">
            <UploadDestPage  FetchAllDestination={ FetchAllDestination}/>
        </div>
    )
}