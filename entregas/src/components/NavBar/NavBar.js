import './NavBar.css'

import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to='/productos'>
                    <h3 className="navbar-header">La Raquela - Shop</h3>
                </Link>
                <div className="navbar-nav">
                    <Link to='/productos/artesanales'className="navbar-nav-elem">Artesanales</Link>
                    <Link to='/productos/regionales' className="navbar-nav-elem">Regionales</Link>
                    <Link to='/productos/combos' className="navbar-nav-elem">Combos</Link>
                </div>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </div>
            <hr/>
        </div>
    );
}