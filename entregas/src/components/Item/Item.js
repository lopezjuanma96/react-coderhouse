
export const Item = ({product}) => {
    
    let {nameS: singular, nameP:plural, price, quantity: amt, image:img} = product;

    return (
        <>
            <h2>{singular}</h2>
            <p>{price}</p>
        </>
    );
}