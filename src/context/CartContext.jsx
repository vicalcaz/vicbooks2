
import { createContext, useState } from 'react';
//creamos el contexto del carrito (una caja donde guardaremos los datos del carrito)
//yo tengo algo en la caja uds. vienen y me piden lo que necesiten
//tengo una cantina en el colegio vamos a comprar comida y bebida, yo tengo la caja de la cantina   
//solamente los que trabajan en la cantina pueden modificar la caja, los alumnos solo pueden ver lo que hay en la caja
//segundo creamos nuestro proveedor del contexto del carrito


export const CartContext = createContext();

//creamos el proveedor del contexto del carrito
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //todas las funciones que van a modificar el carrito
    //como agregar un producto, eliminar un producto, vaciar el carrito 
    

    // Función para agregar un producto al carrito
  //Agregar un item al carrito no repetir y sumar cantidades
   const addItem = (item, cantidad)=>{
    // console.log(item, cantidad, 'desde el contexto')
    // console.log({...item, quantity:cantidad}, 'desde el contexto')
    if(isInCart(item.id)){
        //existe ese item ya en el carrito, tengo que sumar cantidades
        //logica de sumar cantidades
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                //sumar cantidades
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                //retorn el obj sin modificar
                return prod
            }
        })
        //ACTUALIZAR EL CARRITO CON SU NUEVO ARRAY
        setCart(updatedCart)
        //FORMA CORTA
        // setCart(
        //     cart.map((prod)=>{
        //     if(prod.id === item.id){
        //         //sumar cantidades
        //         return {...prod, quantity: prod.quantity + cantidad}
        //     }else{
        //         //retorn el obj sin modificar
        //         return prod
        //     }
        // })
        // )
    }else{
        //se agrega el producto nuevo

        setCart([...cart, {...item, quantity:cantidad}])
    }
   }

 
    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    }

     //eliminar un item del carrito
   const removeItem = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
   }

   //tiene que devolver un booleano si esta o no en el carrito
   const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
   }

   //cantidad de items en el carrito que la van a usar en CartWidget
   const cartQuantity = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
   }

   //total a pagar
   const cartTotal = () => {
    return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
   }
//opcional
//    const totalConImpuestos = () => {
//     return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),5)
//    }
    return(
        <CartContext.Provider value={{cart, addItem, clearCart,removeItem, cartQuantity, cartTotal}}>
              {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}