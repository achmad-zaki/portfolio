import { GoHome } from "react-icons/go";
// import { LuShoppingBag } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";

export const MENU_ITEMS = [
    {
        name: 'home',
        icon: RiHome5Line,
        href: '/'
    },
    {
        name: 'projects',
        icon: PiHandbagSimpleBold,
        href: '/projects'
    },
    {
        name: 'about',
        icon: FaRegUser,
        href: '/about'
    },
    {
        name: 'contact',
        icon: MdOutlineMailOutline,
        href: '/contact'
    }
]