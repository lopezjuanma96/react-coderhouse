import './NavBar.css'

import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

import { categories } from '../data/categories';

export const NavBar = () => {

    console.log(categories)
    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to='/productos'>
                    <h3 className="navbar-header">La Raquela - Shop</h3>
                </Link>
                <div className="navbar-nav">
                    {categories.map( 
                        (elem, i) => {
                            return(
                                <Link key={i} to={'/productos/' + elem} className="navbar-nav-elem">{elem.toUpperCase()}</Link>
                            );
                        }
                    )}
                </div>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </div>
            <hr/>
        </div>
    );
}