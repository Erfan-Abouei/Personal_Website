import usePageTitle from "../../hooks/usePageTitle"

const HomePageLayout = () => {
    usePageTitle('صفحه اصلی 🟡')

    return (
        <span className="font-Dana">سلام دنیا</span>
    )
}

export default HomePageLayout