import type { MobileMenuProps } from "@/types/components-props.types";

// icons
import { HiArrowDownCircle } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi2";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";


const MobileMenu = ({ isOpenMobileMenu, onOpenMobileMenu, onOpenAboutMeModal }: MobileMenuProps) => {
    return (
        <div className={`md:hidden ${isOpenMobileMenu ? 'w-full' : 'w-0'} rounded-lg overflow-hidden white-space-nowrap flex items-center justify-between transition-all absolute h-12 bg-Gold`}>
            <div className="flex items-center gap-x-2 pr-2">

                {/* Download Resume Button ( With <a> Tag )*/}
                <a href="/public/downloads/Main_Resume.pdf" download={'Main-Resume.pdf'} className="flex items-center gap-x-1 text-white h-6 px-2 rounded-md bg-black">
                    <HiArrowDownCircle className="size-4" />
                    <span className="text-custom font-Dana relative top-0.5">دانلود رزومه</span>
                </a>

                {/* About Me Button ( With <button> Tag ) */}
                <button onClick={() => onOpenAboutMeModal()} className="flex items-center gap-x-1 text-white h-6 px-2 rounded-md bg-black">
                    <HiLightBulb className="size-4" />
                    <span className="text-custom font-Dana relative top-0.5">درباره من</span>
                </button>

            </div>
            {/* Close Mobile Menu */}
            <span className="pl-2" onClick={() => onOpenMobileMenu()}>
                <HiMiniArrowsPointingIn className="size-5 text-black" />
            </span>
        </div>
    )
}

export default MobileMenu