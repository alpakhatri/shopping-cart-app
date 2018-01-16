import React from 'react';
import classes from './Order.css';

const order = ( props ) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ing => {
        if (ing.amount != 0) {
            return (
                <span key={ing.name}
                        style={{
                            margin: '0 8px',
                            border: '1px solid #ccc',
                            textTransform: 'capitalize',
                            padding: '5px',
                            display: 'inline-block'
                        }}
                    >
                    {ing.name} ({ing.amount})
                </span>       
                );
            }
    });

    return (
        <div className={classes.Order}>
            Ingredients: {ingredientOutput}
            <p>Price <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;