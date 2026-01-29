"use client";
import Link from "next/link";

const navLinks = ['Home','About','Services','Testimonials','Contact']

export default function Navbar(){
    return (
        <ul className="navs">
            {navLinks.map((navlink,idx) => (
                <li key={idx+Date.now()+idx}>
                    <Link href={`#${navlink}`}>
                        {navlink}
                    </Link>
                </li>
            ))}
        </ul>
    )
}