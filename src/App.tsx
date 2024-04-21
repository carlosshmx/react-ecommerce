import Categorias from "./Pages/Categorias"
import Inicio from "./Pages/Inicio"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/Categorias" element={<Categorias></Categorias>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layout>
        <Footer></Footer>
      </div>


    </>
  )
}

export default App
