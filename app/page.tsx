import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header title = "Homepage"/>
      <div className="flex flex-col h-full items-center justify-center space-y-20">
        <div className="flex items-end">
          <p className="text-6xl">Website coming soon!</p>
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
    </div>
  );
}