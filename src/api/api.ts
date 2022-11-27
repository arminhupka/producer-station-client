/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface NewCategoryDto {
  name: string;
}

export interface CategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export interface UpdateCategoryDto {
  name: string;
}

export interface CreateUserDto {
  /**
   * The name of the User
   * @example "someuser"
   */
  username: string;
  /**
   * The email address of the user
   * @example "example@email.com"
   */
  email: string;
  /**
   * The password of the user to login
   * @example "123456"
   */
  password: string;
  /**
   * User password confirmation to make sure that password is proper
   * @example "123456"
   */
  passwordConfirm: string;
}

export interface ResetPasswordDto {
  email: string;
}

export type ChangePasswordDto = object;

export interface SocialsDto {
  facebook: string | null;
  instagram: string | null;
  youtube: string | null;
  twitter: string | null;
}

export interface NewLabelResponseDto {
  _id: string;
  email: string | null;
  description: string | null;
  socials: SocialsDto;
  status: string;
  name: string;
  slug: string;
}

export interface NewLabelDto {
  name: string;
}

export type LabelUpdateDto = object;

export type NewOrderDto = object;

export interface PublicProductLabelDto {
  /**
   * Label ID
   * @example "6369137dabd2e0f83c522dbb"
   */
  _id: string;
  /**
   * Label name
   * @example "Digikitz Supreme"
   */
  name: string;
  /**
   * Label slug
   * @example "digikitz-supreme"
   */
  slug: string;
}

export interface PublicProductDto {
  /**
   * Product ID
   * @example "63700de7bcd89177014b25e4"
   */
  _id: string;
  /**
   * Product price
   * @example 1499
   */
  price: number | null;
  /**
   * Product sale price
   * @example 999
   */
  salePrice: number | null;
  /**
   * Describe does product is free
   * @example false
   */
  isFree: boolean;
  /**
   * Describe does product is featured
   * @example true
   */
  featured: boolean;
  /**
   * Product name
   * @example "Orchestrap VST"
   */
  name: string;
  /**
   * Product slug
   * @example "orchestrap-vst"
   */
  slug: string;
  /**
   * Describe does product is new
   * @example true
   */
  isNew: boolean;
  /** Assigned label */
  label: PublicProductLabelDto;
}

export interface GetAllProductsResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: PublicProductDto[];
}

export interface VendorProductLabelDto {
  /** @example "636c21cc5783d2a6aabfcf08" */
  _id: string;
  /** @example "Digikitz" */
  name: string;
  /** @example "digikitz" */
  slug: string;
}

export interface NewProductResponseDto {
  /** @example "636c21cc5783d2a6aabfcf08" */
  _id: string;
  /** @example "Draft" */
  status: string;
  /** @example "" */
  shortDescription: string;
  /** @example "" */
  description: string;
  /** @example null */
  price: number | null;
  /** @example null */
  salePrice: number | null;
  /** @example false */
  isFree: boolean;
  /** @example [] */
  category: string[];
  label: VendorProductLabelDto;
}

export interface CreateProductDto {
  /**
   * Label ID
   * @example "636f88380ae0f71ce1f7ffc4"
   */
  label: string;
  /**
   * Product name
   * @example "New Product"
   */
  name: string;
}

export interface ProductCategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export interface UpdateProductResponseDto {
  /** @example "636c21cc5783d2a6aabfcf08" */
  _id: string;
  /** @example "Draft" */
  status: string;
  /** @example "" */
  shortDescription: string;
  /** @example "" */
  description: string;
  /** @example null */
  price: number | null;
  /** @example null */
  salePrice: number | null;
  /** @example false */
  isFree: boolean;
  category: ProductCategoryDto[];
  label: VendorProductLabelDto;
  name: string;
  slug: string;
}

export interface UpdateProductDto {
  /** @example "Orchestrap VST" */
  name?: string;
  /** @example "Lorem ipsum" */
  description?: string;
  /** @example "Lorem ipsum" */
  shortDescription?: string;
  /** @example 1499 */
  price?: number | null;
  /** @example 999 */
  salePrice?: number | null;
  /** @example false */
  isFree?: boolean;
  /**
   * Only for Admin
   * @example false
   */
  featured?: boolean;
  /** @example ["6382016887809e4f2385e78a"] */
  category?: string[];
  /** @example "Draft" */
  status?: string;
}

export interface PublicLabelDto {
  _id: string;
  name: string;
  slug: string;
  products: number;
}

export interface GetSingleProductResponseDto {
  _id: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice: number;
  isFree: boolean;
  category: string[];
  featured: boolean;
  label: PublicLabelDto;
  name: string;
  slug: string;
  isNew: boolean;
}

