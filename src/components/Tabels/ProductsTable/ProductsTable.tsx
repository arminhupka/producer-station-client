import { Search as SearchIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Chip,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { VendorProductsListItemDto } from "../../../api/api";
import placeholder from "../../../assets/images/no-image.jpg";
import { formatPrice } from "../../../utils/formatPrice";

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

const ProductsTable = ({ isLoading, data }: IProps) => (
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
        {isLoading && (
          <>
            <TableRow>
              <TableCell>
                <Skeleton variant='rectangular' width={90} height={90} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant='rectangular' width='100%' height={20} />
              </TableCell>
            </TableRow>
          </>
        )}
        {!isLoading &&
          data.length > 0 &&
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
                <Link to={`/panel/product/${product._id}`}>
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
