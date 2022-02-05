import './ItemListContainer.css'
import { getStock } from '../utils/promises';
import { categories } from '../data/categories';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

import { ItemList } from '../Item/ItemList';

export const ItemListContainer = ({greeting}) => {
    
    let [stockState, setStock] = useState([[], false]);
    let {catId} = useParams();

    //console.log(catId);
    //console.log(stockState);

    useEffect( 
        () => {
            setStock([{}, false]) //this will render a loading when changing from categories
            getStock(true).then( 
                (res) => {
                    console.log("Products Loaded successfully");
                    setStock([
                        catId ? res.filter((elem) => elem.category === catId)
                            :res, 
                        true
                    ]);
                } 
            ).catch(
                (res) => {
                    console.log("Products Loading failed due to");
                    console.log(res);
                    setStock([[], false]);
                }
            )
        },
        [catId]
    )

    return(
            categories.find((elem) => elem === catId) || !catId?
                <>
                <div className="header">
                    <h2 className="headerTitle">{catId?greeting + " " + catId + "!": greeting}</h2>
                </div>
                <ItemList loaded={stockState[1]} stock={stockState[0]}/>
                </>
                :
                <div className="header">
                    <h2 className="headerTitle">{catId + " no es una categoría válida"}</h2>
                </div>
    );
}