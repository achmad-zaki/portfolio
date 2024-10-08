import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t mt-10 pt-5'>
            <div className='flex flex-wrap gap-x-3'>
                <p className='text-sm dark:text-neutral-500 text-neutral-500 font-medium'>Built in <Link href="https://nextjs.org/" className='text-text dark:hover:text-neutral-400 transition-smooth'>Next JS</Link></p>
                <p className='dark:text-neutral-500 text-neutral-500'>&#903;</p>
                <p className='text-sm dark:text-neutral-500 text-neutral-500 font-medium'>Made by <Link href="/" className='text-text dark:hover:text-neutral-400 transition-smooth'>Achmad Zaki</Link></p>
                <p className='dark:text-neutral-500 text-neutral-500'>&#903;</p>
                <p className='text-sm dark:text-neutral-500 text-neutral-500 font-medium'>&copy;{new Date().getFullYear()} Personal Website</p>
            </div>
        </footer>
    )
}

export default Footer