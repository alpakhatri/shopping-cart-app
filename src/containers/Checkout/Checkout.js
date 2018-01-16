import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import ItemQuantity from '../../components/ItemQuantity/ItemQuantity';

import * as actionTypes from '../../store/actions';


import classes from './Checkout.css';

class Checkout extends Component {
    render () {
        return (
            <div >
                <div className={classes.header}>
                    <NavLink to="/">
                        <button className={classes.back}>Back</button>
                    </NavLink>
                    <span>Order Summary</span>
                </div>
                <div className={classes.summaryContainer}>
                    <div className={classes.orderSummary}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Items(6)</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>
                                    <SummaryItem />
                                </td>
                                <td>
                                    <ItemQuantity />
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.orderTotalBox}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
