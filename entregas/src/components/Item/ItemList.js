import { Item } from "./Item";

import "./ItemList.css"

export const ItemList = ({loaded, stock}) => {

    return (
        <>
            <div className="productList">
                {loaded? stock.map(
                    (el) => <Item key={el.id} product={el}/> //if arrow function is only one line it doesn't need {} and return is implicit
                    ):<h2>Loading</h2>
                }
            </div>
        </>
    );
}