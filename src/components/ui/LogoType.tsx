import type { JSX } from "react"

const LogoType = (): JSX.Element => {
    return (
        // Logo Type
        <div className="flex items-center gap-x-1.5">
            {/* Circle */}
            <div className="rounded-full size-6.5 bg-Gold"></div>
            {/* Username */}
            <span className="font-Morabba-Bold text-[30px] max-md:text-2xl text-white">عرفانم</span>
        </div>
    )
}

export default LogoType