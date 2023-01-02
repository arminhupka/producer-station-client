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
  user: string;
}

export interface FileDto {
  _id: string;
  filename: string;
  size: number;
  type: string;
  public: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface CreateLabelResponseDto {
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

export interface PublicLabelResponseDto {
  _id: string;
  name: string;
  description: string;
  email: string;
  avatar: string;
  header: string;
  slug: string;
  socials: Socials;
}

export interface UploadDto {
  fileName: string;
  fileType: string;
  uploadId: string;
  currentPart: number;
  parts: string;
  contentLength: number;
}

export interface VendorLabelResponseDto {
  _id: string;
  avatar: string | null;
  commissionRate: number;
  name: string;
  status: "Draft" | "Submitted" | "Active" | "Suspended";
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
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
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
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
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
}

/**
 * @title ProducerStation API
 * @version 1.0
 * @contact
 *
 * ProductStation API Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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

  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerRegisterUser
     * @summary Register user
     * @request POST:/users
     */
    usersControllerRegisterUser: (data: RegisterUserDto, params: RequestParams = {}) =>
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
    usersControllerActivateUserWithToken: (token: string, params: RequestParams = {}) =>
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
     */
    usersControllerUpdate: (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
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
    usersControllerResetPassword: (data: ResetPasswordRequestDto, params: RequestParams = {}) =>
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
    usersControllerResetPasswordWithToken: (token: string, data: ResetPasswordDto, params: RequestParams = {}) =>
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
     * @summary Create new label
     * @request POST:/labels
     */
    labelsControllerCreate: (data: NewLabelDto, params: RequestParams = {}) =>
      this.request<CreateLabelResponseDto, any>({
        path: `/labels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
     */
    labelsControllerUpdate: (id: string, data: UpdateLabelDto, params: RequestParams = {}) =>
      this.request<
        CreateLabelResponseDto,
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
      this.request<PublicLabelResponseDto, void>({
        path: `/labels/${id}`,
        method: "GET",
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
     */
    filesControllerDownload: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/files/${id}/download`,
        method: "GET",
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
     */
    filesControllerGetDetails: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/files/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerDelete
     * @summary Delete file
     * @request DELETE:/files/{id}
     */
    filesControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<FileDto, any>({
        path: `/files/${id}`,
        method: "DELETE",
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
  };
  vendor = {
    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabels
     * @summary Get user labels
     * @request GET:/vendor/labels
     */
    vendorControllerGetLabels: (params: RequestParams = {}) =>
      this.request<
        VendorLabelResponseDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/vendor/labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vendor
     * @name VendorControllerGetLabel
     * @summary Get label details
     * @request GET:/vendor/labels/{id}
     */
    vendorControllerGetLabel: (id: string, params: RequestParams = {}) =>
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
        format: "json",
        ...params,
      }),
  };
}
