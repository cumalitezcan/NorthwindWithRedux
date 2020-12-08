import * as actionTypes from './ActionTypes'

export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}
export function removeFromCart(product){
    return {type:actionTypes.ADD_TO_CART,payload:product}
}