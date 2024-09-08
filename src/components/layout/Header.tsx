

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, LayoutDashboard, Menu, Moon, Search, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

const Header = () => {
    const { setTheme, theme } = useTheme()

    const themeOptions = [
        {
            icon: <Moon className="h-5 w-5" />,
            value: "dark",
            name: "Dark Mode"
        },
        {
            icon: <SunDim className="h-5 w-5" />,
            value: "light",
            name: "Light Mode"
        },
        {
            icon: <SunDim className="h-5 w-5" />,
            value: "system",
            name: "System"
        }
    ]

    const handleChange = (theme: any) => {
        switch (theme) {
            case "dark":
                setTheme("dark")
                break;
            case "light":
                setTheme("light")
                break;
            case "system":
                setTheme("system")
                break;
        }
    }

    return (
        <div className="border-b fixed top-0 w-full py-3 z-50">
            <div className="container flex items-center justify-between">
                <h3 className="font-semibold text-lg">Achmad Zaki</h3>
                <div className="flex items-center flex-row-reverse gap-x-3">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className="size-7 cursor-pointer block lg:hidden" />
                        </SheetTrigger>
                        <SheetContent>
                            <VisuallyHidden>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when yourre done.
                                    </SheetDescription>
                                </SheetHeader>
                            </VisuallyHidden>
                            <div className="pt-8 pb-5 h-full flex flex-col justify-between">
                                <div className="space-y-5">
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            className="pl-10 w-full h-10 text-sm rounded-md border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                                            placeholder="Search..."
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <Search className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <Link href="#">
                                            <div className="bg-secondary px-5 py-2 rounded-md flex items-center">
                                                <LayoutDashboard className="size-5" />
                                                <div className="flex-grow ml-1.5">Home</div>
                                                <ChevronRight className="size-5 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link href="#">
                                            <div className="bg-secondary px-5 py-2 rounded-md flex items-center">
                                                <LayoutDashboard className="size-5" />
                                                <div className="flex-grow ml-1.5">Home</div>
                                                <ChevronRight className="size-5 text-muted-foreground" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <Select onValueChange={handleChange}>
                                    <SelectTrigger className="w-full mt-3">
                                        <SelectValue placeholder="Select Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {themeOptions.map((data, index) => (
                                            <SelectItem
                                                key={index}
                                                className={`${data.value === theme ? "font-extrabold bg-input" : data.value === theme ? "font-extrabold bg-input" : data.value === theme ? "font-extrabold bg-input" : "font-medium"}`}
                                                value={data.value}
                                            >
                                                <div className="flex items-center">
                                                    {data.icon}
                                                    <span className="ml-2">{data.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    )
}

export default Header