import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Items from '../../components/Items/Items';


import classes from './Cart.css';

class Cart extends Component {

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.cartHeader}>
                    <span>All Items</span>
                    <NavLink to="/checkout">
                        <Button className={classes.GoToCartButton}>Go to Cart</Button>
                    </NavLink>
                </div>
                <div id="itemsContainer">
                    <Items />
                </div>
            </div>
        )
    }

}

export default Cart;
