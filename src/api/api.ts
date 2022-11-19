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

export interface Category {
  /** Category name */
  _id: string;
  /** Category name */
  name: string;
  /** Category slug */
  slug: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
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

export type Billing = object;

export type Social = object;

export interface Label {
  _id: string;
  name: string;
  email: string;
  description: string;
  socials: Social;
  status: string;
  avatar: object;
  header: object;
  commissionRate: number;
  earnings: number;
  slug: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  products: any[][];
}

export interface Product {
  _id: string;
  /** Product name */
  name: string;
  /** Product status */
  status: string;
  /** Product label */
  label: Label;
  /** Product short description */
  shortDescription: string;
  /** Product long description */
  description: string;
  /** Product price */
  price: number;
  /** Product sale price */
  salePrice: number;
  /** Inform that product is free */
  isFree: boolean;
  /** Product categories */
  category: Category[];
  /** Inform that product is featured */
  featured: boolean;
  /** Product slug */
  slug: string;
  /**
   * Product create date
   * @format date-time
   */
  createdAt: string;
  /**
   * Product update date
   * @format date-time
   */
  updatedAt: string;
  /**
   * Product published date
   * @format date-time
   */
  publishedAt: string;
}

export interface User {
  /** The username of the user */
  username: string;
  /** The email of the user */
  email: string;
  /** The hashed password of the user */
  password: string;
  /** User roles */
  role: string[];
  /** User billing details */
  billing: Billing;
  /** Information about user account status */
  isActive: boolean;
  /** User activation token used to account activation */
  activationToken: string;
  /** User reset password token used to reset password */
  resetPasswordToken: string;
  /** List of user bought products */
  products: Product[];
  /**
   * Date of register
   * @format date-time
   */
  createdAt: string;
  /**
   * Date of account last update
   * @format date-time
   */
  updatedAt: string;
}

export interface ResetPasswordDto {
  email: string;
}

export type ChangePasswordDto = object;

export interface NewLabelDto {
  name: string;
}

export interface PublicLabelDto {
  _id: string;
  avatar: string;
  header: string;
  name: string;
  slug: string;
  products: number;
}

export interface GetAllLabelsResponseDto {
  /** Number of all product */
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: PublicLabelDto[];
}

export type LabelUpdateDto = object;

export type NewOrderDto = object;

export interface Doc {
  _id: string;
  price: string;
  salePrice: string;
  isFree: boolean;
  label: Label;
}

export interface GetAllProductsResponseDto {
  /** Number of all product */
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: Doc[];
}

export interface PublicProduct {
  _id: string;
  name: string;
  slug: string;
  price: string;
  salePrice: string;
  isFree: boolean;
  isNew: boolean;
  label: Label;
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

export interface LabelDto {
  /** Label ID */
  _id: string;
  /** Label name */
  name: string;
}

export interface UpdateProductResponseDto {
  _id: string;
  status: string;
  shortDescription: string;
  description: string;
  price: string;
  salePrice: string;
  isFree: boolean;
  category: Category[];
  featured: boolean;
  label: LabelDto;
  name: string;
  slug: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updateAt: string;
  /** @format date-time */
  publishedAt: string;
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  shortDescription?: string;
  price?: string;
  salePrice?: string;
  isFree?: boolean;
  featured?: boolean;
  category?: string[];
  status?: string;
}

export interface PublicCategoryDto {
  name: string;
  slug: string;
}

export interface PublicProductLabelDto {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductDetailsResponseDto {
  _id: string;
  status: string;
  shortDescription: string;
  description: string;
  price: string;
  salePrice: string;
  isFree: boolean;
  isNew: boolean;
  category: PublicCategoryDto[];
  label: PublicProductLabelDto;
  name: string;
  slug: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
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

export interface GetProfileResponseDto {
  _id: string;
  username: string;
  email: string;
  role: string[];
}

export type UploadInitDto = object;

export type GetUrlsDto = object;

export type UploadFinishDto = object;

export interface VendorLabelDto {
  _id: string;
  name: string;
  slug: string;
}

export interface VendorProductDto {
  _id: string;
  status: string;
  name: string;
  slug: string;
  price: string;
  salePrice: string;
  category: VendorProductDto;
  label: VendorLabelDto;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface VendorProductListResponseDto {
  /** Number of all product */
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

export interface NewBannerDto {
  name: string;
  heading: string;
  subheading: string;
  button_text: string;
  button_url: string;
}

export interface Banner {
  name: string;
  heading: string;
  subheading: string;
  button_text: string;
  button_url: string;
  status: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface PublicBanner {
  _id: string;
  name: string;
  heading: string;
  subheading: string;
  button_text: string;
  button_url: string;
}

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
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
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
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

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
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
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
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
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);
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
     * @summary Receive categories
     * @request POST:/categories
     * @secure
     */
    categoriesControllerCreate: (data: NewCategoryDto, params: RequestParams = {}) =>
      this.request<
        Category,
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
        path: `/categories`,
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
     * @tags Categories
     * @name CategoriesControllerFind
     * @summary Receive all categories
     * @request GET:/categories
     */
    categoriesControllerFind: (params: RequestParams = {}) =>
      this.request<Category[], any>({
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
     * @summary Receive single category
     * @request GET:/categories/{id}
     */
    categoriesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categories/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerUpdate
     * @summary Update category name
     * @request PATCH:/categories/{id}
     * @secure
     */
    categoriesControllerUpdate: (id: string, data: UpdateCategoryDto, params: RequestParams = {}) =>
      this.request<
        Category,
        {
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
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerDelete
     * @summary Remove category
     * @request DELETE:/categories/{id}
     * @secure
     */
    categoriesControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        Category,
        {
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
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerFindOneBySlug
     * @summary Get category by slug
     * @request GET:/categories/slug/{slug}
     */
    categoriesControllerFindOneBySlug: (slug: string, params: RequestParams = {}) =>
      this.request<
        Category,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/categories/slug/${slug}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCreate
     * @summary Creating new account
     * @request POST:/users
     */
    usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<
        {
          ok?: boolean;
        },
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Passwords are not equal" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "User already exist" */
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
     * @name UsersControllerDelete
     * @summary Deleting account
     * @request DELETE:/users/{id}
     */
    usersControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        User,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "User not found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerActivate
     * @summary Activation new account
     * @request GET:/users/activate/{token}
     */
    usersControllerActivate: (token: string, params: RequestParams = {}) =>
      this.request<
        any,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/activate/${token}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerResetPassword
     * @summary Requesting for token to change account password
     * @request POST:/users/reset-password
     */
    usersControllerResetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<
        any,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/reset-password`,
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
     * @name UsersControllerChangePassword
     * @summary Changing password with token
     * @request POST:/users/change-password/{token}
     */
    usersControllerChangePassword: (token: string, data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<
        any,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
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
        path: `/users/change-password/${token}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  labels = {
    /**
     * No description
     *
     * @tags Labels
     * @name LabelsControllerCreate
     * @summary New label
     * @request POST:/labels
     * @secure
     */
    labelsControllerCreate: (data: NewLabelDto, params: RequestParams = {}) =>
      this.request<Label, any>({
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
     * @summary Get labels with pagination
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
      this.request<any, GetAllLabelsResponseDto>({
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
     * @summary Receive products with pagination
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
      this.request<any, GetAllProductsResponseDto>({
        path: `/products`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerGetNewProducts
     * @summary Receive newly published product
     * @request GET:/products/new
     */
    productsControllerGetNewProducts: (params: RequestParams = {}) =>
      this.request<PublicProduct[], any>({
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
     * @summary Creating new product
     * @request POST:/product
     * @secure
     */
    productControllerCreate: (data: CreateProductDto, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/product`,
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
     * @tags Product
     * @name ProductControllerUpdate
     * @summary Updating product
     * @request PATCH:/product/{id}
     * @secure
     */
    productControllerUpdate: (id: string, data: UpdateProductDto, params: RequestParams = {}) =>
      this.request<UpdateProductResponseDto, any>({
        path: `/product/${id}`,
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
     * @tags Product
     * @name ProductControllerSubmit
     * @summary Submitting product
     * @request PATCH:/product/{id}/submit
     * @secure
     */
    productControllerSubmit: (id: string, params: RequestParams = {}) =>
      this.request<UpdateProductResponseDto, any>({
        path: `/product/${id}/submit`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerActivate
     * @summary Publishing submitted product
     * @request PATCH:/product/{id}/activate
     * @secure
     */
    productControllerActivate: (id: string, params: RequestParams = {}) =>
      this.request<UpdateProductResponseDto, any>({
        path: `/product/${id}/activate`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerSuspend
     * @summary Suspending product
     * @request PATCH:/product/{id}/suspend
     * @secure
     */
    productControllerSuspend: (id: string, params: RequestParams = {}) =>
      this.request<UpdateProductResponseDto, any>({
        path: `/product/${id}/suspend`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductControllerGetPublicProduct
     * @summary Getting product details
     * @request GET:/product/slug/{slug}
     */
    productControllerGetPublicProduct: (slug: string, params: RequestParams = {}) =>
      this.request<
        ProductDetailsResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
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
        void,
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
      this.request<void, any>({
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
     * @summary Vendor product list with pagination
     * @request GET:/vendor/products
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
      this.request<VendorProductListResponseDto, any>({
        path: `/vendor/products`,
        method: "GET",
        query: query,
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
     * @request GET:/vendor/product/{id}
     */
    vendorControllerGetProductDetails: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/vendor/product/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerUpdateProduct
     * @request PATCH:/vendor/product/{id}
     */
    vendorControllerUpdateProduct: (id: string, data: UpdateProductDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/vendor/product/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  banners = {
    /**
     * No description
     *
     * @tags Banners
     * @name BannersControllerCreate
     * @summary Add new banner
     * @request POST:/banners
     * @secure
     */
    bannersControllerCreate: (data: NewBannerDto, params: RequestParams = {}) =>
      this.request<
        Banner,
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
        path: `/banners`,
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
     * @tags Banners
     * @name BannersControllerGetAllBanners
     * @summary Retrieve all public banners
     * @request GET:/banners/public
     */
    bannersControllerGetAllBanners: (params: RequestParams = {}) =>
      this.request<PublicBanner[], any>({
        path: `/banners/public`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Banners
     * @name BannersControllerDelete
     * @summary Delete banner
     * @request DELETE:/banners/{id}
     * @secure
     */
    bannersControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        Banner,
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
        path: `/banners/${id}`,
        method: "DELETE",
        secure: true,
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
