import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../utils/promises";
import {ItemDetail} from "../Item/ItemDetail";
import { unknownItem } from "../data/unknown";

export const ItemDetailContainer = () => {

    let [productState, setProductState] = useState([{}, false])
    let {itemId} = useParams();
    console.log(unknownItem);
    useEffect(
        () => {
            getStock(true).then(
                (res) => {
                    let temp = res.filter((elem) => elem.id === itemId);
                    if (temp.length > 0){setProductState([temp[0], true])}
                    else {setProductState([unknownItem, true])}
                }
            ).catch(
                (res) => {
                    console.log(res);
                    setProductState([{}, false]);
                }
            )
        },
        [itemId]
    )
    return(
        productState[1]?
            <ItemDetail product={productState[0]}/>
            :<h2>Loading..</h2>
    )
}