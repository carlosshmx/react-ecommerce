import Categorias from "./Pages/Categorias"
import Inicio from "./Pages/Inicio"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Profile from "./Pages/Profile"


function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/Categorias" element={<Categorias></Categorias>}></Route>
            <Route path="/Registro" element={<Register></Register>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Profile" element={<Profile></Profile>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layout>
        <Footer></Footer>
      </div>


    </>
  )
}

export default App
