import { Card, CardMedia, CardActions, CardContent, Typography, Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';

function DisplayProducts({ open, productId, handleProductId }){
  const Products=useSelector((state)=>state.products.productList)
 
  const gridColumn = open ? 4 : 3;

  return(
   <Box sx={{ display: 'flex', justifyContent: 'center', width: open ? '70%' : '100%' }} onClick={()=> handleProductId('')}>
    <Grid container spacing={3}  direction="row" justifyContent="start" sx={{ width: open ? '90%' : '85%', padding:'10px' }}>
    {/* <Box sx={{ display: 'flex', flexWrap:'wrap', gap: '30px', justifyContent: 'flex-start', width: open ? '86.4%' : '81.25%',  padding:'10px'}}> */}
    {Products.map((product) => (
       <Grid item xs={12} sm={6} md={4} lg={gridColumn} key={product.id}>
       <Card  key={product.id} sx={{ minWidth: 300, maxWidth: 320, width: '100%',  height:'400px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", 
          border: productId===product.id ? '3px solid #89CFFD' : 'none', '&:hover': { transform: 'scale(1.02)', boxShadow:productId===product.id ? '0px 5px 15px #9DD9F3':'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor:'pointer' }}} onClick={(e)=>{ e.stopPropagation(); handleProductId(product.id) }} >
       <CardMedia
         sx={{ height:'180px', width:"260px", objectFit: 'cover',  objectPosition:'center',  margin:'20px auto' }}
         image={product.imageURL}
         title={product.name}
         alt='Product Image'
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'20px', fontWeight:'550'}}>
           {product.name}
         </Typography>
         <Typography variant="body2" color="text.primary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', fontSize:'14px' }}> 
          {product.description}
         </Typography>
       </CardContent>
       <CardActions sx={{ display:'flex', justifyContent:'space-around'}}>
         <Typography gutterBottom variant="h5" component="div" sx={{ fontSize:'19px', fontWeight:'550', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ color:'#FFBF4D', fontSize: '20px'}}>&#36;</Box>&nbsp;{product.price}
         </Typography>
         <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:'19px', fontWeight:'550', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StarIcon sx={{ fontSize: '22px', color:'#ffd250', marginTop:'-2px' }}/>&nbsp;{product.rating}
         </Typography>
       </CardActions>
     </Card> 
     </Grid>
   ))}
   {/* </Box> */}
   </Grid>
  </Box>
  );
}

export default DisplayProducts;
