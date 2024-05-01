import Link from "next/link"

export default function Header(){
    return(
        <div className="flex flex-row border-b border-[#380c7c] pl-5 pr-7 py-3.5 text-[#380c7c]">
            <div className="w-1/5 font-extrabold text-3xl">
                <Link href="/" className="hover:text-[#088cfc] transition ease-in-out">Wander</Link>
            </div>
            <div className="w-4/5 font-semibold text-sm flex flex-row space-x-7 justify-end items-center">
                <div><a className="hover:text-[#088cfc] transition ease-in-out" href="#intro">Introduction</a></div>
                <div><a className="hover:text-[#088cfc] transition ease-in-out" href="#method">Methodology</a></div>
                <div><a className="hover:text-[#088cfc] transition ease-in-out" href="#scope">Scope</a></div>
                <div><a className="hover:text-[#088cfc] transition ease-in-out" href="#nav">Navigation</a></div>
                <div><a className="hover:text-[#088cfc] transition ease-in-out" href="#tech">Technology</a></div>
                {/* <div><a href="#about">About Us</a></div> */}
            </div>
        </div>
    )
}