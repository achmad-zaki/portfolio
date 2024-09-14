import Link from "next/link"

const Sidebar = () => {
    return (
        <aside className="fixed z-50 left-0 top-0 h-screen hidden md:block border py-3 w-24">
            <Link href="/">home</Link>
            <Link href="/projects">project</Link>
        </aside>
    )
}

export default Sidebar