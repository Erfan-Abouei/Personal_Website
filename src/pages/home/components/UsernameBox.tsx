import type { JSX } from "react";
import type { UsernameBoxProps } from "@/types/components-props.types";

const UsernameBox = ({ username, isShowCircle }: UsernameBoxProps): JSX.Element => {
    return (
        <div className={`w-max h-7.5 max-md:h-6 px-3 max-md:px-2 bg-Alpine-20 rounded-full text-Alpine text-sm max-md:text-xs font-Dana-SemiBold flex items-center ${isShowCircle ? 'gap-x-2' : null}`}>
            {isShowCircle && <span className="size-1.5 max-md:size-1 rounded-full bg-Alpine"></span>}
            {username}
        </div>
    )
}

export default UsernameBox