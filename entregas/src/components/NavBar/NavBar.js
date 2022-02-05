import './NavBar.css'

import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to='/'>
                    <h3 className="navbar-header">La Raquela - Shop</h3>
                </Link>
                <div className="navbar-nav">
                    <Link to='/productos'className="navbar-nav-elem">Artesanales</Link>
                    <Link to='/nosotros' className="navbar-nav-elem">Regionales</Link>
                    <Link to='/contacto' className="navbar-nav-elem">Combos</Link>
                </div>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </div>
            <hr/>
        </div>
    );
}