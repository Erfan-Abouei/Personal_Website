import MainButton from "@/components/ui/MainButton"
import UsernameBox from "@/components/ui/UsernameBox"
import useTypewriter from "@/hooks/useTypeWriter"
import showToast from "@/utils/showToast"
import type { JSX } from "react"

const HeroSection = (): JSX.Element => {
    const displayText = useTypewriter(' نه عزیزم ! تو به عرفان نیاز داری ', {
        loop: true,
        delay: 5000,
        speed: 70
    })

    return (
        <section className="hero-section my-25 max-md:my-12">
            <div className="container">
                {/* Section Body */}
                <div className="flex flex-col items-center justify-center">
                    <UsernameBox isShowCircle={false} username="عرفان ابویی" />
                    {/* Text */}
                    <div className="mt-10 max-md:mt-6 flex flex-col gap-y-6 justify-center items-center max-md:gap-y-3 text-3xl max-md:text-base font-Morabba-Bold">
                        <h3 className="text-white drop-shadow-custom drop-shadow-white/50">برای طراحی سایتت به چی نیاز داری ؟</h3>
                        <h3 className="text-white/50">وردپرس ؟ قالب اماده ؟ وبسایت های طراحی سایت ؟</h3>
                        <h3 className="text-Alpine drop-shadow-custom drop-shadow-Alpine max-md:h-6 h-9">{displayText}</h3>
                        {/* Desc */}
                        <p className="max-w-138 text-sm max-md:text-custom text-white/30 font-Dana my-6 max-md:my-4 text-center">
                            چرا؟ چون امروزه  کسایی که دانش فنی ندارن میدونن یه وب‌سایت حرفه‌ای چقدر روی تصویر برند تأثیر می‌ذاره. واقعیت اینه که مهارت‌های فرانت‌اند دیگه فقط یه تخصص فنی نیست؛ شده یه ابزار اصلی برای ساختن برند شخصی یا کاری! پس اگه روی طراحی رابط کاربری، انیمیشن‌ها، تجربه کاربری و حتی بهینه‌سازی عملکرد تمرکز کنی، می‌تونی از یه برنامه‌نویس معمولی به یه توسعه‌دهنده حرفه‌ای و شناخته‌شده تبدیل بشی.
                        </p>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-x-2.5">
                            <MainButton withBorder={false} onClick={() => showToast('این وبسایت هنوز در دست توسعه هست عزیزم :)', 'error')}>درخواست همکاری</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection