import Link from "next/link"
import Image from "next/image"
import IdentImage from "@/assets/images/salt_ident.png"

export function Header({ title }: { title: string }) {
    return(
        <div className="w-full h-20 bg-purple-1 flex items-center justify-center align-center">
            <Link href="/" className="h-full flex-1 w-auto">
                <Image src={IdentImage} alt="" className="h-full w-auto" />
            </Link>
            <div className="">
                <p className="text-4xl text-center">{title}</p>
            </div>
            <div className="flex-1"/>
        </div>
    )
}