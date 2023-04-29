import { Box, Typography } from "@mui/material";
import { type ReactElement } from "react";

import { useAppSelector } from "../../../store";

const SidebarUser = (): ReactElement => {
  const userState = useAppSelector((state) => state.userReducer.user);

  return (
    <Box px={2} py={3} display='flex' alignItems='center'>
      <Box>
        <Typography color='white' fontWeight='bold'>
          {userState?.username}
        </Typography>
        <Typography
          color='secondary.light'
          fontSize='small'
          fontWeight={500}
          textTransform='capitalize'>
          {userState?.role.toLowerCase()}
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarUser;
