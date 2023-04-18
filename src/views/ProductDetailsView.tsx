import { type ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ProductDto } from "../api/api-types";
import { type ApiError } from "../api/apiError";
import { api } from "../utils/api";
import FullLoader from "../components/atoms/FullLoader/FullLoader";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/MainLayout";
import ArtworkPlaceholder from "../assets/images/no-image.jpg";

const ProductDetailsView = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate("/panel/products");
    return <></>;
  }

  const query = useQuery<AxiosResponse<ProductDto>, AxiosError<ApiError>>(
    "get-product",
    async () => await api.get<ProductDto>(`/vendor/products/${id}`),
  );

  const product = query?.data?.data;

  if (query.isLoading) {
    return <FullLoader />;
  }

  return (
    <>
      <Helmet>
        <title>{`${query?.data?.data.name ?? ""} | ${
          process.env.REACT_APP_TITLE as string
        }`}</title>
      </Helmet>
      {product && (
        <MainLayout>
          <p>{product.name}</p>
          <img src={product.artwork?.public ?? ArtworkPlaceholder} alt='' />
        </MainLayout>
      )}
    </>
  );
};

export default ProductDetailsView;
