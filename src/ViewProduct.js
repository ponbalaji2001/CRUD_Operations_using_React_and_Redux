import { Card, CardMedia, CardActions, CardContent, Typography, Box, CardHeader } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct, updateProduct } from './slices/productSlice';

function ViewProduct(){
  const Products=useSelector((state)=>state.products.productList)
  const dispatch = useDispatch();


  const handleUpdate = (id) => {
    dispatch(updateProduct({id}));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({id}));
  };


  return(
    <Box sx={{ display: 'flex', gap: '20px',justifyContent: 'center' }}>
    {Products.map((product) => (
    <Card  key={product.id} sx={{ width: 345}}>
      <CardHeader
        action={
          <Box>
            <EditIcon sx={{ paddingRight:'10px',color:'grey'}} onClick={()=>handleUpdate(product.id)}/>
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
    ))}
    </Box>
  );
}

export default ViewProduct;
