import { type ReactElement } from "react";
import { Button } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import PublicIcon from "@mui/icons-material/Public";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";

import { useAppSelector } from "../../../store";
import { ProductStatusEnum } from "../../../enum/ProductStatusEnum";
import { StyledWrapper } from "./ProductFormButtons.styles";

interface IProps {
  status: any;
  onUpdate?: () => Promise<void>;
  onSubmit?: () => Promise<void>;
  onPublish?: () => Promise<void>;
  onSuspend?: () => Promise<void>;
}

const ProductFormButtons = ({
  onSubmit,
  onUpdate,
  onPublish,
  onSuspend,
  status,
}: IProps): ReactElement => {
  const isAdmin = useAppSelector(
    (state) => state.userReducer.user?.role === "ADMIN",
  );

  const isDisabled = !isAdmin && status !== ProductStatusEnum.DRAFT;

  return (
    <StyledWrapper>
      <Button
        onClick={onUpdate}
        startIcon={<SaveIcon />}
        disabled={isDisabled}
        variant='outlined'>
        Save
      </Button>
      <Button
        variant='contained'
        onClick={onSubmit}
        startIcon={<SendIcon />}
        disabled={isDisabled}>
        Submit To Review
      </Button>
      {isAdmin && (
        <>
          <Button
            variant='contained'
            color='success'
            onClick={onPublish}
            startIcon={<PublicIcon />}>
            Make Public
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={onSuspend}
            startIcon={<NotInterestedIcon />}>
            Suspend
          </Button>
        </>
      )}
    </StyledWrapper>
  );
};

export default ProductFormButtons;
