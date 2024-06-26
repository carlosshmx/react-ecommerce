import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const btnlink = "mr-5 hover:text-blue-700 cursor-pointer"
    const activeLink = "mr-5 text-blue-950 cursor-pointer font-semibold"

    const logout = ()=>{
        localStorage.clear();
        location.reload();
        navigate("/")
    }
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold">Carlos Colmenares</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className={({isActive}) => isActive? activeLink : btnlink}>Inicio</NavLink>
                        <NavLink to="/categorias" className={({isActive}) => isActive? activeLink : btnlink}>Categorias</NavLink>
                        <NavLink to="/instrucciones" className={({isActive}) => isActive? activeLink : btnlink}>Instucciones</NavLink>
                    </nav>
                        {!localStorage.getItem("signedUserEmail")?(
                            <>
                            <NavLink to="/Login" className={({isActive}) => isActive? activeLink : btnlink}>Login</NavLink>
                            <NavLink to="/Registro" className={({isActive}) => isActive? activeLink : btnlink}>Registro</NavLink>
                            </>
                        ):(
                            <>
                            <NavLink to="/Profile" className={({isActive}) => isActive? activeLink : btnlink}>{localStorage.getItem("signedUserName")}</NavLink>
                            <NavLink to="/" className={({isActive}) => isActive? activeLink : btnlink} onClick={logout}>Log out</NavLink>
                            </>
                        )}
                        
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>
        </>
    )
}

export default Navbar;
