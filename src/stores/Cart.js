import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    TabStatus: false
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        //Actions like setState
        addToCart(state,action){ //action handler which has curr state:[] and an action object 
            const {productId, quantity} = action.payload; //action.payload contains the data sent with the action, in this case it includes id and qty
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({productId,quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQty(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = (state.items).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state, action){
            if(state.TabStatus === false){
             state.TabStatus = true;   
            } else {
                state.TabStatus = false;
            }
        }
    }
})

export const {addToCart, changeQty, toggleStatusTab} = cartSlice.actions;
export default cartSlice.reducer;