import { BrowserRouter as Router, Routes } from "react-router"
import AllRoute from "./routes/routes.tsx"
import RouterProgress from "./components/shared/RouterProgress.tsx"

const App = () => {
  return (
    <>
      <Router basename="/Personal_Website">
        <RouterProgress />
        <Routes>
          {AllRoute}
        </Routes>
      </Router>
    </>
  )
}

export default App