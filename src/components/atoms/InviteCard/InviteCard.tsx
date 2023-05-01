import { type ReactElement } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const InviteCard = (): ReactElement => (
  <Box mt='auto' p={2}>
    <Box bgcolor='secondary.main' p={2} borderRadius={0.5}>
      <Typography color='secondary.contrastText' fontWeight={600}>
        Invite your friend
      </Typography>
      <Typography my={0.5} color='secondary.contrastText' variant='body2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        dolorum neque quasi.
      </Typography>
      <Button color='primary' variant='contained' size='small'>
        Invite
      </Button>
    </Box>
  </Box>
);

export default InviteCard;
