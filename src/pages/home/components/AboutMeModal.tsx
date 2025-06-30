import type { AboutMeModalProps } from "@/types/components-props.types";

// Icon
import { HiLightBulb } from "react-icons/hi2";

const AboutMeModal = ({ isShow, onShowModal }: AboutMeModalProps) => {
    return (
        <div className={`z-30 p-2 drop-shadow-custom drop-shadow-Gold/50 fixed m-auto inset-0 max-w-80 h-max bg-Gold rounded-2xl transition-all ${isShow ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            {/* Icon */}
            <div className="size-20 flex items-center justify-center rounded-full bg-Gold -mt-12 mx-auto">
                <HiLightBulb className="text-black size-12 animate-pulse" />
            </div>
            {/* About me */}
            <div className="my-2 text-black space-y-3 *:pb-3 divide-y divide-black/10">
                <span className="block text-center text-base font-Morabba-Bold">عرفانم | عرفان ابویی</span>
                <p className="text-custom font-Dana text-center text-black/80"> عاشق کد زدن تو فرانت‌اند هستم و کلی خوش می‌گذرونم وقتی صفحه‌ها رو قشنگ و خفن می‌سازم. البته فقط فرانت‌اند نیستم؛ بک‌اند هم بلدم، یعنی می‌تونم هم جلوی صحنه رو درست کنم هم پشت صحنه رو کنترل کنم! خلاصه اینکه کلی کد می‌زنم و کلی حال می‌کنم! اگر دوست داری درباره کد و کامپیوتر حرف بزنی اینجام!</p>
            </div>
            {/* Close Button */}
            <button onClick={() => onShowModal()} className="w-full h-8 transition-colors hover:bg-black/80 flex items-center justify-center text-white text-sm font-Dana-SemiBold bg-black rounded-lg">حله</button>
        </div>
    )
}

export default AboutMeModal