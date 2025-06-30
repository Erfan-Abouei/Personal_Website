import MainButton from "@/components/ui/MainButton";
import usePageTitle from "@/hooks/usePageTitle";
import type { JSX } from "react";
import { useNavigate, type NavigateFunction } from "react-router";

const NotFoundPage = (): JSX.Element => {
    usePageTitle('چیزی پیدا نکردم')

    const navigate: NavigateFunction = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center flex flex-col">
            {/* 404 Number */}
            <span className="text-8xl font-Dana-SemiBold text-white">404</span>
            <span className="my-4 text-white/80 font-Dana-Medium">فک کنم اشتباه اومدی زیبارو</span>
            <MainButton withBorder={true} onClick={() => navigate('/', { replace: true })}>
                باید برگردی
            </MainButton>
        </div >
    )
}

export default NotFoundPage