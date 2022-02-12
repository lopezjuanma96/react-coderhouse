import './ItemDetail.css';
import { defaultText } from '../data/unknown';
import { ItemCount } from "./ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../utils/context';

export const ItemDetail = ({loaded, product}) => {
    let {id, nameS: singular, nameP:plural, price, quantity: amt, image:img} = product;

    const {addToCart, isInCart, howMany, changeCartAmount} = useContext(CartContext);
    const [counter, setCounter] = useState(howMany(id));

    const addToCartHandler = () => {
        if(isInCart(id)){
            changeCartAmount(id, counter);
        } else {
            if (counter === 0) return; //don't add if there's nothing to add
            addToCart({id, singular, counter, price});
        }
    }
    return(
        <>
            <div className="itemBlock">
                <img className="itemImage" src={img} alt={id}></img>
                <div className="itemDescriptionBlock">
                    <h2 className="itemName">{amt>1? plural:singular}</h2>
                    <p className="itemDescription">{defaultText}</p>
                </div>
                <div className="itemStockBlock">
                    <p className="itemPrice">${price}</p>
                    <p className="itemStock">En stock: {amt}</p>
                    <div className="addToCartBlock">
                        <ItemCount max={amt} counter={counter} setCounter={setCounter}/>
                        <button className="addToCartButton" onClick={addToCartHandler}>AÑADIR</button>
                    </div>
                </div>
            </div>
        </>
    );
}