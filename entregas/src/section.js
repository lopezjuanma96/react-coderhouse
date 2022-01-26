const Section = () => {
    return(
        <section>
            <h1>Hola papá</h1>
            <h2>Soy re copada</h2>
        </section>
    );
}

//permite exportar funciones, y agregarle el default significa que la exporta si no se pide ninguna

/*SUGAR SYNTAX*/

/*Reemplaza operadores complejos con cuestiones más simples. 
Suelen surgir de solicitudes y críticas de la comunidad.
Ej: Operador Ternario, Destructuración (ver nivelación) */

/* EJEMPLOS

Operacion ++
i++ -> i = i + 1 

Opeacion spread: simil * de pyhton
[a].push(b).push(c).push(d) -> [a, ..arr] (donde arr=[b,c,d])

Propiedades dinamicas: poder acceder o crear propiedades con strings que puedan modificarse dinamicamente
First = {foo:"bar", no1: true}       for (a of [First, Second, Third]){
Second = {foo:"bar", no2: true}  ->      a = {foo:"bar", ["no" + i]: true}
Third = {foo:"bar", no3: true}           i++}

Propiedades dinamicas 2
persona.nombre -> persona["nombre"]

Deep 
VER FILMINAS

Asignar en desestructuración
VER FILMINAS

constructores de clases -> ver filmina

*/

/*RETROCOMPATIBILIDAD: Usar herramientas como Babel para mantener nuestra app en navegadores viejos también. */
/*EJ: babel https://babeljs.io/, ver filmina para ver como implementar con npm (creo que se implementa
automaticamente con react)*/

/*Modulos
En un archivo js puedo hacer un export de una o más (incluso todas) las funciones y objetos y luego importarlas
en otro archivo

Para eficientizar el proceso de modulacion, se usan herramientas como webpack  que enpaquetan varios archivos con
conextiones entre ellos en uno solo. se corre automaticamente con React.
*/

/* Si queremos modificar como React maneja algun paquete como webpack o babel, podemos hacer npm run eject para 
extraer una funcion o paquete y reimplementarlo nosotros, bajo el riesgo que nosotros mismos debamos mantenerlo
actualizado y compatible con nuestro codigo, en general no se hace*/

/* TRANSPILACIÓN: Conversión de código de un lenguaje a otro. 
ejemplo: Typescript a Javascript, JavascriptXML a Javascript.

React usa JavascriptXML o JSX para poder poner los bloques de html 
en los retornos de las funciones, antes era necesario que los archivos JS de React 
tuvieran extension .jsx, ahora queda implicito en el .js también.
Por esa razon usamos el atributo className en las etiquetas del JSX en vez de class,
ya que el JSX se pasa a JS y en JS class ya tiene una funcion reservada, otros ejemplos
son for, if, etc.*/

//Abriendo llaves dentro del código JSX puedo incluir código JS
//(fuera del return React usa JS, no JSX, o sea que {} solo hace falta dentro del return)

//los estilos pueden pasarse como un objeto con la sintaxis apropiada (las propiedades son camel y los valores strings)
//de todas maneras para los estilos estaticos conviene usar una hoja de estilos
// o incluso en dinamicos usar distintas clases y que el JS o JSX cambie la clase asignada y no todo el estilo

/*
en HTML las etiquetas autocerradas no requerian obligatoriamente la /, pero en JSX son necesarias.
<img src="ackl"> -> ERROR DE COMPILACION
<img src="ackl"/> -> bien
<img src="ackl"></img> ->bien
*/

/*
En Vanilla JS, evitabamos usar eventos en HTML, lo haciamos en JS (incluso jquery)
En JSX si se usa mucho pero el nombre del atributo del evento asociado es con Camelcase
*/

function JsAndJsx() {

    const lista = [1,2,3,4,5]
    const cool = {color : "violet", backgroundColor : "red"}

    return(
        <section>
            <h1 style={cool}>{Math.max(...lista)}</h1>
            <button onClick={()=>{console.log("Click")}}><b>click me</b></button>
        </section>
    );
}

export {Section, JsAndJsx};



