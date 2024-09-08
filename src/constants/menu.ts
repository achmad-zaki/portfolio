import { GoHome } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export const MENU_ITEMS = [
    {
        name: 'homepage',
        icon: GoHome,
        href: '/'
    },
    {
        name: 'projects',
        icon: LuShoppingBag,
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