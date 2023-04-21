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

export interface RegisterUserDto {
  /** @minLength 4 */
  username: string;
  email: string;
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
}

export interface OkResponseDto {
  ok: boolean;
}

export interface UpdateUserDto {
  username: string;
  email: string;
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
  role: "ADMIN" | "VENDOR" | "USER";
  firstName: string;
  lastName: string;
  postalCode: string;
  country: string;
  companyName: string;
  companyVAT: string;
}

export interface ResetPasswordRequestDto {
  email: string;
}

export interface ResetPasswordDto {
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
}

export interface UserLoginDto {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserLoginResponseDto {
  token: string;
  refreshToken: string;
}

export interface UserProfileResponseDto {
  _id: string;
  username: string;
  email: string;
  role: "ADMIN" | "VENDOR" | "USER";
}

export interface NewLabelDto {
  /** @minLength 6 */
  name: string;
  /** User ID */
  user?: string;
}

export interface FileUser {
  _id: string;
  username: string;
}

export interface FileDto {
  _id: string;
  filename: string;
  size: number;
  type: string;
  public: string;
  uploadedBy: FileUser;
}

export interface Socials {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface LabelDto {
  _id: string;
  name: string;
  description: string;
  email: string;
  status: string;
  avatar: FileDto | null;
  header: FileDto | null;
  commissionRate: number;
  slug: string;
  socials: Socials;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateLabelDto {
  name?: string;
  description?: string;
  email?: string;
  commissionRate?: number;
  avatar?: string;
  header?: string;
  status?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface PublicLabelListItemDto {
  _id: string;
  name: string;
  avatar: string;
  header: string;
  slug: string;
}

export interface PublicLabelListResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: PublicLabelListItemDto[];
}

export interface GetFilesResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: FileDto[];
}

export interface UploadDto {
  fileName: string;
  fileType: string;
  uploadId: string;
  currentPart: number;
  parts: string;
  contentLength: number;
}

export type CancelUploadDto = object;

export interface VendorLabelListItem {
  _id: string;
  avatar: string | null;
  commissionRate: number;
  name: string;
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  slug: string;
  productsCount: number;
  /** @format date-time */
  createdAt: string;
}

export interface VendorLabelResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: VendorLabelListItem[];
}

export interface VendorLabelDetailsResponseDto {
  _id: string;
  name: string;
  description: string;
  email: string;
  commissionRate: number;
  socials: Socials;
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  avatar: FileDto | null;
  header: FileDto | null;
  slug: string;
  productsCount: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface VendorProductsListItemCategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export interface VendorProductsListItemGenreDto {
  _id: string;
  name: string;
  slug: string;
}

export interface VendorProductsListItemLabelDto {
  _id: string;
  name: string;
  slug: string;
}

export interface VendorProductsListItemDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  featured: boolean;
  artwork: FileDto;
  category: VendorProductsListItemCategoryDto[];
  genre: VendorProductsListItemGenreDto[];
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  label: VendorProductsListItemLabelDto;
  slug: string;
  /** @format date-time */
  publishedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface VendorProductsListPaginatedDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: VendorProductsListItemDto[];
}

export interface ProductLabelDto {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductCategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductGenreDto {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductDto {
  _id: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice: number;
  featured: boolean;
  artwork: FileDto | null;
  audioPreview: FileDto | null;
  label: ProductLabelDto;
  category: ProductCategoryDto[];
  genre: ProductGenreDto[];
  status: "Draft" | "Submitted" | "Active" | "Suspended";
  name: string;
  new: boolean;
  free: boolean;
  files: FileDto[];
  /** @format date-time */
  publishedAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
  slug: string;
}

export interface GetVendorAllLabelsDto {
  _id: string;
  name: string;
}

export interface Labels {
  totalLabels: number;
  activated: number;
  drafted: number;
  submitted: number;
  suspended: number;
}

export interface Orders {
  totalOrders: number;
}

export interface Earnings {
  thisMonth: number;
  lastMonth: number;
  lastThreeMonths: number;
}

export interface Products {
  totalProducts: number;
  activeProducts: number;
  submittedProducts: number;
  suspendedProducts: number;
}

export interface VendorOverviewResponseDto {
  labels: Labels;
  orders: Orders;
  earnings: Earnings;
  products: Products;
}

export interface EarningDateDto {
  year: number;
  month: number;
  monthName: string;
}

export interface VendorEarningDto {
  date: EarningDateDto;
  count: number;
  total: number;
}

export interface NewProductDto {
  name: string;
  label: string;
}

export interface PublicProductListItemCategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export interface PublicProductListItemGenreDto {
  _id: string;
  name: string;
  slug: string;
}

export interface PublicProductListItemLabelDto {
  _id: string;
  name: string;
  slug: string;
}

export interface PublicProductListItemDto {
  _id: string;
  price: number;
  salePrice: number;
  featured: boolean;
  artwork: string | null;
  audioPreview: string | null;
  name: string;
  slug: string;
  isNew: boolean;
  isFree: boolean;
  category: PublicProductListItemCategoryDto[];
  genre: PublicProductListItemGenreDto[];
  label: PublicProductListItemLabelDto;
}

export interface GetPublicProductsPaginatedDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: PublicProductListItemDto[];
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  shortDescription?: string;
  price?: number | string | null;
  salePrice?: number | string | null;
  category?: string[];
  genre?: string[];
  status?: string;
  files?: string[];
  featured?: boolean;
  artwork?: string;
}

export interface PublicProductLabel {
  name: string;
  slug: string;
}

export interface PublicProductDto {
  _id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number | null;
  salePrice: number;
  featured: boolean;
  slug: string;
  new: boolean;
  free: boolean;
  label: PublicProductLabel;
  artwork: string | null;
  audioPreview: string | null;
}

export interface AddFileToProductDto {
  fileId: string;
}

export type CreateCategoryDto = object;

export interface CategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export type UpdateCategoryDto = object;

export type CreateGenreDto = object;

export interface GenreDto {
  _id: string;
  name: string;
  slug: string;
}

export type UpdateGenreDto = object;

export interface OrderBilling {
  firstName: string;
  lastName: string;
  street: string;
  city: object;
  postalCode: string;
  country: string;
  companyName?: string | null;
  companyVat?: string | null;
  companyStreet?: string | null;
  companyCity?: object | null;
  companyPostalCode?: string | null;
  companyCountry?: string | null;
}

export interface CreateOrderDto {
  /** Products ID's */
  products: string[];
  gateway: "paypal" | "stripe";
  billing: OrderBilling;
}

export interface AdminUserSimplyBillinDto {
  firstName: string;
  lastName: string;
}

export interface AdminUserDto {
  _id: string;
  username: string;
  email: string;
  role: "ADMIN" | "VENDOR" | "USER";
  billing: AdminUserSimplyBillinDto;
}

export interface GetAdminUsersResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: AdminUserDto[];
}

export interface AdminFullUserBillingDto {
  firstName: string | null;
  lastName: string | null;
  street: string | null;
  city: string | null;
  postalCode: string | null;
  country: string | null;
  companyName: string | null;
  companyVat: string | null;
  companyStreet: string | null;
  companyCity: string | null;
  companyPostalCode: string | null;
  companyCountry: string | null;
}

export interface AdminFullUserDto {
  _id: string;
  username: string;
  email: string;
  isActive: boolean;
  isBanned: boolean;
  role: "ADMIN" | "VENDOR" | "USER";
  billing: AdminFullUserBillingDto;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface CartProductLabelDto {
  name: string;
  slug: string;
}

export interface CartProductDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  artwork: string | null;
  label: CartProductLabelDto;
}

export interface CartDto {
  _id: string;
  products: CartProductDto[];
  total: number;
}

export type AddRemoveToCartDto = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);
}

