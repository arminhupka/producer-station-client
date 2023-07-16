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

export interface RegisterUserResponseDto {
  email: string;
}

export interface RegisterVendorDto {
  /** @minLength 4 */
  username: string;
  email: string;
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
  /** @minLength 3 */
  firstName: string;
  /** @minLength 3 */
  lastName: string;
  paypalEmail: string;
  paypalEmailConfirm: string;
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

export interface CreateGenreDto {
  name: string;
}

export interface GenreDto {
  _id: string;
  name: string;
  slug: string;
}

export type UpdateGenreDto = object;

export interface UploadDto {
  fileName: string;
  fileType: string;
  uploadId: string;
  currentPart: number;
  parts: string;
  contentLength: number;
  customName: string;
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

export interface VendorProductListItemFile {
  _id: object;
  filename: string;
  public: string;
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
  artwork: VendorProductListItemFile;
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

export interface ProductFormatDto {
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
  format: ProductFormatDto[];
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

export interface OrderItemProductLabel {
  _id: string;
  name: string;
}

export interface OrderItemProduct {
  _id: string;
  name: string;
  label: OrderItemProductLabel;
}

export interface OrderVendorItem {
  product: OrderItemProduct;
  price: number;
  label_commission_rate: number;
  label_cut: number;
}

export interface OrderVendorListItem {
  _id: string;
  status: "NEW" | "IN_PROGRESS" | "COMPLETED" | "REFUNDED";
  orderNumber: string;
  total: number;
  orderItems: OrderVendorItem[];
  /** @format date-time */
  paidAt: string;
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
  price?: number | null;
  salePrice?: number | null;
  category?: string[];
  genre?: string[];
  format?: string[];
  status?: string;
  files?: string[];
  featured?: boolean;
  artwork?: string;
  audioPreview?: string;
  fileId?: string;
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

export interface CreateFormatDto {
  name: string;
}

export interface FormatDto {
  _id: string;
  name: string;
  slug: string;
}

export type UpdateFormatDto = object;

export interface CreateCategoryDto {
  name: string;
}

export interface CategoryDto {
  _id: string;
  name: string;
  slug: string;
}

export type UpdateCategoryDto = object;

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

export interface PaypalCapturePaymentResponsePayerNameDto {
  given_name: string;
  surname: string;
}

export interface PaypalCapturePaymentResponsePayerDto {
  name: PaypalCapturePaymentResponsePayerNameDto;
  email_address: string;
  payer_id: string;
}

export interface PaypalCapturePaymentResponseResponseDto {
  id: string;
  status: "CREATED" | "SAVED" | "APPROVED" | "VOIDED" | "COMPLETED";
  payer: PaypalCapturePaymentResponsePayerDto;
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

export interface SettingsResponseDto {
  appName: string;
  appTagline: string;
  notificationText: string;
  showNotificationBar: boolean;
}

export interface UpdateSettingsDto {
  appName: string;
  appTagline: string;
  notificationText: string;
  showNotificationBar: boolean;
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
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

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
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

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
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
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
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
        RegisterUserResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
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
     * @name UsersControllerRegisterVendor
     * @summary Register vendor
     * @request POST:/users/vendor
     */
    usersControllerRegisterVendor: (
      data: RegisterVendorDto,
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
        path: `/users/vendor`,
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

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCheckUsername
     * @summary Check does username is free
     * @request GET:/users/check-username/{username}
     */
    usersControllerCheckUsername: (
      username: string,
      params: RequestParams = {},
    ) =>
      this.request<OkResponseDto, any>({
        path: `/users/check-username/${username}`,
        method: "GET",
        format: "json",
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
        product?: string;
        status?: "Draft" | "Submitted" | "Active" | "Suspended";
        sortBy?:
          | "createdAt"
          | "updatedAt"
          | "submittedAt"
          | "publishedAt"
          | "name";
        sortDir?: "asc" | "desc";
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

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetOrders
     * @summary Ger orders
     * @request GET:/vendor/orders
     * @secure
     */
    vendorControllerGetOrders: (params: RequestParams = {}) =>
      this.request<OrderVendorListItem[], any>({
        path: `/vendor/orders`,
        method: "GET",
        secure: true,
        format: "json",
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
        product?: string;
        status?: "Draft" | "Submitted" | "Active" | "Suspended";
        sortBy?:
          | "createdAt"
          | "updatedAt"
          | "submittedAt"
          | "publishedAt"
          | "name";
        sortDir?: "asc" | "desc";
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
  formats = {
    /**
     * No description
     *
     * @tags Formats
     * @name FormatsControllerCreate
     * @summary Create new format
     * @request POST:/formats
     */
    formatsControllerCreate: (
      data: CreateFormatDto,
      params: RequestParams = {},
    ) =>
      this.request<
        FormatDto,
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
        path: `/formats`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Formats
     * @name FormatsControllerGetAll
     * @summary Get all formats
     * @request GET:/formats
     */
    formatsControllerGetAll: (params: RequestParams = {}) =>
      this.request<
        FormatDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/formats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Formats
     * @name FormatsControllerDelete
     * @summary Delete format
     * @request DELETE:/formats/{id}
     */
    formatsControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        FormatDto,
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
        path: `/formats/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Formats
     * @name FormatsControllerUpdate
     * @summary Update format
     * @request PATCH:/formats/{id}
     */
    formatsControllerUpdate: (
      id: string,
      data: UpdateFormatDto,
      params: RequestParams = {},
    ) =>
      this.request<
        FormatDto,
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
        path: `/formats/${id}`,
        method: "PATCH",
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
  paypal = {
    /**
     * No description
     *
     * @tags PayPal
     * @name PaypalControllerCapture
     * @request POST:/paypal/capture
     */
    paypalControllerCapture: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/paypal/capture`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PaypalControllerCaptureWithId
     * @summary Capture PayPal order payment
     * @request POST:/paypal/capture/{id}
     */
    paypalControllerCaptureWithId: (id: string, params: RequestParams = {}) =>
      this.request<PaypalCapturePaymentResponseResponseDto, any>({
        path: `/paypal/capture/${id}`,
        method: "POST",
        format: "json",
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
        product?: string;
        status?: "Draft" | "Submitted" | "Active" | "Suspended";
        sortBy?:
          | "createdAt"
          | "updatedAt"
          | "submittedAt"
          | "publishedAt"
          | "name";
        sortDir?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<VendorProductsListPaginatedDto, any>({
        path: `/admin/products`,
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
        username: string;
        email: string;
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
        /** @min 1 */
        page?: number;
        /** @min 1 */
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
  settings = {
    /**
     * No description
     *
     * @tags App Settings
     * @name SettingsControllerGetSettings
     * @summary Get settings for client
     * @request GET:/settings
     */
    settingsControllerGetSettings: (params: RequestParams = {}) =>
      this.request<SettingsResponseDto, any>({
        path: `/settings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags App Settings
     * @name SettingsControllerSetSettings
     * @summary Change settings
     * @request PATCH:/settings
     * @secure
     */
    settingsControllerSetSettings: (
      data: UpdateSettingsDto,
      params: RequestParams = {},
    ) =>
      this.request<SettingsResponseDto, any>({
        path: `/settings`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invitations = {
    /**
     * No description
     *
     * @name InvitationsControllerFindOne
     * @request GET:/invitations/{code}
     */
    invitationsControllerFindOne: (code: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/invitations/${code}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name InvitationsControllerCreate
     * @request POST:/invitations
     */
    invitationsControllerCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/invitations`,
        method: "POST",
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
