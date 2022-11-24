import { Avatar, Box, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";

import { useAppSelector } from "../../../store";

const SidebarUser = (): ReactElement => {
  const userState = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    console.log(userState);
  }, []);

  return (
    <Box px={2} py={3} display='flex' alignItems='center'>
      <Avatar
        alt='User'
        src='https://tokyo.bloomui.com/static/images/avatars/3.jpg'
        sx={{
          width: 40,
          height: 40,
        }}
      />
      <Box ml={2}>
        <Typography color='white' fontWeight='bold'>
          {userState?.username}
        </Typography>
        <Typography color='secondary.light' fontSize='small'>
          {userState != null && Array.isArray(userState.role) && userState.role.join(" / ")}
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarUser;
