import { FetchUserInfoActions } from "@/app/Actions";
import Headers from "./component/Header";
import SideBar from "./component/SideBar";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toast";



export default  async function DashboardLayout({children}){
  const currentUser = await FetchUserInfoActions()
  if(!currentUser.success){
    redirect('/Login')
  }
    return(
  <div className="h-screen flex">
    <div className="hidden fixed h-screen  bg-white  md:block w-[15%]">
        <SideBar currentUser={currentUser}/>
    </div>
    <div className="bg-[#F8F7FA]    lg:ml-55 w-full">
        <Headers currentUser={currentUser}/>
       {children}
       <Toaster/>

    </div>
   
  </div>
    )
}