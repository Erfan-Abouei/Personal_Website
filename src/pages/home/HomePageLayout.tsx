import { useState, type JSX } from "react"

import usePageTitle from "@/hooks/usePageTitle"

import Header from "@/components/layout/Header"
import Pattern from "@/components/ui/Pattern"
import HeroSection from "./components/HeroSection"
import AboutMeModal from "./components/AboutMeModal"
import Overlay from "@/components/ui/Overlay"
import SocialMediaButton from "@/components/shared/SocialMediaButton"

const HomePageLayout = (): JSX.Element => {
    usePageTitle('صفحه اصلی')

    const [isShowAboutMeModal, setIsShowAboutModal] = useState<boolean>(false)

    const handleOpenModal = (): void => setIsShowAboutModal((cur) => !cur)

    return (
        <>
            {/* Home Page | Pattern */}
            <Pattern />

            {/* Home Page | Header */}
            <Header onOpenAboutMeModal={handleOpenModal} />

            <main>
                {/* Home Page | Hero Section */}
                <HeroSection />
            </main>

            {/* About me Modal */}
            <AboutMeModal isShow={isShowAboutMeModal} onShowModal={handleOpenModal} />

            {/* Overlay */}
            <Overlay isShow={isShowAboutMeModal} />

            {/* Social Media Buttons */}
            <SocialMediaButton />

        </>
    )
}

export default HomePageLayout