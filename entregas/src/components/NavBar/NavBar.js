import './NavBar.css'

import { CartWidget } from './CartWidget';

export const NavBar = () => {

    return(
        <div className="navbar">
            <div className="navbar-content">
                <h3 className="navbar-header">Shop</h3>
                <div className="navbar-nav">
                    <p className="navbar-nav-elem">Categoría 1</p>
                    <p className="navbar-nav-elem">Categoría 2</p>
                    <p className="navbar-nav-elem">Categoría 3</p>
                </div>
                <CartWidget/>
            </div>
            <hr/>
        </div>
    );
}