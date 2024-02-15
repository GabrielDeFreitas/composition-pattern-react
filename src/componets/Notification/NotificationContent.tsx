interface NotificationContentProps {
    text: string
}

export function NotificationContent({text}: NotificationContentProps) {
    return (
        <div className="flex-1 flex flex-col">
            <p className="text-sm leading-relaxed text-zinc-500">
                {text}
            </p>
        </div>
    )
}