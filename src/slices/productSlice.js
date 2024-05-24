import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    selectedProduct:{}
};

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{

        getProduct:(state, action)=>{
            const product=state.productList.find((product) => product.id === action.payload.id);
            state.selectedProduct = product || {};
        },

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

export const {getProduct,addProduct,updateProduct,deleteProduct} = productSlice.actions
export default productSlice.reducer