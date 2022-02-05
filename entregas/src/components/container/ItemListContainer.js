import './ItemListContainer.css'
import { stock } from "./stock";
import { useEffect, useState } from "react";

import { ItemList } from '../Item/ItemList';

export const ItemListContainer = ({greeting}) => {
    
    let [stockState, setStock] = useState({});
    let [loaded, setLoaded] = useState(false);
    const dep_arr = [];

    useEffect( 
        () => {
            getStock(true).then(
                (res) => {
                    console.log("Products Loaded successfully");
                    setStock(res);
                    setLoaded(true);
                } 
            ).catch(
                (res) => {
                    console.log("Products Loading failed due to");
                    console.log(res);
                    setStock({});
                    setLoaded(false);
                }
            )
        },
        dep_arr
    )

    return(
        <>
            <div className="header">
                <h2 className="headerTitle">{greeting}</h2>
            </div>
            <ItemList loaded={loaded} stock={stockState}/>
        </>
    );
}

const getStock = (success) => {
    const promis = new Promise(
        (resolve, reject) => {
            setTimeout( //this would be replaced with getting the values from the API
                () => {
                    if(success){
                        resolve(stock); //resolve could return the value from the API
                    } else {
                        reject(stock);
                    }
                },
                2000
            )
        }
    )
    console.log("Promise Created.")

    return promis;
}