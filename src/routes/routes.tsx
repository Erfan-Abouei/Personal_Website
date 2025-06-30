import { Route } from "react-router"
import { lazy } from "react"
import NotFoundPage from "@/pages/not-found/NotFoundPage"
const HomePageLayout = lazy(() => import('@/pages/home/HomePageLayout'))

const AllRoute = [
    <Route index element={< HomePageLayout />} key="home" />,
    <Route path="*" element={< NotFoundPage />} key="not-found" />
]

export default AllRoute