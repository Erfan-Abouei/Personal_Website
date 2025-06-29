import { BrowserRouter as Router, Routes } from "react-router"
import AllRoute from "./routes/routes.tsx"

const App = () => {
  return (
    <Router>
      <Routes>
        {AllRoute}
      </Routes>
    </Router>
  )
}

export default App