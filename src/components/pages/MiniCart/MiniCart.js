import React, { useRef } from "react";
import { ShoppingBag } from "@mui/icons-material";
import { Badge, Box, Button, Menu, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { showCartProducts, hideCartProducts } from "../../../redux/Cart/action";
import MiniCartProduct from "./MiniCartProduct";

export default function MiniCart() {
  const cartProducts = useSelector((state) => state.cart.product);
  const isOpenCart = useSelector((state) => state.cart.show_products);
  const cartRef = useRef();
  //console.log(cartProducts);

  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(showCartProducts());
  };
  const closeCart = () => {
    dispatch(hideCartProducts());
  };

  return (
    <Box>
      <Button
        onClick={openCart}
        aria-controls="cart-menu"
        id="cart-btn"
        ref={cartRef}
      >
        <Badge badgeContent={cartProducts.length} color="success">
          <ShoppingBag sx={{ fontSize: "30px", color: "#fff" }} />
        </Badge>

        {cartProducts.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Menu
              open={isOpenCart}
              onClose={closeCart}
              id="cart-menu"
              anchorEl={cartRef.current}
              MenuListProps={{
                "aria-labelledby": "cart-btn",
              }}
            >
              {cartProducts.map((product, i) => {
                return <MiniCartProduct product={product} key={i} />;
              })}
            </Menu>
          </Box>
        ) : null}
      </Button>
    </Box>
  );
}
