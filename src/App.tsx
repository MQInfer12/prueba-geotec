import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/index'
import UserPage from './pages/userPage/index'
import Layout from "./components/layout"

/**
 * En la función App se define el enrutador, 
 * el layout de la aplicación y
 * las distintas rutas, en este caso tenemos 2
 */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