export type CartUpdateDto = object;

export interface UserLoginDto {
  /** @example "arminh90" */
  login: string;
  /** @example "Wykop789" */
  password: string;
  /** @example false */
  save: boolean;
}

export interface OkResponseDto {
  ok: boolean;
}

export interface GetProfileResponseDto {
  _id: string;
  username: string;
  email: string;
  role: string[];
}

export type UploadInitDto = object;

export type GetUrlsDto = object;

export type UploadFinishDto = object;

export interface VendorProductDto {
  /** @example "6369137dabd2e0f83c522dbb" */
  _id: string;
  /** @example "Draft" */
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  /** @example 1499 */
  price: number | null;
  /** @example 999 */
  salePrice: number | null;
  /** @example false */
  isFree: boolean;
  label: VendorProductLabelDto;
  /** @example "Orchestrap VST" */
  name: string;
  /** @example "orcherstrap-vst" */
  slug: string;
  /**
   * @format date-time
   * @example "2022-11-27T00:36:13.421Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-11-27T00:36:13.421Z"
   */
  updatedAt: string;
}

export interface VendorProductsListResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: VendorProductDto[];
}

export interface VendorProductDetailsResponseDto {
  _id: string;
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  shortDescription: string;
  description: string;
  price: number;
  salePrice: number;
  isFree: boolean;
  label: VendorProductLabelDto;
  name: string;
  slug: string;
  /** @format date-time */
  publishedAt: string | null;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface NewBannerDto {
  name: string;
  heading: string;
  subheading: string;
  button_text: string;
  button_url: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }
}

