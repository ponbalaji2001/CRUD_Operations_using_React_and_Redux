import { Box, TextField, Button  } from '@mui/material';
import { useDispatch } from "react-redux"
import { addProduct } from './slices/productSlice';
import { useState } from 'react';

function AddProduct(){
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct({ name, imageURL, description, price, rating }));
    
    setName('');
    setImageURL('');
    setPrice('');
    setRating('');
    setDescription('');

 };

 
  return(
    <Box
      component="form"
      sx={{display:'flex', flexDirection:'column', background:'#f0f0f0', width:'500px',
        justifyContent:'center', alignItems:'center', padding:'20px', margin: '0 auto 20px',
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
        <h2 style={{color:'black'}}>Add Product</h2>
         <TextField sx={{width:'500px', margin:'10px'}}
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField sx={{width:'500px', margin:'10px'}}
          id="imageurl"
          label="Image URL"
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
         <TextField sx={{width:'500px', margin:'10px'}}
          id="description"
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <TextField sx={{width:'500px', margin:'10px'}}
          id="price"
          label="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         <TextField sx={{width:'500px', margin:'10px'}}
          id="rating"
          label="Rating"
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{marginTop:'10px'}}>
        Submit
      </Button>
    </Box>
  );
}

export default AddProduct;
