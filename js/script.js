/* Este proyecto esta estructurado para mi marca de ropa, donde la gente en este portal podra comprar mis productos disponibles en web*/

let datosMail= prompt ("Hola buen dia bienvenido a peepscustom, para formar parte de esta familia te solicitamos que ingreses tu direccion de correo electronico");
console.log (`El email del cliente es `+ datosMail);

let nombre= prompt ("ingresa tu nombre");
let apellido= prompt ("ingresa tu apellido");

let nombrecompleto = nombre + "" + apellido;
alert ("Bienvenido a la familia ", nombrecompleto );

/*let tiempo = `soleado`
if (tiempo == `lluvioso`){
    console.warn (`llevar paraguas`);
}
if (tiempo == `soleado`){
    console.warn (`ir con remera`);
}*/
/*if (tiempo == `lluvioso`){
    console.warn (`llevar paraguas`);
}else{
    console.log (`ir con remera`)
}*/
/*let EdadMinima =18;
if(EdadMinima >= 18){
    console.log (`puede entrar a la disco`);
}else{
    console.warn (`a dormir gil`);
}*/
/*let lenguajeRequerido = `javascript`
let idiomaRequerido = `ingles`

if((lenguajeRequerido ==`javascript`)||(idiomaRequerido==`ingles`)){
    console.log (`felicidades esta contratado`);
}else{
    console.warn (`Debes cumplir con todos los requisitos`);
}*/
/*for(let i=0;i<10;i++){
    if(i==5){
        console.warn("iteracion interrumpida en el ciclo",i, "por la clausula break");
        break;
    }
    alert(i);

} */
/*let i = 1;
while (i<6){
    console.log(`iteracion numero ` +i);
    i++;
}*/

/*let numero=0 
do{
    numero= prompt ("ingresa numero");
    console.log (numero);
} while (parseInt(numero))*/

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

/*function MiFuncion (){
    console.log (uno);
    console.log (dos);
}
MiFuncion();*/

/*function retornarString(){
    console.log (uno);
    console.log (dos);
    return`la funcion devuelve un string de texto`
}
let devuelveValor= (retornarString())*/

/*function saludar(nombre,edad){
    console.log ('Hola, mi nombre es '+nombre+'y tengo '+edad+'culia.');
}
saludar ("juan", "24");*/
/*let auto= `yaris`
function pasear(){
auto= `corrolla`;
function lavar(){
console.log (`Enviar a lavar el `+ auto);
}
lavar()
console.log(`Paseando en el`+ auto)
}
pasear()*/
/*const saludar= nombre => console.log ("hola "+ nombre)
saludar ("juan")*/
/* Arrays */
const prendas= ['remera', 'buzo' , 'pantalon' , 'short']
console.log (prendas.sort().reverse())
/* Objetos literales*/
const remeras=[
{id: 'material', nombre:'jersey 20/1'},
{id: 'talle', nombre:'1/2'},
{id: 'molderia', nombre:'oversize'},
]
for(const remera of remeras){
    console.log(remera.nombre)
}
/* Arrays de objetos */
const carrito = []
const agregarProducto= () => {
    const id = prompt ('Ingresa el tipo de producto')
    const talle= prompt ('Ingresa el talle del producto')
    const carritos={id, talle}
    carrito.push (carrritos)
}
agregarProducto ()
