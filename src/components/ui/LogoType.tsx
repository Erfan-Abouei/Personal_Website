import type { LogoTypeProp } from "@/types/components-props.types"
import type { JSX } from "react"

const LogoType = ({ customClass }: LogoTypeProp): JSX.Element => {
    return (
        // Logo Type
        <div className={`flex items-center gap-x-1.5 ${customClass}`}>
            {/* Circle */}
            <div className="rounded-full size-6.5 bg-Gold"></div>
            {/* Username */}
            <span className="font-Morabba-Bold text-3xl max-md:text-2xl text-white">عفی</span>
        </div>
    )
}

export default LogoType