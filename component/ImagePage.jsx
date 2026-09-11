import Image from "next/image";

export default function ImagePage(){
    return(
        <div className="relative overflow-hidden h-screen">
            <Image
             src="/images/picture36.jpeg"
             alt=""
            className="object-cover"
            // width={1000}
            // height={2000}
            fill
            priority
          />
          <div className="absolute bottom-0 p-4">
            <h1 className="text-4xl text-white font-bold">Smiling Hours African Adventures</h1>
            <p className="text-white">Explore the wonders of Africa with Smiling Hours. From the Serengeti to the Sahara,
                 we offer unforgettable experiences that will leave you with a lifetime of memories.</p>
          </div>
        </div>
    )
}