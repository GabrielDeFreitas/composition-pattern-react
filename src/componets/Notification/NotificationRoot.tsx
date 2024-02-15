import { ReactNode } from "react"

interface NotificationRootProps {
    children: ReactNode
}

export function NotificationRoot({children}: NotificationRootProps) {
    return (
        <div className="bg-zinc-200 border border-zinc-400 rounded-lg px-8 py-8 flex items-center gap-6">
            {children}
        </div>
    )
}