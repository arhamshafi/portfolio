"use client"

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {


    return (

        <nav className="w-3/4 h-16 bg-white/20 rounded-lg flex justify-between px-5 items-center fixed z-10 top-10 left-1/2 -translate-x-1/2 ">
            <Link href={"/"} className="w-10 h-10 rounded-full bg-white flex justify-center items-center ">
                <Image width={100} height={100} alt="ARHAFi Portfolio" src={"/logo.png"} className="w-3/4" />
            </Link>



        </nav>

    );
}