import { FetchAllApprovedVisitorActions, FetchAllDestinationActions, FetchAllUserActions, FetchContactVisitorActions, FetchUserInfoActions } from "@/app/Actions";
import CardsPage from "./component/Cards";

export default async function Dashboard(){
    const FetchContactVisitor = await FetchContactVisitorActions()
    const FetchApprovedVisitor = await FetchAllApprovedVisitorActions()
    const FetchAllUser = await FetchAllUserActions()
    const FetchAllDestination = await FetchAllDestinationActions()
    return(
        <div className="">
          <CardsPage FetchContactVisitor={FetchContactVisitor} FetchApprovedVisitor={FetchApprovedVisitor}
          
          FetchAllUser={FetchAllUser}  FetchAllDestination={ FetchAllDestination}/>   
        </div>
    )
}