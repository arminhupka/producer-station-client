import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useMutation } from "react-query";

import {
  type UpdateLabelDto,
  type VendorLabelDetailsResponseDto,
} from "../../../api/api";
import { type ApiError } from "../../../api/apiError";
import { LabelStatusEnum } from "../../../enum/LabelStatusEnum";
import { api } from "../../../utils/api";
import ImageUploader from "../../CoverUploader/ImageUploader";

interface IProps {
  data: VendorLabelDetailsResponseDto;
}

const LabelForm = ({ data }: IProps): ReactElement => {
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
  };

  const handleHeaderChange = async (fileId: string): Promise<void> => {
    await mutateAsync({ header: fileId });
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
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Description'
                  rows={8}
                  multiline
                  fullWidth
                  required
                  {...register("description")}
                  helperText={errors.description?.message}
                  error={!!errors.description}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Instagram'
                  fullWidth
                  {...register("instagram")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label='YouTube' fullWidth {...register("youtube")} />
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
            disabled={data.status !== LabelStatusEnum.Draft}
          />
        </Box>
        <Box flex={1}>
          <ImageUploader
            title='Header (required)'
            image={data.header?.public}
            onUpload={handleHeaderChange}
            buttonLabel='Upload Header'
            disabled={data.status !== LabelStatusEnum.Draft}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LabelForm;
