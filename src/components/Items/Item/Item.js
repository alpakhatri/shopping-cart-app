import React from 'react';
import Button from '../../UI/Button/Button';

import classes from './Item.css';

const item = ( props ) => {
    let discount = null;
    let discountedPrice = null;
    if (props.discount !== 0) {
        discount = <label className={classes.discount}>{props.discount}% off</label>;
        const discPrice = props.price - (props.price * (props.discount / 100));
        discountedPrice = <label>${discPrice}</label>;
    }
    return (
        <div className={classes.item}>
            { discount }
            <div className={classes.itemImage}>
                <img src={props.imgSrc} />
            </div>
            <div className={classes.itemInfo}>
                <label className={classes.itemLabel}>{props.name}</label>
                <div className={classes.itemControls}>
                    <div>
                        <label>${props.price}</label>
                        { discountedPrice }
                    </div>
                    <Button clicked={props.addToCartHandler}>Add To Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default item;
