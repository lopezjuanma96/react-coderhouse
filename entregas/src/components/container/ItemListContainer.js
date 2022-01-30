import './ItemListContainer.css'

import { ItemList } from '../Item/ItemList';

export const ItemListContainer = ({greeting}) => {
    return(
        <>
            <div className="header">
                <h2 className="headerTitle">{greeting}</h2>
            </div>
            <ItemList/>
        </>
    );
}