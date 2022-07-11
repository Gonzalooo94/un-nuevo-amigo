import './estilo.css';


import Home from "../imagenes/logos/home.png"
import { useAuth } from '../context/AuthContext';


export default function Nav () {
    const { token, sessionClear } = useAuth()
    return(

    <div >
      <nav class="navbar navbar-dark bg-dark nav flex-nowrap rounded-3"  >
        <td width="15%">&nbsp;</td>
        <td ><a href="/" class="navbar-brand" ><img src={Home} alt="" width="35" height="35" /></a></td>
        <td width="55%" ><h4>Un amigo en tu camino</h4></td>
        {!token ? (
          <>
            <td><a href="/Login" class="nav-link active nav" aria-current="page">Login</a></td>         
            <td><a href="/Registro" class="nav-link active nav" aria-current="page">Registro</a></td>  
          </>
        ) : (
          <td><span class="nav-link active nav" onClick={sessionClear}>Logout</span></td>      
        )}
        
        <td><a href="/contactos" class="nav-link active nav" aria-current="page">Contacto</a></td>         
        <td width="5%">&nbsp;</td>
      </nav>         
     

    </div>
    

    )
}

