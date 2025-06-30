import type { JSX } from "react"

const LoadingScreen = (): JSX.Element => {
    return (
        <div className="fixed inset-0 size-full flex items-center justify-center">
            <div className="size-10 max-md:size-6 rounded-full bg-Gold animate-ping"></div>
        </div>
    )
}

export default LoadingScreen