import { stock } from "./stock";
import { useEffect, useState } from "react";
import { Item } from "./Item";

export const ItemList = () => {

    let [loaded, setLoaded] = useState(false)
    const dep_arr = [];

    useEffect( 
        () => {
            getStock(true).then(
                (res) => {
                    console.log(res);
                    setLoaded(true);
                } 
            ).catch(
                (res) => {
                    console.log(res);
                    setLoaded(false);
                }
            )
        },
        []
    )

    return (
        <>
            <div>
                {loaded? stock.map(
                    (el) => <Item key={el.id} product={el}/> //if arrow function is only one line it doesn't need {} and return is implicit
                    ):<h2>Loading</h2>
                }
            </div>
        </>
    );
}

const getStock = (success) => {
    const promis = new Promise(
        (resolve, reject) => {
            setTimeout( //this would be replaced with getting the values from the API
                () => {
                    if(success){
                        resolve("Products Loaded successfully"); //resolve could return the value from the API
                    } else {
                        reject("Products Loading failed");
                    }
                },
                2000
            )
        }
    )
    console.log("Promise Created.")

    return promis;
}