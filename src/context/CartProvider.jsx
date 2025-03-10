import { createContext, useReducer } from "react";
export const CartContext = createContext();


const initialState = {
    cartItems:[],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "AddToCart":{
            const isExisting = state.cartItems.find((item) => {
                return item.id === action.payload.id;
            });
            if (isExisting){
                return state;
            }else{
                const newProduct ={...action.payload, qty: 1};
                const newCartItem =[...state.cartItems, newProduct];

                alert (action.payload.name)
                return{
                    ...state,
                    cartItems: newCartItem,
                };
            }
        }

        case "Increment":{
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                  item.qty++;
        }
        return item;
    });

    return{
        
        cartItems: updatedCartItems,
    };
}

        case "Decrement":{
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id && item.qty>1) {
                    item.qty--;
                }
                return item;
              });
              
              return {
                ...state,
                cartItems: updatedCartItems,
              };
            }
        

        case "Delete":{
            const filteredCartItems = state.cartItems.filter(
                (item) => { return item.id !== action.payload.id;
        });
              
              return {
                
                cartItems: filteredCartItems,
              };
            }
        default:{
            return state;
        }
    }
};

//eslint-disable-next-line react/prop-types

export const CartProvider =({children})=>{
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};