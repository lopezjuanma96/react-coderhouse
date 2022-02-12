import {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({min = 0, max}) => {

    const [cant, cantState] = useState(0);
    const handleSuma = (e) => {
        e.stopPropagation();
        //console.log(e);
        cant < max && cantState(cant + 1);
    }
    const handleResta = (e) => {
        e.stopPropagation();
        //console.log(e);
        cant > min && cantState(cant - 1);
    }

    return (
        <div className="addToCartCounter">
            <button onClick={handleResta} className="addToCartButton">-</button>
            <p>{cant}</p>
            <button onClick={handleSuma}className="addToCartButton">+</button>
        </div>
    )
}