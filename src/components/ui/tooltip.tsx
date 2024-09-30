'use client'

import { FC } from 'react'

interface ITooltipProps {
    text: string
}

const Tooltip: FC<ITooltipProps> = ({
    text
}) => {

    return (
        <span className="absolute lg:hidden z-50 opacity-0 group-hover:opacity-80 transition-smooth dark:bg-neutral-950 bg-neutral-700 text-neutral-50 font-medium text-xs rounded-lg py-1 px-2 left-full ml-2 pointer-events-none capitalize border dark:border-neutral-700">
            {text}
        </span>
    )
}

export default Tooltip