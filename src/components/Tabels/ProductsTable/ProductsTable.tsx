import { Search as SearchIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { type VendorProductsListItemDto } from "../../../api/api";
import placeholder from "../../../assets/images/no-image.jpg";
import { formatPrice } from "../../../utils/formatPrice";
import Skeletons from "../../molecules/Skeletons/Skeletons";

enum ProductStatusEnum {
  Draft = "DRAFT",
  Submitted = "SUBMITTED",
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
}

const generateStatus = (status: string): ReactElement => {
  switch (status) {
    case ProductStatusEnum.Draft: {
      return <Chip label={status} color='info' />;
    }
    case ProductStatusEnum.Submitted: {
      return <Chip label={status} color='warning' />;
    }
    case ProductStatusEnum.Active: {
      return <Chip label={status} color='success' />;
    }
    case ProductStatusEnum.Suspended: {
      return <Chip label={status} color='error' />;
    }
    default: {
      return <Chip label={status} />;
    }
  }
};

interface IProps {
  isLoading: boolean;
  data: VendorProductsListItemDto[];
}

const ProductsTable = ({ isLoading, data }: IProps): ReactElement => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Cover</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Sale Price</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading && <Skeletons rows={2} cols={8} />}
        {!isLoading &&
          data.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <Avatar
                  sx={{ width: 48, height: 48, borderRadius: 1 }}
                  src={product.artwork?.public ?? placeholder}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{generateStatus(product.status)}</TableCell>
              <TableCell>
                {product.price != null ? formatPrice(product.price) : "-"}
              </TableCell>
              <TableCell>
                {product.salePrice != null
                  ? formatPrice(product.salePrice)
                  : "-"}
              </TableCell>
              <TableCell>{product.label.name}</TableCell>
              <TableCell>
                {new Date(product.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Link to={`/panel/products/${product._id}`}>
                  <Button
                    component='div'
                    variant='contained'
                    size='small'
                    startIcon={<SearchIcon />}>
                    Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ProductsTable;
