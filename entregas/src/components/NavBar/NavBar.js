import './NavBar.css'

import { CartWidget } from './CartWidget';

export const NavBar = () => {

    return(
        <div className="navbar">
            <div className="navbar-content">
                <h3 className="navbar-header">La Raquela - Shop</h3>
                <div className="navbar-nav">
                    <p className="navbar-nav-elem">Artesanales</p>
                    <p className="navbar-nav-elem">Regionales</p>
                    <p className="navbar-nav-elem">Combos</p>
                </div>
                <CartWidget/>
            </div>
            <hr/>
        </div>
    );
}