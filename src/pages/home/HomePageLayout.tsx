import Pattern from "@/components/shared/Pattern"
import usePageTitle from "@/hooks/usePageTitle"

const HomePageLayout = () => {
    usePageTitle('صفحه اصلی 🟡')

    return (
        <>
        // Home Page Pattern
            <Pattern />
        // Home Page | Header
            <Header />
        </>
    )
}

export default HomePageLayout