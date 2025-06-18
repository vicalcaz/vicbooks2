import React from 'react'
// import { Spinner } from 'react-bootstrap'
import { ClockLoader } from 'react-spinners'
import { Spinner } from "@chakra-ui/spinner"
import MDSpinner from "react-md-spinner";

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <ClockLoader color='violet' size={70}/> */}
         {/* <Spinner animation="grow" variant="success" />  */}
         {/* <Spinner size="xl" color="red.500" emptyColor="gray.200" */}
         <MDSpinner duration={500} color1="yellow.500"/>
         
        {/* <p>Cargando...</p> */}
    </div>
  )
}

export default LoaderComponent
// Asegúrate de instalar react-spinners si aún no lo has hecho:
// npm install react-spinners