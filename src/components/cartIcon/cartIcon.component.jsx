import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cartIcon.styled";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
const CartIcon = () => {
  const itemsCount=useSelector(selectCartItemsCount);
  const dispatch=useDispatch()
  return (
    <CartContainer onClick={()=>dispatch(toggleCartHidden())} isHide>
      <ShoppingIcon>
        <ShoppingCart />
      </ShoppingIcon>
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
