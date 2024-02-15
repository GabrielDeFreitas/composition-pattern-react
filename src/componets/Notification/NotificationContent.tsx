import { twMerge } from 'tailwind-merge'
interface NotificationContentProps {
    text: string
    className?: string
}

export function NotificationContent({text, className}: NotificationContentProps) {
    return (
        <div className="flex-1 flex flex-col">
            <p className={twMerge(`text-sm leading-relaxed text-zinc-500`, className)}>
                {text}
            </p>
        </div>
    )
}