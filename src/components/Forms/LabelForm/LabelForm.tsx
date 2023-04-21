import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
// import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";
// import { useMutation } from "react-query";
import {
  type UpdateLabelDto,
  type VendorLabelDetailsResponseDto,
} from "../../../api/api-types";
import ImageUploader, {
  AspectEnum,
} from "../../molecules/ImageUploader/ImageUploader";
// import { type ApiError } from "../../../api/apiError";
// import { api } from "../../../utils/api";

// import { useLocation } from "react-router-dom";

interface IProps {
  data: VendorLabelDetailsResponseDto;
  disableEdit: boolean;
}

const LabelForm = ({ data, disableEdit }: IProps): ReactElement => {
  // const location = useLocation();

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UpdateLabelDto>();

  // const { mutateAsync } = useMutation<
  //   AxiosResponse<VendorLabelDetailsResponseDto>,
  //   AxiosError<ApiError>,
  //   UpdateLabelDto
  // >(
  //   async ({ avatar, header, name, email, description }) =>
  //     await api.patch<VendorLabelDetailsResponseDto>(`/labels/${data._id}`, {
  //       avatar,
  //       header,
  //       name,
  //       email,
  //       description,
  //     }),
  // );

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("email", data.email);
      setValue("description", data.description);
      setValue("facebook", data.socials.facebook);
      setValue("instagram", data.socials.instagram);
      setValue("youtube", data.socials.youtube);
    }
  }, [data]);

  return (
    <Box component='form'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' gap={2}>
            <ImageUploader
              aspect={AspectEnum.square}
              defaultImage={data.avatar?.public}
              isLoading={false}
            />
            <ImageUploader
              aspect={AspectEnum.wide}
              defaultImage={data.header?.public}
              isLoading={false}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={{ marginBottom: 2 }}>
            <Box p={2}>
              <Typography mb={2} fontWeight={600} variant='h6'>
                Label Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label='Name'
                    fullWidth
                    {...register("name")}
                    helperText={errors.name?.message}
                    error={!!errors.name}
                    disabled={disableEdit}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='E-Mail'
                    fullWidth
                    {...register("email")}
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    disabled={disableEdit}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Description'
                    rows={3}
                    multiline
                    fullWidth
                    required
                    {...register("description")}
                    helperText={errors.description?.message}
                    error={!!errors.description}
                    disabled={disableEdit}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Paper sx={{ marginBottom: 2 }}>
            <Box p={2}>
              <Typography mb={2} fontWeight={600} variant='h6'>
                Social Media
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label='Facebook'
                    fullWidth
                    {...register("facebook")}
                    disabled={disableEdit}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Instagram'
                    fullWidth
                    {...register("instagram")}
                    disabled={disableEdit}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='YouTube'
                    fullWidth
                    {...register("youtube")}
                    disabled={disableEdit}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LabelForm;
