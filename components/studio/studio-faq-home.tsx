import { Badge } from "../ui/badge";
import FAQBox, { FAQType } from "../ui/faq-box";

export default function AgencyFAQsHome() {
    return (
        <section className="mt-20 mx-auto section-wrapper grid grid-cols-1 md:grid-cols-2 gap-10" id="faq">

            <div className="flex flex-col justify-start items-start sm:items-center md:items-start gap-5">
                <Badge variant="link" className="text-sm pl-0" asChild>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                </Badge>
                <p className="text-balance font-bold text-4xl sm:text-5xl">
                    Everything you <br />   need to know
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-5">
                <div className="w-full">
                    <dl className="w-full divide-y">
                        {AGENCY_FAQs.map(({ question, answer }) => (
                            <FAQBox
                                key={"faq-" + question}
                                question={question}
                                answer={answer}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}



const AGENCY_FAQs: FAQType[] = [
    {
        question: "Do I need to be technical to work with you?",
        answer: (<>Not at all. That&apos;s the whole point. We explain everything in plain English and handle all technical decisions. <br /> You focus on your customers. we focus on the code.</>)
    },
    {
        question: "What if I don't know exactly what features I need?",
        answer: `That's normal. In our discovery call, we'll help you figure out which features actually matter for v1 and which can wait for v2.`
    },
    {
        question: "Do you only work with funded startups?",
        answer: `No. We work with any serious founder who has a $5K+ budget to validate their idea — whether you're bootstrapped or backed.`
    },
    {
        question: "What happens after the MVP is built?",
        answer: (<>You have two options:
            <span className="block my-2">
                1. Take the code and hire in-house (we provide full documentation)
                <br />
                2. Keep working with us for updates and new features
            </span>
            There&apos;s no lock-in. You own the code from day one.
        </>)
    },
    {
        question: "What tech stack do you use?",
        answer: (<>
            We choose based on what gets you to market fastest.
            <span className="block my-2">
                Most MVPs: Next.js + Tailwind CSS, deployed on Vercel.
            </span>
            <span className="block my-2">
                For quick validation: No-code tools (Webflow, Framer) or a CMS.
            </span>
            We&apos;re pragmatic — if no-code proves your idea faster, we&apos;ll recommend it. Once validated, we build the scalable version in Next.js.
        </>)
    },
    {
        question: "Can you build mobile apps?",
        answer: `Not yet. We focus on web-based SaaS products. If you need a mobile app, we can recommend partners or revisit this after your web MVP is validated.`
    },
    {
        question: "How involved do I need to be during development?",
        answer: `We check in weekly to show progress and get feedback. You're involved in key decisions (design, features), but we don't need daily input. Your time is valuable.`
    }
]
