import { Search as SearchIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  type SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  type Theme,
} from "@mui/material";
import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { type VendorProductsListItemDto } from "../../../api/api-types";
import placeholder from "../../../assets/images/no-image.jpg";
import { formatPrice } from "../../../utils/formatPrice";
import Skeletons from "../../molecules/Skeletons/Skeletons";

enum ProductStatusEnum {
  Draft = "DRAFT",
  Submitted = "SUBMITTED",
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
}

const ChipStyle: SxProps<Theme> = {
  fontSize: 11,
  fontWeight: 700,
  textTransform: "capitalize",
};

const generateStatus = (status: string): ReactElement => {
  const transformed = status[0].toLowerCase() + status.slice(1).toLowerCase();

  switch (status) {
    case ProductStatusEnum.Draft: {
      return <Chip sx={ChipStyle} label={transformed} color='info' />;
    }
    case ProductStatusEnum.Submitted: {
      return <Chip sx={ChipStyle} label={transformed} color='warning' />;
    }
    case ProductStatusEnum.Active: {
      return <Chip sx={ChipStyle} label={transformed} color='success' />;
    }
    case ProductStatusEnum.Suspended: {
      return <Chip sx={ChipStyle} label={transformed} color='error' />;
    }
    default: {
      return <Chip sx={ChipStyle} label={transformed} />;
    }
  }
};

interface IProps {
  isLoading: boolean;
  data: VendorProductsListItemDto[];
}

const ProductsTable = ({ isLoading, data }: IProps): ReactElement => (
  <Paper>
    <Box overflow='auto'>
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
          {isLoading && <Skeletons rows={10} cols={8} />}
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
                  {product.price != null
                    ? formatPrice(product.price, true)
                    : "-"}
                </TableCell>
                <TableCell>
                  {product.salePrice != null
                    ? formatPrice(product.salePrice, true)
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
    </Box>
  </Paper>
);

export default ProductsTable;
