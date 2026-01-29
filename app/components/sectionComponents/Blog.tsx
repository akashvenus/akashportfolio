export default function Blog() {
    const articles = [
        {
            id: 1,
            title: "How to Improved Image with Design",
            category: "Development",
            date: "15 Jun 2025",
            image: "📝",
            excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
            id: 2,
            title: "How to Improved Image with Design",
            category: "Technology",
            date: "15 Jun 2025",
            image: "💻",
            excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
            id: 3,
            title: "How to Improved Image with Design",
            category: "Inspiration",
            date: "15 Jun 2025",
            image: "✨",
            excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <p className="text-accent-lime text-sm md:text-base uppercase tracking-wider font-mono">
                        Recent Articles
                    </p>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Visit My Blog & <span className="text-accent-lime">Keep Feedback</span>
                    </h4>
                </div>

                {/* Articles Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article) => (
                        <article 
                            key={article.id}
                            className="group bg-surface rounded-2xl overflow-hidden hover:bg-surface-hover transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-lime/10 border border-transparent hover:border-accent-lime/30"
                        >
                            {/* Image */}
                            <div className="aspect-[16/10] bg-gradient-to-br from-surface-hover to-surface flex items-center justify-center">
                                <span className="text-6xl">{article.image}</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-4 text-sm text-text-secondary">
                                    <span className="text-accent-lime font-mono uppercase">{article.category}</span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                                
                                <h5 className="text-xl font-semibold group-hover:text-accent-lime transition-colors">
                                    {article.title}
                                </h5>
                                
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <button className="text-accent-lime font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}