/**
 * @title ProducerStation API
 * @version 1.0
 * @contact
 *
 * ProductStation API Documentation
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerRegisterUser
     * @summary Register user
     * @request POST:/users
     */
    usersControllerRegisterUser: (
      data: RegisterUserDto,
      params: RequestParams = {},
    ) =>
      this.request<
        OkResponseDto,
        {
          /** @example 400 */
          statusCode: number;
          /** @example "Bad Request" */
          message: string;
          /** @example "Bad Request" */
          error?: string;
        }
      >({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerActivateUserWithToken
     * @summary Activating account
     * @request GET:/users/activation/{token}
     */
    usersControllerActivateUserWithToken: (
      token: string,
      params: RequestParams = {},
    ) =>
      this.request<
        OkResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/activation/${token}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerUpdate
     * @summary Updating user
     * @request PATCH:/users/{id}
     * @secure
     */
    usersControllerUpdate: (
      id: string,
      data: UpdateUserDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerResetPassword
     * @summary Requesting reset password
     * @request POST:/users/reset-password
     */
    usersControllerResetPassword: (
      data: ResetPasswordRequestDto,
      params: RequestParams = {},
    ) =>
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
     * @name UsersControllerResetPasswordWithToken
     * @summary Change password with token
     * @request POST:/users/reset-password/{token}
     */
    usersControllerResetPasswordWithToken: (
      token: string,
      data: ResetPasswordDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/reset-password/${token}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
        UserLoginResponseDto,
        {
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
     * @name AuthControllerGetProfile
     * @summary Getting basic user details and auth checking
     * @request GET:/auth/me
     * @secure
     */
    authControllerGetProfile: (params: RequestParams = {}) =>
      this.request<
        UserProfileResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerGetAuth
     * @summary Check user auth
     * @request GET:/auth
     * @secure
     */
    authControllerGetAuth: (params: RequestParams = {}) =>
      this.request<
        any,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRefreshToken
     * @summary Get new refresh token
     * @request GET:/auth/refresh
     * @secure
     */
    authControllerRefreshToken: (params: RequestParams = {}) =>
      this.request<
        any,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth/refresh`,
        method: "GET",
        secure: true,
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
      this.request<LabelDto, any>({
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
     * @name LabelsControllerGetLabels
     * @summary Get labels
     * @request GET:/labels
     */
    labelsControllerGetLabels: (
      query?: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PublicLabelListResponseDto, any>({
        path: `/labels`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerUpdate
     * @summary Updating label
     * @request PATCH:/labels/{id}
     * @secure
     */
    labelsControllerUpdate: (
      id: string,
      data: UpdateLabelDto,
      params: RequestParams = {},
    ) =>
      this.request<
        LabelDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
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
        path: `/labels/${id}`,
        method: "PATCH",
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
     * @name LabelsControllerFindOne
     * @summary Get public label
     * @request GET:/labels/{id}
     */
    labelsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        PublicLabelListResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/labels/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerDelete
     * @summary Delete label
     * @request DELETE:/labels/{id}
     */
    labelsControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        LabelDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
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
        path: `/labels/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerDownload
     * @summary Download file
     * @request GET:/files/{id}/download
     * @secure
     */
    filesControllerDownload: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/files/${id}/download`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerGetDetails
     * @summary Get file details
     * @request GET:/files/{id}
     * @secure
     */
    filesControllerGetDetails: (id: string, params: RequestParams = {}) =>
      this.request<FileDto, any>({
        path: `/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerDelete
     * @summary Delete file
     * @request DELETE:/files/{id}
     * @secure
     */
    filesControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<FileDto, any>({
        path: `/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerGetFiles
     * @summary Get files list
     * @request GET:/files
     * @secure
     */
    filesControllerGetFiles: (params: RequestParams = {}) =>
      this.request<
        GetFilesResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/files`,
        method: "GET",
        secure: true,
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
     * @summary Uploading file
     * @request POST:/upload
     */
    uploadControllerUpload: (data: UploadDto, params: RequestParams = {}) =>
      this.request<
        FileDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/upload`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerCancelUpload
     * @summary Cancel multipart upload
     * @request DELETE:/upload/cancel
     */
    uploadControllerCancelUpload: (
      data: CancelUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<
        OkResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/upload/cancel`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  vendor = {
    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabels
     * @summary Get vendor labels
     * @request GET:/vendor/labels
     * @secure
     */
    vendorControllerGetLabels: (params: RequestParams = {}) =>
      this.request<
        VendorLabelResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/vendor/labels`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetSingleLabel
     * @summary Get vendor label details
     * @request GET:/vendor/labels/{id}
     * @secure
     */
    vendorControllerGetSingleLabel: (id: string, params: RequestParams = {}) =>
      this.request<
        VendorLabelDetailsResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
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
        path: `/vendor/labels/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabelProductsPaginated
     * @summary Get products by label
     * @request GET:/vendor/labels/{id}/products
     * @secure
     */
    vendorControllerGetLabelProductsPaginated: (
      id: string,
      query?: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VendorProductsListPaginatedDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/vendor/labels/${id}/products`,
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
     * @name VendorControllerGetVendorProducts
     * @summary Get vendor products
     * @request GET:/vendor/products
     * @secure
     */
    vendorControllerGetVendorProducts: (
      query?: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
        product?: string;
        status?: "DRAFT" | "SUBMITTED" | "ACTIVE" | "SUSPENDED";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VendorProductsListPaginatedDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
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
     * @name VendorControllerGetVendorProduct
     * @summary Get vendor product
     * @request GET:/vendor/products/{id}
     * @secure
     */
    vendorControllerGetVendorProduct: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<
        ProductDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
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
        path: `/vendor/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetAllLabels
     * @summary Fetch all labels without pagination
     * @request GET:/vendor/all-labels
     */
    vendorControllerGetAllLabels: (params: RequestParams = {}) =>
      this.request<
        GetVendorAllLabelsDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/vendor/all-labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerOverview
     * @summary Get current vendor details
     * @request GET:/vendor/overview
     * @secure
     */
    vendorControllerOverview: (params: RequestParams = {}) =>
      this.request<
        VendorOverviewResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/vendor/overview`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetEarnings
     * @summary Get vendor earnings
     * @request GET:/vendor/earnings
     * @secure
     */
    vendorControllerGetEarnings: (params: RequestParams = {}) =>
      this.request<
        VendorEarningDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/vendor/earnings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerOrdersCount
     * @summary Get vendor completed orders
     * @request GET:/vendor/overview/orders-count
     * @secure
     */
    vendorControllerOrdersCount: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/vendor/overview/orders-count`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Product
     * @name ProductsControllerCreate
     * @summary Create new product
     * @request POST:/products
     */
    productsControllerCreate: (
      data: NewProductDto,
      params: RequestParams = {},
    ) =>
      this.request<
        ProductDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/products`,
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
     * @name ProductsControllerGetAll
     * @summary Get all public products
     * @request GET:/products
     */
    productsControllerGetAll: (
      query?: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
        product?: string;
        status?: "DRAFT" | "SUBMITTED" | "ACTIVE" | "SUSPENDED";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPublicProductsPaginatedDto, any>({
        path: `/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductsControllerUpdate
     * @summary Update product
     * @request PATCH:/products/{id}
     */
    productsControllerUpdate: (
      id: string,
      data: UpdateProductDto,
      params: RequestParams = {},
    ) =>
      this.request<
        ProductDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/products/${id}`,
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
     * @name ProductsControllerDelete
     * @summary Delete product
     * @request DELETE:/products/{id}
     */
    productsControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        ProductDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
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
        path: `/products/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductsControllerGetPublicProduct
     * @summary Get public product details
     * @request GET:/products/{id}
     */
    productsControllerGetPublicProduct: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<
        PublicProductDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductsControllerAddFile
     * @summary Add file to product
     * @request POST:/products/{id}/file
     */
    productsControllerAddFile: (
      id: string,
      data: AddFileToProductDto,
      params: RequestParams = {},
    ) =>
      this.request<
        ProductDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/products/${id}/file`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags Category
     * @name CategoriesControllerCreate
     * @summary Create new category
     * @request POST:/categories
     */
    categoriesControllerCreate: (
      data: CreateCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<
        CategoryDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
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
        path: `/categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoriesControllerGetAll
     * @summary Get all categories
     * @request GET:/categories
     */
    categoriesControllerGetAll: (params: RequestParams = {}) =>
      this.request<
        CategoryDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoriesControllerDelete
     * @summary Delete category
     * @request DELETE:/categories/{id}
     */
    categoriesControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        CategoryDto,
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
        path: `/categories/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoriesControllerUpdate
     * @summary Update category
     * @request PATCH:/categories/{id}
     */
    categoriesControllerUpdate: (
      id: string,
      data: UpdateCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<
        CategoryDto,
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
        path: `/categories/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  genres = {
    /**
     * No description
     *
     * @tags Genre
     * @name GenresControllerCreate
     * @summary Create new genre
     * @request POST:/genres
     */
    genresControllerCreate: (
      data: CreateGenreDto,
      params: RequestParams = {},
    ) =>
      this.request<
        GenreDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
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
        path: `/genres`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Genre
     * @name GenresControllerGetAll
     * @summary Get all genres
     * @request GET:/genres
     */
    genresControllerGetAll: (params: RequestParams = {}) =>
      this.request<
        GenreDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/genres`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Genre
     * @name GenresControllerDelete
     * @summary Delete genre
     * @request DELETE:/genres/{id}
     */
    genresControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        GenreDto,
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
        path: `/genres/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Genre
     * @name GenresControllerUpdate
     * @summary Update genre
     * @request PATCH:/genres/{id}
     */
    genresControllerUpdate: (
      id: string,
      data: UpdateGenreDto,
      params: RequestParams = {},
    ) =>
      this.request<
        GenreDto,
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
        path: `/genres/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerCreate
     * @summary Create new order
     * @request POST:/orders
     * @secure
     */
    ordersControllerCreate: (
      data: CreateOrderDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetAllOrders
     * @summary Get all orders
     * @request GET:/admin/orders
     * @secure
     */
    adminControllerGetAllOrders: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/orders`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetOrder
     * @summary Get single order
     * @request GET:/admin/orders/{id}
     * @secure
     */
    adminControllerGetOrder: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/orders/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetProducts
     * @summary Get products
     * @request GET:/admin/products
     * @secure
     */
    adminControllerGetProducts: (
      query?: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
        product?: string;
        status?: "DRAFT" | "SUBMITTED" | "ACTIVE" | "SUSPENDED";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetProduct
     * @summary Get single product details
     * @request GET:/admin/products/{id}
     * @secure
     */
    adminControllerGetProduct: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/products/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetUsers
     * @summary Get all users
     * @request GET:/admin/users
     * @secure
     */
    adminControllerGetUsers: (
      query: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
        user: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAdminUsersResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/admin/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetUser
     * @summary Get user
     * @request GET:/admin/users/{id}
     * @secure
     */
    adminControllerGetUser: (
      id: string,
      query: {
        /** @minLength 1 */
        page?: number;
        /** @minLength 1 */
        limit?: number;
        user: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AdminFullUserDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/admin/users/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  carts = {
    /**
     * No description
     *
     * @name CartsControllerCreate
     * @request POST:/carts
     */
    cartsControllerCreate: (params: RequestParams = {}) =>
      this.request<CartDto, any>({
        path: `/carts`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CartsControllerAddProduct
     * @request POST:/carts/add
     */
    cartsControllerAddProduct: (
      data: AddRemoveToCartDto,
      params: RequestParams = {},
    ) =>
      this.request<CartDto, any>({
        path: `/carts/add`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CartsControllerRemoveProduct
     * @request DELETE:/carts/delete
     */
    cartsControllerRemoveProduct: (
      data: AddRemoveToCartDto,
      params: RequestParams = {},
    ) =>
      this.request<CartDto, any>({
        path: `/carts/delete`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CartsControllerGetCart
     * @request GET:/carts/{id}
     */
    cartsControllerGetCart: (id: string, params: RequestParams = {}) =>
      this.request<CartDto, any>({
        path: `/carts/${id}`,
        method: "GET",
        format: "json",
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
