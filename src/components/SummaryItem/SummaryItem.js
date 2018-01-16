import React from 'react';
import classes from './SummaryItem.css';

const summaryItem = ( props ) => {
    return (
        <div className={classes.summaryItem}>
            <img src="https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" ></img>
            <label style={{flexGrow: 2}}>Item 1</label>
            <button>X</button>
        </div>
    );
}

export default summaryItem;
