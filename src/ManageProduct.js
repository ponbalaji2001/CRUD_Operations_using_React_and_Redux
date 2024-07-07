import * as React from 'react';
import { Box, TextField, Button, Drawer, Divider, styled, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from "react-redux"
import { addProduct, updateProduct, getProduct , deleteProduct} from './slices/productSlice';
import { useState, useEffect } from 'react';

function ManageProduct({open, handleDrawerOpen, handleDrawerClose, productId, handleProductId, option, handleProductOption}){
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.products.selectedProduct);

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
 
  const theme = useTheme();

  // Reset Values
  const resetValues=()=>{
    setName('');
    setImageURL('');
    setPrice('');
    setRating('');
    setDescription('');
    handleProductId('');
  }

  useEffect(() => {
    // Get Product
    if((option==='Get' || option==='Update') && productId){
      dispatch(getProduct({id:productId}));
    }
    // Delete Product
    else if(option==='Delete' && productId){
      dispatch(deleteProduct({ id:productId}));
      resetValues();
      handleProductOption('');
    }
  },[option, productId, dispatch, handleProductId, handleProductOption, resetValues])

  
  // Update Form Values
  useEffect(() => {
    if (selectedProduct && selectedProduct.name && option==='Update') {
      setName(selectedProduct.name);
      setImageURL(selectedProduct.imageURL);
      setPrice(selectedProduct.price);
      setRating(selectedProduct.rating);
      setDescription(selectedProduct.description);
    }
  }, [selectedProduct, option]);

  // Update Product
  const handleUpdate = () => {
    dispatch(updateProduct({id:productId,name, imageURL, description, price, rating}));
    handleDrawerClose();
    resetValues();
    handleProductOption('');
  };

  // Add Product
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, imageURL, description, price, rating }));
    resetValues();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (option === 'Add') {
      handleAdd(e);
    } else {
      handleUpdate();
    }
  };

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

 
  return(
  <Box sx={{ height:'100%' }}>
  { !productId && 
    <Button type="submit" variant="contained" color="primary" onClick={()=>{handleDrawerOpen(); handleProductOption('Add')}} sx={{ ...(open && { display: 'none'}), float:'right', margin:'10px',  zIndex:'99', overflow:'hidden' }}>
      <AddIcon />
    </Button>
  }
  { productId && 
    <Button type="submit" variant="contained" color="primary" onClick={()=> handleProductOption('Delete') } sx={{ ...(open && { display: 'none'}), float:'right', margin:'10px',  zIndex:'99', overflow:'hidden' }}>
      <DeleteIcon sx={{fontSize:'22px', padding:'1px' }} />
    </Button> 
  }
  { productId && 
    <Button type="submit" variant="contained" color="primary" onClick={()=>{handleDrawerOpen(); handleProductOption('Update')}} sx={{ ...(open && { display: 'none'}), float:'right', margin:'10px',  zIndex:'99', overflow:'hidden' }}>
      <EditIcon sx={{fontSize:'23px', padding:'1px' }} />
    </Button>
  }
  <Drawer variant="persistent" anchor="right" open={open}
    sx={{ width:'auto', flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 'auto',
      },
    }}
  >
    <DrawerHeader>
      <IconButton onClick={()=>{handleDrawerClose(); resetValues();  handleProductOption('');}}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <Box
      component="form"
      sx={{display:'flex', flexDirection:'column',  width: { xs: '90%', sm: '400px' }, boxShadow:'rgba(100, 100, 111, 0.2) 4px 7px 29px 0px',
        justifyContent:'center', alignItems:'center', padding:'30px', borderRadius:'10px', margin:'20px'
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
        <h2 style={{color:'black'}}>{option} Product</h2>
         <TextField sx={{width:'100%', maxWidth: '500px', margin: '10px'}}
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField sx={{width: '100%', maxWidth: '500px', margin: '10px'}}
          id="imageurl"
          label="Image URL"
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '500px', margin: '10px'}}
          id="description"
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '500px', margin: '10px'}}
          id="price"
          label="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         <TextField sx={{width: '100%', maxWidth: '500px', margin: '10px'}}
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
  </Drawer>
  </Box>
  );
}

export default ManageProduct;
