import {
  Box,
  Button,
  Chip,
  Paper,
  Skeleton,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { VendorLabelResponseDto } from "../../../api/api";
import NoImagePlaceholder from "../../../assets/images/no-image.jpg";
import { LabelStatusEnum } from "../../../enum/LabelStatusEnum";

interface IProps {
  data: VendorLabelResponseDto[];
  isLoading: boolean;
}

const ChipStyle: SxProps<Theme> = {
  fontSize: 11,
  fontWeight: 700,
};

const generateStatus = (status: string): ReactElement => {
  switch (status) {
    case LabelStatusEnum.Draft: {
      return <Chip label={status} color='info' sx={ChipStyle} />;
    }
    case LabelStatusEnum.Submitted: {
      return <Chip label={status} color='warning' sx={ChipStyle} />;
    }
    case LabelStatusEnum.Active: {
      return <Chip label={status} color='success' sx={ChipStyle} />;
    }
    case LabelStatusEnum.Suspended: {
      return <Chip label={status} color='error' sx={ChipStyle} />;
    }
    default: {
      return <Chip label={status} />;
    }
  }
};

const GhostProduct = (): ReactElement => (
  <TableRow>
    <TableCell width='64'>
      <Skeleton variant='rounded' width={64} height={64} />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
      <Skeleton />
    </TableCell>
  </TableRow>
);

const LabelsTable = ({ data, isLoading }: IProps): ReactElement => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Products</TableCell>
          <TableCell>Commission rate</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading && (
          <>
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
          </>
        )}
        {!isLoading &&
          data &&
          data.map((label) => (
            <TableRow key={label._id}>
              <TableCell width={64}>
                <Box
                  width={64}
                  height={64}
                  overflow='hidden'
                  sx={{
                    borderRadius: 0.5,
                    overflow: "hidden",
                  }}>
                  <img
                    src={label.avatar ?? NoImagePlaceholder}
                    alt=''
                    width='100%'
                    height='auto'
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>{label.name}</Typography>
              </TableCell>
              <TableCell>
                <Chip label={20} sx={ChipStyle} />
              </TableCell>
              <TableCell>
                <Chip label={`${label.commissionRate}%`} sx={ChipStyle} />
              </TableCell>
              <TableCell>{generateStatus(label.status)}</TableCell>
              <TableCell>{new Date(Date.now()).toLocaleString()}</TableCell>
              <TableCell>
                <Link to={`/panel/labels/${label._id}`}>
                  <Button component='div' variant='contained' size='small'>
                    {label.status !== "Draft" ? "Edit" : "Details"}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Paper>
);

export default LabelsTable;
