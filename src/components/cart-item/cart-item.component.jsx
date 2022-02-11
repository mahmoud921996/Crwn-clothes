import React from 'react';
import {CartItemContainer,CartItemImage,ItemDetailsContainer} from './cart-item.styled'

const CartItem = ({item:{imageUrl,price,name,quantity}}) => {
    return (  
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item'>
            </CartItemImage>
            <ItemDetailsContainer>
                <span>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}
 
export default CartItem;