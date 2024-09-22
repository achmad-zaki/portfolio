import { ASSETS } from "@/assets"
import Image from "next/image"

const Avatar = () => {
    return (
        <Image
            className="size-10 md:size-14 rounded-lg object-cover object-top border dark:border-neutral-600 border-neutral-200"
            src={ASSETS.UserProfile}
            alt="Avatar"
            width={50}
            height={50}
        />
    )
}

export default Avatar