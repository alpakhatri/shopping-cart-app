import React, {Component} from 'react';
import { connect } from 'react-redux';
import Item from './Item/Item';
import * as actionTypes from '../../store/actions'

import classes from './Items.css';

class items extends Component {
    render () {
        let item = this.props.itemsList.map((value, index) => {
            return <Item key={value.id}
                        name={value.name}
                        price={value.price}
                        type={value.type}
                        discount={value.discount}
                        imgSrc={value.img_url}
                        addToCartHandler={this.props.addCartHandler}
                    />
        });

        return (
            <div className={classes.items}>
                {item}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemsList: state.itemsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCartHandler: () => dispatch({type: actionTypes.ADD_TO_CART})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(items);
