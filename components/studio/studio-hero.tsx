export default function HeroStudio() {

    return (
        <section className="section-wrapper mx-auto flex justify-between items-center relative overflow-hidden">
            <div className="min-h-[500px] h-screen max-h-[1000px] flex flex-col justify-center items-center text-center gap-12 mx-auto">
                <h1
                    className="text-3xl md:text-5xl lg:text-7xl max-w-4xl font-semibold"
                >
                    Let&apos;s build, launch & scale <br/> your <span className="underline italic font-black">million dollar</span> idea
                </h1>

                <p
                    className="text-base md:text-xl w-full max-w-xl md:max-w-2xl leading-relaxed text-foreground"
                >
                    DevRedBox helps founders build, launch and scale SaaS MVPs without wasting time and money.
                    No agency layers. No handoffs. You work directly with the developer building your product.
                </p>
            </div>
        </section>
    )
}