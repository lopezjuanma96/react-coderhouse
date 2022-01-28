import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="header">
            <h2 className="headerTitle">{greeting}</h2>
        </div>
    );
}