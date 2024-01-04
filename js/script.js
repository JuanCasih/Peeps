/* Este proyecto esta estructurado para mi marca de ropa, donde la gente en este portal podra comprar mis productos disponibles en web*/

/* Pedir datos al cliente */
let datosMail= prompt ("Hola buen dia bienvenido a peepscustom, para formar parte de esta familia te solicitamos que ingreses tu direccion de correo electronico");
console.log (`El email del cliente es `+ datosMail);

let nombre= prompt ("ingresa tu nombre");
let apellido= prompt ("ingresa tu apellido");


let nombrecompleto = nombre + " " + apellido;
alert ("Bienvenido a la familia " + nombrecompleto );

/* Calidad de los productos */
let producto = prompt (`Que tipo de producto estas buscando? Buzos, Remeras, Shorts, Pantalones`);
switch(producto){
    case `Buzos`:
    alert(`Nuestros hoodies son frizados y corte boxy`);
    break;
    case`Remeras`:
    alert(`Nuestras remeras son de algodon 20/1`);
    break;
    case `Shorts`:
    alert(`Nuestros shorts son de friza`);
    break;
    case `Pantalones`:
    alert(`nuestros pantalones son de gabardina`);
    break;
    default:
    alert(`no tenemos el producto que estas buscando`);
    break;        
}
/* Carrito de compras */
const productos = [
    { nombre: "Remera", precio: 25 },
    { nombre: "Pantalón", precio: 40 },
    { nombre: "Short", precio: 20 },
    { nombre: "Top", precio: 10 },
    { nombre: "Gorra", precio: 5 },
    { nombre: "Buzo", precio: 60 },
  ];

  let carrito = [];
  let totalCompra = 0;

  function mostrarProductos() {
    console.table(productos);
  }

  function confirmarCompra() {
    const respuesta = confirm("¿Deseas comprar algo de nuestra marca de ropa?");
    if (respuesta) {
      agregarAlCarrito();
    } else {
      alert("¡Esperamos verte pronto! No dudes en visitarnos cuando quieras.");
    }
  }

  function agregarAlCarrito() {
    let continuar = true;
    while (continuar) {
      const seleccion = prompt("Ingrese el número del producto que desea agregar al carrito:\n" + obtenerListaProductos() + "\nIngrese '0' para finalizar.");
      if (seleccion === '0' || seleccion === null) {
        continuar = false;
        mostrarTotalCompra();
      } else {
        const indiceProducto = parseInt(seleccion) - 1;
        if (indiceProducto >= 0 && indiceProducto < productos.length) {
          carrito.push(productos[indiceProducto]);
          totalCompra += productos[indiceProducto].precio;
          console.log(`¡${productos[indiceProducto].nombre} agregado al carrito!`);
        } else {
          alert("Por favor, ingrese un número válido.");
        }
      }
    }
  }

  function obtenerListaProductos() {
    let lista = '';
    productos.forEach((producto, index) => {
      lista += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    return lista;
  }

  function mostrarTotalCompra() {
    if (carrito.length > 0) {
      alert(`Total de la compra: $${totalCompra}. ¡Gracias por confiar en Peeps tus productos han sido agregados al carrito exitosamente!`);
    } else {
      alert("No has agregado ningún producto al carrito. ¡Esperamos verte pronto!");
    }
  }

  mostrarProductos();
  setTimeout(confirmarCompra, 3000);

/* Arrays de objetos */
const arrayDeObjetos=[
    {
        nombre:"Juan",
        edad: 24,
        prendaFavorita: "remeras oversize",
    },
    {
        nombre:"Lucia",
        edad: 21,
        prendaFavorita: "tops",
    },
    {
        nombre:"Facu",
        edad: 27,
        prendaFavorita: "jeans",
    },
]

for (let i= 0; i < arrayDeObjetos.length; i++)
{
    console.log("=====================");
    console.log ("Nombre: " + arrayDeObjetos [i].nombre);
    console.log ("Edad: " + arrayDeObjetos [i].edad);
    console.log ("Prenda favorita: " + arrayDeObjetos [i].prendaFavorita);
}




