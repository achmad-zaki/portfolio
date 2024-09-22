import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="border w-full dark:bg-neutral-900 dark:border-neutral-800 border-neutral-300 bg-neutral-100 mt-24 md:ml-20 lg:ml-72 md:mt-3 m-3 rounded-lg shadow-sm px-5 py-10">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default MainLayout
