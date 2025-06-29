import type { JSX } from "react"

import usePageTitle from "@/hooks/usePageTitle"

import Header from "@/components/layout/Header"
import Pattern from "@/components/ui/Pattern"
import HeroSection from "./components/HeroSection"

const HomePageLayout = (): JSX.Element => {
    usePageTitle('صفحه اصلی')

    return (
        <>
            {/* Home Page | Pattern */}
            <Pattern />

            {/* Home Page | Header */}
            <Header />

            <main>
                {/* Home Page | Hero Section */}
                <HeroSection />
            </main>

        </>
    )
}

export default HomePageLayout