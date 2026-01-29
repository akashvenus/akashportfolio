export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Ralph Francois",
            role: "Co-founder, Reelcruit",
            content: "Throughout his time with us, Akash distinguished himself as a talented, dedicated, and forward-thinking developer whose contributions had a direct and lasting impact on our digital presence.",
            avatar: "👨‍💼"
        },
        {
            id: 2,
            name: "Frederik Gauthier",
            role: "President, Reelcruit",
            content: "I am confident that Akash will be a remarkable asset to any organization he joins.",
            avatar: "👨‍💼"
        },
        {
            id: 3,
            name: "Arthur Baruti",
            role: "Volee, Founder",
            content: "Akash is great and flexible to work with. Whenever I come with changes, he is ready to listen and deliver the results.",
            avatar: "👨‍💼"
        }
    ];

    return (
        <section id="Testimonials" className="py-20 md:py-32 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <p className="text-accent-lime text-sm md:text-base uppercase tracking-wider font-mono">
                        Testimonials
                    </p>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        What They <span className="text-accent-lime">Say</span>
                    </h4>
                </div>

                {/* Testimonials Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id}
                            className="bg-surface rounded-2xl p-6 md:p-8 hover:bg-surface-hover transition-all duration-300 hover:scale-105 border border-transparent hover:border-accent-lime/30 hover:shadow-lg hover:shadow-accent-lime/10"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Avatar and Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-accent-lime/10 rounded-full flex items-center justify-center text-3xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg">{testimonial.name}</h5>
                                        <p className="text-sm text-text-secondary">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <p className="text-text-secondary leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Rating Stars */}
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className="w-5 h-5 fill-accent-lime" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}