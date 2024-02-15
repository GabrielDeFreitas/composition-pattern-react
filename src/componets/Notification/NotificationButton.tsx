import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from 'tailwind-merge'

interface NotificationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
    className?: string
}

export function NotificationButton({icon: Icon, className, ...rest}: NotificationButtonProps) {
    return (
        <button {...rest} className={twMerge(`w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500`, className)}>
            <Icon className="w-3 h-3 text-zinc-50"/>
        </button>
    )
}