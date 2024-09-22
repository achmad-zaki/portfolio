export default function AboutPage() {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-semibold">404 Error</h1>
                <h3 className="text-2xl font-semibold text-indigo-300">This page doesn&apos;t not exist</h3>
            </div>
            <p className="text-xl dark:text-neutral-400">But… this could be the start of something huge — like, really big!</p>

            <button className="font-medium dark:bg-neutral-700 border dark:border-neutral-600 py-3 rounded-lg">Back to home</button>
        </div>
    )
}