/**
 * @title ProducerStation API
 * @version 1.0
 * @contact
 *
 * ProducerStation API Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  categories = {
    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerCreate
     * @request POST:/categories
     */
    categoriesControllerCreate: (data: NewCategoryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerFind
     * @summary Get all categories
     * @request GET:/categories
     */
    categoriesControllerFind: (params: RequestParams = {}) =>
      this.request<CategoryDto[], any>({
        path: `/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerFindOne
     * @request GET:/categories/{id}
     */
    categoriesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerUpdate
     * @request PATCH:/categories/{id}
     */
    categoriesControllerUpdate: (id: string, data: UpdateCategoryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerDelete
     * @request DELETE:/categories/{id}
     */
    categoriesControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerFindOneBySlug
     * @request GET:/categories/slug/{slug}
     */
    categoriesControllerFindOneBySlug: (slug: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories/slug/${slug}`,
        method: "GET",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCreate
     * @request POST:/users
     */
    usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerDelete
     * @request DELETE:/users/{id}
     */
    usersControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerActivate
     * @request GET:/users/activate/{token}
     */
    usersControllerActivate: (token: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/activate/${token}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerResetPassword
     * @request POST:/users/reset-password
     */
    usersControllerResetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerChangePassword
     * @request POST:/users/change-password/{token}
     */
    usersControllerChangePassword: (token: string, data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/change-password/${token}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  labels = {
    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerCreate
     * @summary Create new label
     * @request POST:/labels
     * @secure
     */
    labelsControllerCreate: (data: NewLabelDto, params: RequestParams = {}) =>
      this.request<
        NewLabelResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "Conflict" */
            message: string;
            /** @example "Conflict" */
            error?: string;
          }
      >({
        path: `/labels`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerFind
     * @request GET:/labels
     */
    labelsControllerFind: (
      query?: {
        product?: string;
        label?: string;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/labels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerFindOne
     * @request GET:/labels/{id}
     */
    labelsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labels/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerUpdate
     * @request PATCH:/labels/{id}
     */
    labelsControllerUpdate: (id: string, data: LabelUpdateDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labels/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerSubmit
     * @request PATCH:/labels/{id}/submit
     */
    labelsControllerSubmit: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labels/${id}/submit`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerActivate
     * @request PATCH:/labels/{id}/activate
     */
    labelsControllerActivate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labels/${id}/activate`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerSuspend
     * @request PATCH:/labels/{id}/suspend
     */
    labelsControllerSuspend: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labels/${id}/suspend`,
        method: "PATCH",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerCreate
     * @request POST:/orders
     */
    ordersControllerCreate: (data: NewOrderDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  paypal = {
    /**
     * No description
     *
     * @tags PayPal
     * @name PaypalControllerCapturePayPalPayment
     * @request POST:/paypal/capture/{id}
     */
    paypalControllerCapturePayPalPayment: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/paypal/capture/${id}`,
        method: "POST",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerFindAll
     * @summary Get all products with pagination
     * @request GET:/products
     */
    productsControllerFindAll: (
      query?: {
        product?: string;
        label?: string;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllProductsResponseDto, any>({
        path: `/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerGetNewProducts
     * @summary Get all new products with pagination
     * @request GET:/products/new
     */
    productsControllerGetNewProducts: (params: RequestParams = {}) =>
      this.request<GetAllProductsResponseDto, any>({
        path: `/products/new`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerCreate
     * @summary Create new product
     * @request POST:/product
     */
    productControllerCreate: (data: CreateProductDto, params: RequestParams = {}) =>
      this.request<
        NewProductResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "Conflict" */
            message: string;
            /** @example "Conflict" */
            error?: string;
          }
      >({
        path: `/product`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerUpdate
     * @summary Update product
     * @request PATCH:/product/{id}
     */
    productControllerUpdate: (id: string, data: UpdateProductDto, params: RequestParams = {}) =>
      this.request<
        UpdateProductResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "Conflict" */
            message: string;
            /** @example "Conflict" */
            error?: string;
          }
      >({
        path: `/product/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerSubmit
     * @request PATCH:/product/{id}/submit
     */
    productControllerSubmit: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/product/${id}/submit`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerActivate
     * @request PATCH:/product/{id}/activate
     */
    productControllerActivate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/product/${id}/activate`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerSuspend
     * @request PATCH:/product/{id}/suspend
     */
    productControllerSuspend: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/product/${id}/suspend`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerGetPublicProduct
     * @summary Get single product by slug
     * @request GET:/product/slug/{slug}
     */
    productControllerGetPublicProduct: (slug: string, params: RequestParams = {}) =>
      this.request<
        GetSingleProductResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Product not found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/product/slug/${slug}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  cart = {
    /**
     * No description
     *
     * @tags Cart
     * @name CartControllerCreate
     * @request POST:/cart
     */
    cartControllerCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartControllerFindOne
     * @request GET:/cart/{id}
     */
    cartControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartControllerUpdate
     * @request PATCH:/cart/{id}
     */
    cartControllerUpdate: (id: string, data: CartUpdateDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartControllerAddToCart
     * @request PATCH:/cart/{id}/add-to-cart
     */
    cartControllerAddToCart: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart/${id}/add-to-cart`,
        method: "PATCH",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @summary User login
     * @request POST:/auth/login
     */
    authControllerLogin: (data: UserLoginDto, params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogout
     * @summary Logout current user
     * @request POST:/auth/logout
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<OkResponseDto, any>({
        path: `/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerGetProfile
     * @summary Getting user details
     * @request GET:/auth/profile
     */
    authControllerGetProfile: (params: RequestParams = {}) =>
      this.request<
        GetProfileResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth/profile`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerUpload
     * @request POST:/upload/init
     */
    uploadControllerUpload: (data: UploadInitDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/upload/init`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerGetPreSignedUrls
     * @request POST:/upload/get-presigned-url
     */
    uploadControllerGetPreSignedUrls: (data: GetUrlsDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/upload/get-presigned-url`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerFinish
     * @request POST:/upload/finish
     */
    uploadControllerFinish: (data: UploadFinishDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/upload/finish`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  vendor = {
    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetProducts
     * @summary Get vendor products with pagination
     * @request GET:/vendor/products
     * @secure
     */
    vendorControllerGetProducts: (
      query?: {
        product?: string;
        label?: string;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VendorProductsListResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/vendor/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabels
     * @request GET:/vendor/labels
     */
    vendorControllerGetLabels: (
      query?: {
        product?: string;
        label?: string;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/vendor/labels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabelDetails
     * @request GET:/vendor/label/{id}
     */
    vendorControllerGetLabelDetails: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/vendor/label/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetProductDetails
     * @summary Get product details
     * @request GET:/vendor/product/{id}
     * @secure
     */
    vendorControllerGetProductDetails: (id: string, params: RequestParams = {}) =>
      this.request<
        VendorProductDetailsResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/vendor/product/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  banners = {
    /**
     * No description
     *
     * @tags Banners
     * @name BannersControllerCreate
     * @request POST:/banners
     */
    bannersControllerCreate: (data: NewBannerDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/banners`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Banners
     * @name BannersControllerGetAllBanners
     * @request GET:/banners/public
     */
    bannersControllerGetAllBanners: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/banners/public`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Banners
     * @name BannersControllerDelete
     * @request DELETE:/banners/{id}
     */
    bannersControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/banners/${id}`,
        method: "DELETE",
        ...params,
      }),
  };

  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });
}
