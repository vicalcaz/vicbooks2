const products = [
    {
        id:'01',
        name:'Las ruedas de un alma',
        price:15000,
        description: 'Usado, buen estado. Las ruedas de un alma, de Rabino Berg es un libro que explora la Kabbalah y la reencarnación. En esta obra, el Rabino Berg revela cómo aceptar y explorar las vidas que ya hemos vivido es esencial para comprender la vida que tenemos hoy.                       El libro también aborda temas como el nacimiento, la muerte y la vida después de la muerte, proporcionando una nueva comprensión de las leyes de la reencarnación.',
        stock:6,
        img:'../Las ruedas del alma-Autoayuda.jpg',
        category:'autoayuda',
        seleccionados:'tesoros'
    },
    {
        id:'02',
        name:'Ozonis. En Algún lugar del Universo',
        price:26500,
        description:'El ejemplar es usado, pero se encuentra en muy buenas condiciones. Presenta algunos subrayados, totalmente legible',
        stock:5,
        img:'../Ozonis-CienciaFicción.jpg',
        category:'cienciaficcion',
        seleccionados:'miseleccion'
    },
    {
        id:'03',
        name:'Divergente',
        price:21000,
        stock:2,
        description:'lorem ipsums lore lorem',
        img:'../Divergente-Ficccion.jpeg',
         category:'cienciaficcion',
         seleccionados:'miseleccion',
         otros:'ofertas'
    },
    {
        id:'04',
        name:'La ciudad cambió la voz',
        price:15000,
        stock:3,
        description:'lorem lore lorem',
        img:'../La_Ciudad_Cambio_la_Voz_Slide-Novela.jpg',
        category:'ficcion',
        seleccionados:'novela',
        otros:'ofertas'
    },
    {
        id:'05',
        name:'Cementerio de animales',
        price:27000,
        stock:3,
        description:'lorem lore lorem',
        img:'../Cementerio de animales-Terror.jpeg',
        category:'terror',
        seleccionados:'clasicos',
        otros:'novedades'
    },
    {    id:'06',
        name:'La ciudad',
        price:38000,
        stock:2,
        description:'Tapa Blanda. Condition: Usado, como nuevo. 1a. ed. : Rosario, 1938. El escritor santafesino por antonomasia escribe la primera novela donde Rosario es la gran protagonista. Sentido del humor y terribles revelaciones sobre el pasado de los rosarinos se encuentran en ella, ya que está ambientada en Rosario, en la segunda mitad del siglo XIX y primera década del XX. Bajo el pseudónimo de Mateo Booz, escribía Miguel Ángel Correa. Fue periodista, escritor y político. Sus obras más conocidas son: "Aleluyas del Brigadier" (1936), "Soldados y almaceneros", "Aquella noche de Corpus" (1942), "El tropel" (1932), "Gente del litoral" (1944), "Tres lagunas" 1953) y "Santa Fe, mi País". 163 Páginas. 210 gr. Libro. Seller Inventory # 0-155642-10',
        img:'../La Ciudad-Infantil.jpg',
        category:'infantil',
        seleccionados:'joyas'
    },
    {    id:'07',
        name:'Cabalgando en un Silbido',
        price:31000,
        stock:1,
        description:`Tanto el título como la portada de esta edición de la obra de Omar Viñole constituyen, posiblemente, una de las expresiones más representativas de la vanguardia gráfica latinoamericana.
                    Omar Viñole fue un poeta, escritor y artista performático argentino de vanguardia verdaderamente único.
                    Su libro CABALGANDO EN UN SILBIDO es una de las obras más raras, bellas e importantes dentro de su vastísima producción.
                    «Oliverio Girondo cuando escribe le levanta las enaguas a la gravedad.
                    Alabado el Standard-Oil, del ingenio de Oliverio Girondo, y Hurrah!!! a su pluma con rulemanes…».
                    Omar Viñole`,
        img:'../Cabalgando_en_un_Silbido-Infantil.jpg',
        category:'novela',
        seleccionados:'tesoros',
        otros:'ofertas'
    }
]
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//LOS ID COMO STRING
export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//SI TENGO LOS IDS COMO NUMBER, PARSEO EL ID QUE VIENE POR PARAMETRO
// export const getOneProduct = (id)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 let oneProduct= products.find((item)=> item.id === Number(id))
//                 let oneProduct= products.find((item)=> item.id === parseInt(id))
//                 resolve(oneProduct)
//             }else{
//                 reject('Hubo un error, intente más tarde')
//             }
//         },3000)
//     })
// }