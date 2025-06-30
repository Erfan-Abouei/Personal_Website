import { Route } from "react-router"
import { lazy } from "react"

const HomePageLayout = lazy(() => import('@/pages/home/HomePageLayout'))
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'))

const AllRoute = [
    <Route index element={< HomePageLayout />} key="home" />,
    <Route path="*" element={< NotFoundPage />} key="not-found" />
]

export default AllRoute