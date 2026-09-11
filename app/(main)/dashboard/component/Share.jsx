import { AiFillDashboard } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiUserPlus, HiUsers } from "react-icons/hi2";
export const MenuList=[
    {
        id:1,
        title:'Dashboard',
        icon:<AiFillDashboard />,
        path:'/dashboard'
    },
    {
        id:2,
        title:'Contact Visitor',
        icon:<MdContactPhone />,
        path:'/dashboard/Contact'
    },
    {
        id:3,
        title:'Add Visitor',
        icon:<FaPlus />,
        path:'/dashboard/Add-Visitor'
    },
    {
        id:4,
        title:'Approved',
        icon:<RiVerifiedBadgeFill />,
        path:'/dashboard/Approved'
    },
    {
        id:5,
        title:'Upload Dest',
        icon:<IoCloudUploadOutline />,
        path:'/dashboard/Destination'
    },
    // {
    //     id:6,
    //     title:'Help & support',
    //     icon:<IoMdHelpCircle />,
    //     path:'/dashboard/Help&Support'
    // },
    {
        id:6,
        title:'Added Users',
        icon:<HiUserPlus />,
        path:'/dashboard/Add-users'
    },
    
]