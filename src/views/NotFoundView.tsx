import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const NotFoundView = (): ReactElement => {
  const navigate = useNavigate();

  const handleHistoryBack = (): void => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>Page Not Found | ProducerStation</title>
      </Helmet>
      <Box height='100%'>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            fontSize={120}
            fontWeight={700}
            color='primary'
            lineHeight='120px'>
            404
          </Typography>
          <Typography mb={4} fontWeight={600}>
            NOT FOUND
          </Typography>
          <Button
            variant='contained'
            startIcon={<ArrowBack />}
            onClick={handleHistoryBack}>
            GO BACK
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default NotFoundView;
