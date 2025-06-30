// Icon 
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiArrowDownOnSquare } from "react-icons/hi2";

// Other Components
import type { JSX } from "react";
import type { HeaderProp } from "@/types/components-props.types";

import LogoType from "../ui/LogoType"

const Header = ({ onOpenModal }: HeaderProp): JSX.Element => {
    return (
        <header>
            <div className="container">
                {/* Margin Example */}
                <div className="pt-13.5 max-md:pt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center max-md:hidden">
                            {/* Action Button */}
                            <button onClick={() => onOpenModal()} className="transition-opacity hover:opacity-80 h-8 px-4.5 rounded-md bg-[#161616] flex items-center justify-center text-sm font-Dana text-white">درباره من</button>
                            <a href="#" className="transition-colors hover:text-white/80 h-8 px-4.5 flex items-center justify-center text-sm font-Dana text-white relative top-0.5">اینستاگرام</a>
                        </div>
                        <LogoType customClass="md:relative md:-right-9" />
                        {/* Bars Icon */}
                        <span className="md:hidden">
                            <HiBars3CenterLeft className="size-8 max-md:size-6 text-white" />
                        </span>
                        {/* Download Resume Button */}
                        <a href="/public/downloads/Main_Resume.pdf" download={"Main-Resume"} className="max-md:hidden px-2 h-8 bg-Gold text-black rounded-md flex items-center gap-x-1 transition-colors hover:bg-Gold/80">
                            <HiArrowDownOnSquare className="size-4" />
                            <span className="relative top-0.5 text-sm font-Dana-SemiBold">دانلود روزمه</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header