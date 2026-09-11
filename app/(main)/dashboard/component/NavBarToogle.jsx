import Link from "next/link";
import { MenuList } from "./Share";

export default function NavBar(){
    return(
        <div className="lg:hidden  top-0 fixed  p-4 left-0 h-screen w-60 ">
            <div className=" bg-white shadow-sm">
                {MenuList.map((item,index)=>
                <ul key={index}>
                    <Link  href={item.path}>
                    <li className="flex items-center gap-2 p-4">{item.icon} {item.title}</li>
                    </Link>
                </ul>
                )}
            </div>
        </div>
    )
}