import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const[name, setName] = useState("");
  const[lastname, setLastname] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[rePassword, setRePassword] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const add = async()=>{
    if(password == rePassword){
      try{
        setLoading(true);
        await axios.post("http://localhost:3001/create",{
        name: name,
        lastname: lastname,
        email: email,
        password: password
       
      })
      alert("Usuario creado");
      navigate("/Categorias")
      }catch(error){
        console.error("Error",error);
      }finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container sm:px-5 px-0 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full flex-col mx-auto  sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
            <div className="w-full md:w-1/2 sm:ms-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label for="lastname" className="leading-7 text-sm text-gray-600">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setLastname(e.target.value)}}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                for="re-password"
                className="leading-7 text-sm text-gray-600"
              >
                Repita contraseña
              </label>
              <input
                type="password"
                id="re-password"
                name="re-password"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setRePassword(e.target.value)}}
              />
            </div>
            {/* {loading ? 'Enviando...' : 'Enviar'} */}
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={add}>
              Registrar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
