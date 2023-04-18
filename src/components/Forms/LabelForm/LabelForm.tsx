import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useMutation } from "react-query";

import {
  type UpdateLabelDto,
  type VendorLabelDetailsResponseDto,
} from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";
import ImageUploader from "../../CoverUploader/ImageUploader";
import { useLocation } from "react-router-dom";

interface IProps {
  data: VendorLabelDetailsResponseDto;
  disableEdit: boolean;
}

const LabelForm = ({ data, disableEdit }: IProps): ReactElement => {
  const location = useLocation();

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UpdateLabelDto>();

  const { mutateAsync } = useMutation<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>,
    UpdateLabelDto
  >(
    async ({ avatar, header, name, email, description }) =>
      await api.patch<VendorLabelDetailsResponseDto>(`/labels/${data._id}`, {
        avatar,
        header,
        name,
        email,
        description,
      }),
  );

  const handleAvatarChange = async (fileId: string): Promise<void> => {
    await mutateAsync({ avatar: fileId });
    window.location.href = location.pathname;
  };

  const handleHeaderChange = async (fileId: string): Promise<void> => {
    await mutateAsync({ header: fileId });
    window.location.href = location.pathname;
  };

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
      <Box mb={2}>
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
      </Box>
      <Box mb={2}>
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
      </Box>
      <Box display='flex' gap={2}>
        <Box>
          <ImageUploader
            title='Avatar (required)'
            image={data.avatar?.public}
            onUpload={handleAvatarChange}
            buttonLabel='Upload Avatar'
            disabled={disableEdit}
          />
        </Box>
        <Box flex={1}>
          <ImageUploader
            title='Header (required)'
            image={data.header?.public}
            onUpload={handleHeaderChange}
            buttonLabel='Upload Header'
            disabled={disableEdit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LabelForm;
