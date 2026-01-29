export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "📱"
        },
        {
            id: 2,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "💼"
        },
        {
            id: 3,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "🎨"
        },
        {
            id: 4,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "🚀"
        },
        {
            id: 5,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "⚡"
        },
        {
            id: 6,
            title: "Mobile app landing design & Services",
            category: "UI/UX",
            image: "💡"
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <p className="text-accent-lime text-sm md:text-base uppercase tracking-wider font-mono">
                        Portfolio
                    </p>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        My <span className="text-accent-lime">Work</span>
                    </h4>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group relative bg-surface rounded-2xl overflow-hidden hover:bg-surface-hover transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-lime/10 border border-transparent hover:border-accent-lime/30"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-surface-hover to-surface flex items-center justify-center">
                                <span className="text-6xl">{project.image}</span>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 space-y-2">
                                <span className="text-xs uppercase tracking-wider text-accent-lime font-mono">
                                    {project.category}
                                </span>
                                <h5 className="text-lg font-semibold group-hover:text-accent-lime transition-colors">
                                    {project.title}
                                </h5>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-accent-lime/0 group-hover:bg-accent-lime/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}