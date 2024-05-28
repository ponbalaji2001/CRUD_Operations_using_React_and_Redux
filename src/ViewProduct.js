import { Card, CardMedia, CardActions, CardContent, Typography, Box, CardHeader, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct, updateProduct, getProduct } from './slices/productSlice';
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function ViewProduct(){
  const Products=useSelector((state)=>state.products.productList)
  const selectedProduct = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [productId, setProductId] = useState('');

  const handleGet = (id) => {
    setProductId(id);
    dispatch(getProduct({id}));
    
  };

  useEffect(() => {
    if (selectedProduct.id) {
      setProductId(selectedProduct.id);
      setName(selectedProduct.name);
      setImageURL(selectedProduct.imageURL);
      setPrice(selectedProduct.price);
      setRating(selectedProduct.rating);
      setDescription(selectedProduct.description);
    }
  }, [selectedProduct]);

  const handleClose = (id) => {
    setProductId('');
  };

  const handleUpdate = () => {

    dispatch(updateProduct({id:productId,name, imageURL, description, price, rating}));
    
    setProductId('');
    setName('');
    setImageURL('');
    setPrice('');
    setRating('');
    setDescription('');

  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({id}));
  };


  return(
    <Box sx={{ display: 'flex', flexWrap:'wrap', gap: '20px', justifyContent: 'center'}}>
    {Products.map((product) => (
    <>
    { productId === product.id &&
      <Box
      component="form"
      sx={{
        display: 'flex', flexDirection: 'column',  width: { xs: '90%', sm: '345px' }, background: 'white', border: '1px solid gray',
        justifyContent: 'center', alignItems: 'center', padding: '5px', zIndex: 1, position: 'absolute', 
      }}

      onSubmit={()=>handleUpdate(productId)}
      noValidate
      autoComplete="off"
    >
        <CloseIcon sx={{marginRight:'-300px', color:'gray'}} onClick={handleClose}/>
        <h2 style={{color:'black', margin:'5px'}}>Update Product</h2>
         <TextField sx={{width: '100%', maxWidth: '300px', margin: '5px' }}
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField sx={{width: '100%', maxWidth: '300px', margin: '5px' }}
          id="imageurl"
          label="Image URL"
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '300px', margin: '5px' }}
          id="description"
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '300px', margin: '5px' }}
          id="price"
          label="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '300px',  margin: '5px' }}
          id="rating"
          label="Rating"
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ margin:'5px'}}>
        update
      </Button>
    </Box>}
       <Card  key={product.id} sx={{ minWidth: 280, maxWidth: 300, width: '100%', margin: '10px', padding: '0px' }}>
       <CardHeader
         action={
           <Box>
             <EditIcon sx={{ paddingRight:'10px',color:'grey'}} onClick={()=>handleGet(product.id)}/>
             <DeleteIcon sx={{color:'grey'}} onClick={()=>handleDelete(product.id)}/>
           </Box>   
         }
       />
       <CardMedia
         sx={{ height: 140, objectFit: 'cover' }}
         image={product.imageURL}
         title={product.name}
       />
       <CardContent>
         <Typography gutterBottom variant="h4" component="div">
           {product.name}
         </Typography>
         <Typography variant="body2" color="text.secondary" sx={{fontSize:'17px'}}>
          {product.description}
         </Typography>
       </CardContent>
       <CardActions sx={{ display:'flex', justifyContent:'space-around'}}>
         <Typography gutterBottom variant="h5" component="div">
         &#36;{product.price}
         </Typography>
         <Typography gutterBottom variant="h5" component="div">
         {product.rating}
         </Typography>
       </CardActions>
     </Card> 
  </> ))}
    </Box>
  );
}

export default ViewProduct;
