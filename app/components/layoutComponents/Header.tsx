'use client';

import Navbar from "./Navbar"
import { useState } from "react";
import Link from "next/link";

function MenuHamburger() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z" fill="#32cd32"/>
        </svg>
    );
}

export default function Header(){
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                        Akash<span className="text-accent-lime">.</span>
                    </h4>

                    {/* Desktop navigation + hire me */}
                    <div className="hidden md:flex items-center gap-8">
                        <Navbar />
                        <Link href='https://calendly.com/akashcanada1999' target="_blank">
                            <button className="px-6 py-2.5 rounded-full bg-accent-lime text-background font-semibold hover:bg-accent-lime-hover transition-all duration-300 hover:scale-105">
                                Hire Me
                            </button>
                        </Link>
                        
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <MenuHamburger />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="md:hidden border-t border-surface bg-background">
                    <Navbar />
                    <div className="px-6 py-4">
                        <Link href='https://calendly.com/akashcanada1999' target="_blank">
                            <button className="w-full px-6 py-3 rounded-full bg-accent-lime text-background font-semibold hover:bg-accent-lime-hover transition-colors">
                                Hire Me
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}