import '../css/TextoBrillante.css' 

const ItemListContainer = ({greeting})=>{
    // const {greeting}= props
    return(
        <div>
            <div className="texto-brillante">
                {greeting}
            </div>
            
        </div>
    )
}
export default ItemListContainer