import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addtoCart(state, action) {
            const productid = action.payload;
            try{
                const exsit =state.cart.find(
                    (product) => 
                    product.id === productid.id && 
                    product.size === productid.size &&
                    product.color === productid.color
                    );
                    if(exsit){
                        exsit.amount++;
                        exsit.totalPrice += productid.price;
                        state.totalAmount++;
                        state.totalPrice += productid.price;
                    } else {
                        state.cart.push({
                            id: productid.id,
                            price: productid.price,
                            size:productid.size,
                            amount: 1,
                            img: productid.img,
                            totalPrice: productid.price,
                            name: productid.name,
                            text: productid.text,
                            color: productid.color,
                        });
                        state.totalAmount++;
                        state.totalPrice +=productid.price;
                    }
            }catch(err){
                return err;
            }
        },
        removeFromCart(state , action){
            const productid = action.payload;
            try{
                const exsit =state.cart.find(
                    (product) => 
                    product.id === productid.id && 
                    product.size === productid.size &&
                    product.color === productid.color
                    );
                    if(exsit.amount === 1) {
                        state.cart = state.cart.filter(
                            (product)=> 
                            product.id !== productid.id ||
                            product.size !== productid.size ||
                            product.color !== productid.color
                            );
                        state.totalAmount--;
                        state.totalAmount-= productid.price;
                    } else {
                        exsit.amount--;
                        exsit.totalPrice -= productid.price;
                        state.totalAmount--;
                        state.totalPrice -= productid.price;
                    }
            }catch(err){
                return err;
            }
        },
    },
});
export const {addtoCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;