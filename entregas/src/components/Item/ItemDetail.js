import './ItemDetail.css'
import { defaultText } from '../data/unknown';
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({loaded, product}) => {
    let {id, nameS: singular, nameP:plural, price, quantity: amt, image:img} = product;

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
                        <ItemCount max={amt}/>
                        <button className="addToCartButton">AÑADIR</button>
                    </div>
                </div>
            </div>
        </>
    );
}