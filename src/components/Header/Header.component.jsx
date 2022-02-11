import React, { useState } from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  StyledBurger,
  IconsContainer,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon.component";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selector";

const Header = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectHidden);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer open={open}>
        <OptionLink to="/shop" onClick={() => setOpen(!open)}>
          Shop
        </OptionLink>
        <OptionLink to="/contact" onClick={() => setOpen(!open)}>
          Contact
        </OptionLink>

        <OptionLink to="/register" onClick={() => setOpen(!open)}>
          Register
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => signOut(auth)}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/login" onClick={() => setOpen(!open)}>
            Login
          </OptionLink>
        )}
        {/* <CartIcon  /> */}
      </OptionsContainer>

      <IconsContainer>
        <CartIcon />
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </IconsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
