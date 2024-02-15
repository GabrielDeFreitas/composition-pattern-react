import { ElementType } from "react";
import { twMerge } from 'tailwind-merge'

interface NotificationIconProps {
    icon: ElementType
    className?: string
}

export function NotificationIcon({icon: Icon, className}: NotificationIconProps) {
    return (
        <Icon className={twMerge(`w-6 h-6 text-zinc-800`, className)}/>
    )
}