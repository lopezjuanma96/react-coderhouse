import { stock } from "./stock";
import { useEffect } from "react";

export const ItemList = () => {

    const dep_arr = [];
    useEffect( 
        () => {
            console.log("Products Loaded.");
        },
        dep_arr
    )

    return (
        JSON.stringify(stock)
    );
}