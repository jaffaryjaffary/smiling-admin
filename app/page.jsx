'use client'

import { useRouter } from "next/navigation"





export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.replace('/Login')
    },3000)
  })
  return (
  
    <div>
     <div className="bg-[url('/images/picture36.jpeg')] bg-fixed bg-center h-screen "></div>
    </div>
  );
}
