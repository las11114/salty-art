import Image from "next/image";
import IdentImage from "../assets/images/salt_ident.png"

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-20">
      <div className="flex items-end">
        <Image className="w-100" src={IdentImage} alt=""/>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <div className="text-xl">
          <p>Colour palette</p>
        </div>
        <div className="flex justify-evenly space-x-10">
          <div className="h-10 w-10 bg-blood-1 border-2 border-black"></div>
          <div className="h-10 w-10 bg-blood-2 border-2 border-black"></div>
          <div className="h-10 w-10 bg-lilac-1 border-2 border-black"></div>
          <div className="h-10 w-10 bg-lilac-2 border-2 border-black"></div>
          <div className="h-10 w-10 bg-purple-1 border-2 border-black"></div>
        </div>
      </div>
    </div>
  );
}