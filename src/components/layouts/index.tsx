'use client'

import { Fragment, useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [mobileSize, setMobileSize] = useState(true);

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMobileSize(false);
        } else {
            setMobileSize(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Fragment>
            {mobileSize && (
                <Navbar />
            )}
            <div className="flex">
                <Sidebar />
                <div className="border w-full bg-foreground dark:border-neutral-800 border-neutral-300 mt-24 md:ml-20 lg:ml-72 md:mt-3 m-3 rounded-lg shadow-xl px-5 md:px-16 lg:px-20 py-10 md:py-14">
                    {children}
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
}

export default MainLayout
