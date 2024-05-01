import Link from "next/link"

export default function Header(){
    return(
        <div className="flex flex-row border-b border-black/70 pl-5 pr-7 py-3.5">
            <div className="w-1/5 font-extrabold text-3xl">
                <Link href="/">Wander</Link>
            </div>
            <div className="w-4/5 font-semibold text-sm flex flex-row space-x-7 justify-end items-center">
                <div><a href="#intro">Introduction</a></div>
                <div><a href="#method">Methodology</a></div>
                <div><a href="#scope">Scope</a></div>
                <div><a href="#tech">Technology</a></div>
                <div>Gallery</div>
                <div><a href="#about">About Us</a></div>
            </div>
        </div>
    )
}