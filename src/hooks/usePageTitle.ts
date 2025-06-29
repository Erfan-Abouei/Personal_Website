import { useEffect } from "react"

const mainTitle = "عرفان ابویی"

const usePageTitle = (pageTitle: string) => {
    useEffect(() => {
        document.title = `${mainTitle} | ${pageTitle}`
    }, [pageTitle])
}

export default usePageTitle