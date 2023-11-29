import { Typography } from "@mui/material";
import { Card, CardContent, Typography } from '@material-ui/core';

const Product = ({ product }) => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography color="textSecondary">{product.price}</Typography>
        </CardContent>
      </Card>
    );
  };

    export default Product;