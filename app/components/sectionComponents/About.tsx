import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <section id="About" className="py-20 md:py-32 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image Placeholder */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <Image src="/MyImage.jpeg" alt="Akash Image" width={500} height={500}/>
                            {/* <div className="aspect-square bg-gradient-to-br from-surface via-surface-hover to-surface rounded-2xl shadow-2xl border border-accent-lime/20 flex items-center justify-center overflow-hidden">
                                <div className="text-center space-y-4 p-8">
                                    <div className="text-8xl">🚀</div>
                                    <p className="text-text-secondary">Another professional photo</p>
                                </div>
                            </div> */}
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-lime/10 rounded-full blur-xl"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-pink/10 rounded-full blur-xl"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="space-y-2">
                            <p className="text-accent-lime text-sm md:text-base uppercase tracking-wider font-mono">
                                About Me
                            </p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                Who I Am?
                            </h3>
                        </div>

                        <div className="space-y-4 text-lg text-text-secondary">
                            <p>
                                I am a software developer working on different challenges in the tech industry. 
                                My passion lies in creating efficient, scalable solutions that make a real impact.
                            </p>
                            <p>
                                I have experience as a full stack developer and can integrate AI into applications, 
                                bringing modern technology to solve complex problems. I love exploring new technologies 
                                and continuously improving my craft.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/Resume.pdf" download="Resume.pdf">
                                <button className="px-8 py-4 rounded-full bg-accent-pink hover:bg-accent-pink/80 text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                                    Download Resume
                                    <svg 
                                        className="w-5 h-5 transition-transform group-hover:translate-y-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                    </svg>
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}