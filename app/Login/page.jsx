import ImagePage from "@/component/ImagePage";
import Image from "@/component/ImagePage";
import LoginForm from "@/component/LoginForm";

export default function Login(){
    return(
        <div className="flex items-center">
            <div className="w-screen h-screen bg-[#F8F7FA] lg:w-[50%]">
                <LoginForm/>
            </div>
            <div  className="hidden w-[50%] h-screen lg:block">
             <ImagePage/>
            </div>
        </div>
    )
}