import { Badge } from "react-bootstrap";
import {  IoCartSharp } from "react-icons/io5";

const CartWidgetReactIcons = () =>{
    return(
        <div>
            <IoCartSharp fontSize={'1.5rem'} />
            <Badge bg="danger">8</Badge>
        </div>
    )
}
export default CartWidgetReactIcons