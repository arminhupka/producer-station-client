import { type ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { StyledWrapper } from "./UploadingCard.styles";
import { useAppSelector } from "../../../store";

interface IProps {
  id: number;
}

const UploadingCard = ({ id }: IProps): ReactElement => {
  const uploadProgress = useAppSelector(
    (state) => state.uploadReducer.nodes,
  ).find((n) => n.id === id)?.uploaded;

  return (
    <StyledWrapper>
      <Typography variant='body2' color='secondary'>
        Uploading something
      </Typography>
      <CircularProgress
        variant='determinate'
        value={uploadProgress ?? 0}
        color='secondary'
      />
    </StyledWrapper>
  );
};

export default UploadingCard;
