import Header from "@/components/layout/Header"
import Pattern from "@/components/ui/Pattern"
import usePageTitle from "@/hooks/usePageTitle"

const HomePageLayout = () => {
    usePageTitle('صفحه اصلی')

    return (
        <>
            <Pattern />
            <Header />
        </>
    )
}

export default HomePageLayout