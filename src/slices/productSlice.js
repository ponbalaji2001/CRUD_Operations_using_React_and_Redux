import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [
        { 
            id:1,
            name:'Acer Nitro 5 (AN515-43)', 
            description:'AMD Ryzen 5 3550H NVIDIA GeForce GTX 1650 (Laptop) 15.6”, Full HD (1920 x 1080), IPS 1000GB HDD 8GB (1x 8192MB) - DDR4, 2400MHz 2.30 kg (5.1 lbs)', 
            imageURL:'https://laptopmedia.com/wp-content/uploads/2020/01/Acer-Nitro-5-AN515-43-680x527.jpg',
            price:'1209', 
            rating:'7.0'
        },
        { 
          id:2,
          name:'HP OMEN 16', 
          description:'Intel Core i7-11800H NVIDIA GeForce RTX 3050 Ti 16.1″, Full HD (1920 x 1080), 144 Hz, IPS1000GB SSD 2x 8GB DDR4, 3200 MHz 2.37 kg (5.2 lbs)', 
          imageURL:'https://laptopmedia.com/wp-content/uploads/2021/05/1-111-680x549.jpg',
          price:'2155', 
          rating:'6.8'
        },
        { 
            id:3,
            name:'HP Pavilion Gaming 15', 
            description:'AMD Ryzen 5 3550H NVIDIA GeForce GTX 1650 15.6”, Full HD (1920 x 1080), IPS 1000GB HDD 8GB DDR4, 2400 MHz 1.98 kg (4.4 lbs)', 
            imageURL:'https://laptopmedia.com/wp-content/uploads/2019/11/hp-na-gaming-laptop-original-imaftpesbvfxgw9t-680x495.jpeg',
            price:'1055', 
            rating:'7.5'
        },
        { 
            id:4,
            name:'Acer Predator Triton 500 SE', 
            description:'Intel Core i9-12900H NVIDIA GeForce RTX 3080 Ti (Laptop) 16.0", WQXGA (2560 x 1600), 240 Hz, IPS + G-Sync 2000GB SSD 32GB LPDDR5 2.50 kg (5.5 lbs)',
            imageURL:'https://laptopmedia.com/wp-content/uploads/2022/01/1-8-680x536.jpg',
            price:'2119', 
            rating:'7.7'
        },
        { 
            id:5,
            name:'ASUS ZenBook Flip 13 UX362', 
            description:'Intel Core i7-8565U Intel UHD Graphics 620 13.3”, Full HD (1920 x 1080), IPS 512GB SSD 8GB LPDDR3 1.30 kg (2.9 lbs)', 
            imageURL:'https://laptopmedia.com/wp-content/uploads/2018/09/ASUS-ZenBook-Flip-13-UX362-blue-1-680x439.jpg',
            price:'1499', 
            rating:'6.7'
        },
        { 
            id:6,
            name:'Dell Latitude 5530', 
            description:'Intel Core i5-1245U Intel Iris Xe Graphics G7 (80EU) 15.6”, Full HD (1920 x 1080), IPS 512GB SSD 16GB DDR4 1.59 kg (3.5 lbs)',
            imageURL:'https://laptopmedia.com/wp-content/uploads/2022/06/1-3-680x425.jpg',
            price:'1056', 
            rating:'6.8'
        },
        { 
            id:7,
            name:'ASUS ROG Strix G15', 
            description:'AMD Ryzen 7 6800H NVIDIA GeForce RTX 3070 Ti (Laptop, 150W) 15.6", WQHD (2560 x 1440), 165 Hz, IPS + FreeSync 1000GB SSD 16GB DDR5 2.30 kg (5.1 lbs)',
            imageURL:'https://laptopmedia.com/wp-content/uploads/2022/01/1-41-680x484.jpg',
            price:'1995', 
            rating:'7.8'
        },
        { 
            id:8,
            name:'Lenovo ThinkPad E15 Gen 2', 
            description:'Intel Core i3-1115G4 Intel Iris Xe Graphics G4 15.6”, Full HD (1920 x 1080), TN 256GB SSD 8GB DDR4, 3200 MHz 1.70 kg (3.7 lbs)',
            imageURL:'https://laptopmedia.com/wp-content/uploads/2020/09/1-89-e1605169311527.jpg',
            price:'787', 
            rating:'5.8'
        },

        
    ],
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
            const id=state.productList.length + 1;
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