import {
  type ChangeEvent,
  type MutableRefObject,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import WaveSurfer from "wavesurfer.js";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Typography from "@mui/material/Typography";
import useChunkedUploader from "../../../hooks/useChunkedUploader";
import { useMutation } from "react-query";
import { type ProductDto, type UpdateProductDto } from "../../../api/api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "../../../api/apiError";
import { updateProduct } from "../../../api/queries";

interface IProps {
  productId: string;
  audioUrl: string | undefined;
  onRefetch: () => void;
}

const AudioPreviewUploader = ({
  productId,
  audioUrl,
  onRefetch,
}: IProps): ReactElement => {
  const {
    upload,
    isUploaded,
    uploadedFileDetails,
    uploading,
    uploadedPercents,
    reset,
  } = useChunkedUploader();
  const theme = useTheme();
  const wavesurferRef = useRef<WaveSurfer | null>();
  const fileInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const wavesurferOptions = {
    container: "#waveform",
    waveColor: theme.palette.secondary.main,
    progressColor: theme.palette.secondary.dark,
    height: 50,
    barWidth: 3,
    barRadius: 3,
    barGap: 3,
    responsive: true,
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "same-origin",
      redirect: "follow",
      referrer: "client",
    },
  };

  const mutate = useMutation<
    ProductDto,
    AxiosError<ApiError>,
    UpdateProductDto
  >(async (form) => await updateProduct(productId, form), {
    onSuccess: () => {
      onRefetch();
      // navigate(location.pathname);
    },
  });

  const handlePlay = async (): Promise<void> => {
    if (!wavesurferRef.current) return;

    if (wavesurferRef.current.isPlaying()) {
      setIsPlaying(false);
      wavesurferRef.current.pause();
    } else {
      setIsPlaying(true);
      await wavesurferRef.current.play();
    }
  };

  const handleUpload = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    await upload(e);
  };

  useEffect(() => {
    if (!audioUrl) return;

    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create(wavesurferOptions);
      wavesurferRef.current?.load(audioUrl);

      wavesurferRef.current?.on("loading", () => {
        setIsLoading(true);
      });

      wavesurferRef.current?.on("ready", () => {
        setIsLoading(false);
      });
    }

    return () => {
      wavesurferRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (isUploaded && uploadedFileDetails) {
      mutate.mutate({
        audioPreview: uploadedFileDetails._id,
      });
      if (wavesurferRef.current) {
        wavesurferRef.current?.destroy();
        wavesurferRef.current = WaveSurfer.create(wavesurferOptions);
        wavesurferRef.current?.load(uploadedFileDetails.public);
      }
      reset();
    }
  }, [isUploaded]);

  useEffect(() => {
    if (uploading && wavesurferRef.current) {
      setIsPlaying(false);
      wavesurferRef.current?.stop();
      wavesurferRef.current?.destroy();
    }
  }, [uploading]);

  return (
    <Card>
      <Box p={2}>
        <Typography component='h3' fontWeight={600}>
          Audio Preview
        </Typography>
      </Box>
      <Divider />
      {(uploading || isLoading) && (
        <Box p={2} display='flex' justifyContent='center'>
          <CircularProgress value={uploadedPercents} />
        </Box>
      )}
      {!uploading && (
        <Box p={2} display='flex' gap={2} alignItems='center'>
          <IconButton onClick={handlePlay} color='primary'>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <Box flex={1}>
            <div id='waveform' style={{ width: "100%" }} />
          </Box>
        </Box>
      )}
      <Divider />
      <Box p={2}>
        <input
          type='file'
          ref={fileInputRef}
          accept='.mp3'
          onChange={handleChange}
          hidden
        />
        <Button
          variant='contained'
          fullWidth
          onClick={handleUpload}
          disabled={uploading}>
          Upload Audio Preview
        </Button>
      </Box>
    </Card>
  );
};

export default AudioPreviewUploader;
