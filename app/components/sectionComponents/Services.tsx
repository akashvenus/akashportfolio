import Link from "next/link";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Full-Stack Development",
            description: "Building complete web applications from frontend to backend with modern technologies. Scalable, maintainable, and performant solutions.",
            icon: "</>",
            features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"]
        },
        {
            id: 2,
            title: "AI Integration",
            description: "Seamlessly integrate AI capabilities into your existing applications. Enhance user experience with intelligent features and automation.",
            icon: "🤖",
            features: ["OpenAI Integration", "Custom AI Models", "Data Processing", "Smart Features"]
        },
        {
            id: 3,
            title: "AI Chatbots",
            description: "Intelligent conversational agents that understand context and provide meaningful interactions. 24/7 customer support automation.",
            icon: "💬",
            features: ["Natural Language", "Context Awareness", "Multi-platform", "Custom Training"]
        },
        {
            id: 4,
            title: "AI Agents",
            description: "Autonomous AI agents that can perform complex tasks, make decisions, and interact with various systems to achieve specific goals.",
            icon: "👨🏻‍💼",
            features: ["Task Automation", "Decision Making", "System Integration", "Workflow Optimization"]
        }
    ];

    return (
        <section id="Services" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <p className="text-accent-lime text-sm md:text-base uppercase tracking-wider font-mono">
                        What I Do
                    </p>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        My <span className="text-accent-lime">Services</span>
                    </h4>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Delivering cutting-edge solutions that combine traditional development with modern AI capabilities
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={service.id}
                            className="group relative bg-surface rounded-2xl p-8 hover:bg-surface-hover transition-all duration-300 border border-transparent hover:border-accent-lime/30 hover:shadow-2xl hover:shadow-accent-lime/10"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl md:text-5xl">{service.icon}</span>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h5 className="text-2xl font-bold group-hover:text-accent-lime transition-colors">
                                    {service.title}
                                </h5>
                                
                                <p className="text-text-secondary leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="grid grid-cols-2 gap-2 pt-4">
                                    {service.features.map((feature, idx) => (
                                        <li 
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-text-secondary"
                                        >
                                            <svg 
                                                className="w-4 h-4 text-accent-lime flex-shrink-0" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M5 13l4 4L19 7" 
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-lime/0 via-accent-lime/0 to-accent-lime/0 group-hover:from-accent-lime/5 group-hover:via-transparent group-hover:to-accent-lime/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <Link href='https://calendly.com/akashcanada1999' target="_blank">
                    <button className="px-8 py-4 bg-accent-lime text-background font-semibold rounded-full hover:bg-accent-lime-hover transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                        Let's Work Together
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}