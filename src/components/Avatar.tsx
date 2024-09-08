import { ASSETS } from "@/assets"
import Image from "next/image"

const Avatar = () => {
    return (
        <div className="relative">
            <Image
                className="size-10 rounded-lg object-cover object-top border dark:border-neutral-600 border-neutral-200"
                src={ASSETS.UserProfile}
                alt="Avatar"
                width={200}
                height={200}
            />
            <div className="rounded-full size-3 bg-green-500 absolute -right-1 -top-1" />
            <div className="rounded-full size-3 bg-green-500 absolute -right-1 -top-1 animate-ping" />
        </div>
    )
}

export default Avatar