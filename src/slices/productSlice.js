import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: []
};

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            const id=Math.random()*100;
            let product={...action.payload,id};
            state.productList.push(product);
        },

        updateProduct:(state, action)=>{
            state.productList=state.productList.map((product)=>
                product.id === action.payload.id ? action.payload : product
            );

            return state;
        },

        deleteProduct:(state,action)=>{
            state.productList=state.productList.filter((product)=>
                product.id !== action.payload.id 
            );

            return state;

        }
    }
})

export const {addProduct,updateProduct,deleteProduct} = productSlice.actions
export default productSlice.reducer