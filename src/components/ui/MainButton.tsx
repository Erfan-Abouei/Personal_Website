import type { MainButtonProps } from "@/types/components-props.types"

const MainButton = ({ children, withBorder, onClick }: MainButtonProps) => {
    return (
        <button onClick={onClick} className={`outline-none cursor-pointer text-sm max-md:text-xs font-Dana-SemiBold w-33.5 max-md:w-24 max-md:h-7 h-8.25 rounded-md transition-opacity hover:opacity-80 ${withBorder ? 'border border-[#575757] text-white' : 'bg-white text-black drop-shadow-custom drop-shadow-white/40'}`}>
            {children}
        </button>
    )
}

export default MainButton