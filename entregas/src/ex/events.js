//IMPORTANTE: Acordarse de remover eventos cuando se desmonten los objetos que generaron ese evento en particular
//Recordemos que en el useEffect pasamos en return lo que se quiere ejecutar al desmontar
//Siempre tenemos que definir a la funcion porque si la pasamos como anonima despues no la podemos remover

/*

...
    useEffect(() => {
            window.addEventListener('click', () => {console.log('Clickear')}), //esta función no puede removerse
            return () => {window.removeEventListener('click', ???)} //no tengo como nombrarla aca para removerla
        },[]
    )
...

...
    useEffect(() => {
            const clickear = () => {
                console.log('Clickear');
            }
            window.addEventListener('click', clickear), //ahora si puede removerse
            return () => {window.removeEventListener('click', clickear)} //en el remove event tengo que poner tanto el evento como la funcion
        },[]
    )
...

*/


//REACT TIENE UN OBJETO LLAMADO EVENTO SINTETICO QUE GENERA EL EVENTO NATIVO DE JS PERO ADAPTADO A CADA NAVEGADOR:

/*
Synthetic Event

son los que se crean al usar los atributos onClick, .. en los tags Jsx

const clickear = (e) => {
    console.log(e);
    console.log(e.nativeEvnt) //muestra el evento nativo de Js para ese navegador
}

useEffect(() => {
    window.addEventListener('click', (e) => {console.log(e)}); //native
}, []
)

return <div onClick={clickear}></div> //synthetic


STOP PROPAGATION: Los Synthetic event se propagan  a los padres, entonces cuando se asignan a un objeto hijo se agrega en la funcion e.stopPropagation()

Segun la propiedad de Unidirectional Symmetry de React, los datos pasan de padres a hijos y los eventos de hijos a padres
Para hacerlo se suelen crear los eventos (y otros metodos) como atributos en los tags Jsx y que se llamen desde los hijos 
pero al pasar la referencia se ejecutarían en el contexto de los padres, y de los resultados los padres pasarían datos resultantes
nuevamente a los hijos

Por ejemplo

-- en el padre que tiene el producto especifico (ItemDetail)

    const [counter, setCounter] = useState(0);

    ....

    return(
        ...
        <ItemCounter ... counter={counter} setCounter={setCounter} ... />
        ...
    )

-- en el hijo (ItemCounter)

    export const ItemCounter = ({.. counter, setCounter ...}) => {

        const handleAgregar = (e) =>{
            counter > max && setCounter(counter + 1);
        }

        ...

        return(
            ..
            <button onClick={handleAgregar}>+</button>
        )
    }
*/



