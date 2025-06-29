import { Route } from "react-router"
import { lazy } from "react"
const HomePageLayout = lazy(() => import('@/pages/home/HomePageLayout'))

const AllRoute = [
    <Route index element={< HomePageLayout />} key="home" />
]

export default AllRoute