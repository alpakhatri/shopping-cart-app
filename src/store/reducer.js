import * as actionTypes from './actions';
import { itemsList } from '../assets/data/data';

const initialState = {
    itemsList: itemsList,
    shoppingCart: [{
        id: 9090,
        name: "Item1",
        price: 200,
        discount: 10,
        type: "fiction",
        img_url: "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
        quantity: 2
    }, {
        id: 9091,
        name: "Item2",
        price: 250,
        discount: 15,
        type: "literature",
        img_url: "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
        quantity: 1
    }, {
        id: 9092,
        name: "Item3",
        price: 320,
        discount: 5,
        type: "literature",
        img_url: "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
        quantity: 3
    },],
    totalPrice: 0,
    totalDiscount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return state;
    }
    return state;
};

export default reducer;
