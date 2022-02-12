import './ItemCount.css';

export const ItemCount = ({min = 0, max, counter, setCounter}) => {

    const handleSuma = (e) => {
        e.stopPropagation();
        //console.log(e);
        counter < max && setCounter(counter + 1);
    }
    const handleResta = (e) => {
        e.stopPropagation();
        //console.log(e);
        counter > min && setCounter(counter- 1);
    }

    return (
        <div className="addToCartCounter">
            <button onClick={handleResta} className="addToCartButton">-</button>
            <p>{counter}</p>
            <button onClick={handleSuma}className="addToCartButton">+</button>
        </div>
    )
}