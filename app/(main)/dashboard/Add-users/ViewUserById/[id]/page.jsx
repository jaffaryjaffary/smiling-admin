import { FetchUserByIdActions, FetchUserInfoActions } from "@/app/Actions"
import LeftSide from "../../component/LeftSide"
import RightSide from "../../component/RightSide"


export default async function UserById({ params}) {

     const {id} = await params
     const FetchUserById = await FetchUserByIdActions(id)
      const currentUser = await FetchUserInfoActions()
   
    return(

        <div className="p-5">

            {/* <div className="w-[20%] h-screen hidden md:block">
                <LeftSide/>
            </div> */}
            <div className="">
                <RightSide FetchUserById={FetchUserById}  currentUser ={ currentUser }/>
            </div>

        </div>
    )
    
}