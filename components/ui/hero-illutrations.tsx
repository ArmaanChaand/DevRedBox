"use client";

export default function TerminalIllust() {
    return (
        <div className="w-full max-w-xl rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-zinc-300">Terminal</span>
            </div>
            {/* Terminal Body */}
            <div className="px-4 py-4 font-mono text-sm text-zinc-200 space-y-2">
                <div>
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-1">devredbox</span>
                    <span className="text-zinc-400 ml-1">git:(main)</span>
                    <span className="ml-2">$</span>
                    <span className="ml-2 text-white">bun run build</span>
                </div>
                <div className="text-zinc-400">&gt; app@1.0.0 build</div>
                <div className="text-zinc-400">&gt; next build</div>
                <div className="text-green-400">✓ Compiled successfully</div>
                <div className="text-zinc-400">
                    ✓ Linting and checking validity of types
                </div>
                <div className="text-zinc-400">✓ Collecting page data</div>
                <div className="text-green-400 font-semibold">
                    Build completed in 12.4s 🚀
                </div>
            </div>
        </div>
    )
}