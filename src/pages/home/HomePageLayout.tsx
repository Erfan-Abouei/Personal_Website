import AppIcon from "../../components/shared/AppIcon"
import Pattern from "../../components/shared/Pattern"
import usePageTitle from "../../hooks/usePageTitle"

const HomePageLayout = () => {
    usePageTitle('صفحه اصلی 🟡')

    return (
        // Home Page Pattern
        <Pattern />
    )
}

export default HomePageLayout