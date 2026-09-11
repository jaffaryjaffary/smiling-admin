import { FetchContactVisitorActions } from "@/app/Actions";
import TableContacts from "./components/Table-Contants";

export default async function Contacts(){
    const FetchContactVisitor = await FetchContactVisitorActions()
    console.log(FetchContactVisitor)
    return(
        <div className="p-10  h-screen">
           <TableContacts FetchContactVisitor={FetchContactVisitor}/>
        </div>
    )
}