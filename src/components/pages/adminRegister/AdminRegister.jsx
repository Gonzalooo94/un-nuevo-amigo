import Bar from "../../layout/bar";
import { useEffect } from 'react'
import Carousel from "../../layout/Carousel ";
import getAssociateService from "../../../services/asociadosService";
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";


export default function AdminRegister(){

    const b = Bar()
    const C = Carousel()
    const user = getAssociateService()

    const navegate = useNavigate()    // direccionar paginas
   
        
    

    const { token } = useAuth()

    useEffect(() => {
        if (!token) {
            navegate('/Login')
        }
    }, [token, navegate])
    
    return(

        <div className="row col-12 ">
               <div className=" col-3">{b}</div>
              <div className="col-8 m-5  container row rounded-3">{C} {user.reduce(user =>(
              <div key={user._id} className="row container d-lg-block rounded-3">
                <h1 className="m-lg-4">Bienvenido {user.name}</h1>
                <div><div className="card-body row border rounded-3 m-lg-5">
                <div className="col-4 col-lg-4 container ">Nombre : {user.name} </div>
                <div className="col-4 col-lg-4 container ">Apellido : {user.lastname} </div>
            <div className="col-4 col-lg-4 container ">Rut : {user.rut} </div>
                    <div className="col-4 container "> Dirección: {user.address}</div>
                    <div className="col-4 col-lg-4 container ">correo: {user.email}</div>
                    <div className="col-4 col-lg-4 container ">numero de contacto: {user.cell}</div>
                   
              </div>       
             </div>
        </div>             

              ))}
              
               </div>   

               

                     
            
        </div>
       
    )
}