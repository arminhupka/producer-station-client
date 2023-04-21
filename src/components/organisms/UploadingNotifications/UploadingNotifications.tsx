import { type ReactElement } from "react";
import { useAppSelector } from "../../../store";
import { StyledWrapper } from "./UploadingNotifications.styles";
import UploadingCard from "../../molecules/UploadingCard/UploadingCard";

const UploadingNotifications = (): ReactElement => {
  const uploadingNodes = useAppSelector((state) => state.uploadReducer.nodes);

  return (
    <StyledWrapper>
      {uploadingNodes.map((n) => (
        <UploadingCard key={n.id} id={n.id} />
      ))}
    </StyledWrapper>
  );
};

export default UploadingNotifications;
