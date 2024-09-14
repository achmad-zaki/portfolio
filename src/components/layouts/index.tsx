import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="border w-full dark:bg-neutral-900 dark:border-neutral-800 border-neutral-300 bg-neutral-100 mt-24 md:ml-28 md:mt-3 min-h-screen m-3 rounded-lg shadow-sm p-4">
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout
