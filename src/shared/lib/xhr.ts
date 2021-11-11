const METHODS = {
  GET: "GET" as const,
  POST: "POST" as const,
  PUT: "PUT" as const,
  DELETE: "DELETE" as const,
};

type TOptions<T extends Record<string, unknown> = Record<string, unknown>> = {
  data?: T;
  headers?: Record<string, string>;
  timeout?: number;
};

type TMethodsKeys = keyof typeof METHODS;

type TRequestOptions<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  method: typeof METHODS[TMethodsKeys];
  data?: T;
  headers?: Record<string, string>;
};

function queryStringify(data: Record<string, unknown>) {
  if (data instanceof Object === false) {
    return null;
  }

  const result = Object.entries(data).reduce(
    (acc, [key, value]) => (acc += `&${key}=${value}`),
    ""
  );

  return `?${result.slice(1)}`;
}

type THTTPArgs = {
  baseUrl?: string;
};

export class HTTP {
  baseUrl: string;

  constructor({ baseUrl }: THTTPArgs = {}) {
    this.baseUrl = baseUrl ?? "";
  }

  get = <
    T extends unknown = unknown,
    R extends Record<string, unknown> = Record<string, unknown>
  >(
    url: string,
    options: TOptions<R> = {}
  ): Promise<T> => {
    const { data, headers, timeout } = options;

    return this.request(
      this.baseUrl + url,
      { data, headers, method: METHODS.GET },
      timeout
    );
  };

  post = <T extends unknown = unknown>(url: string, options: TOptions = {}) => {
    const { data, headers, timeout } = options;

    return this.request<T>(
      this.baseUrl + url,
      { data, headers, method: METHODS.POST },
      timeout
    );
  };

  put = <T extends unknown = unknown>(url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request<T>(
      this.baseUrl + url,
      { data, headers, method: METHODS.PUT },
      timeout
    );
  };

  delete = <T extends unknown = unknown>(url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request<T>(
      this.baseUrl + url,
      { data, headers, method: METHODS.DELETE },
      timeout
    );
  };

  request = <T extends unknown = unknown>(
    url: string,
    options: TRequestOptions = { method: METHODS.GET },
    timeout = 5000
  ) => {
    const {
      method,
      data,
      headers = {
        "Content-type": "application/json",
      },
    } = options;

    return new Promise<T>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const requestUrl =
        method === METHODS.GET && data ? url + queryStringify(data) : url;

      xhr.open(method, requestUrl, true);

      xhr.timeout = timeout;

      for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }

      xhr.onload = function () {
        resolve(xhr as T);
      };

      const handleError = (err: unknown) => {
        reject(err);
      };

      xhr.onabort = handleError;
      xhr.onerror = handleError;
      xhr.ontimeout = handleError;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export function fetchWithRetry(
  url: string,
  options: { retries: number } & TOptions
) {
  const { retries, ...rest } = options;
  let requestCount = 0;

  const http = new HTTP();

  try {
    console.log(retries);
    requestCount += 1;
    return http.get(url, rest);
  } catch (err: unknown) {
    console.log(err);
    if (requestCount < retries) {
      requestCount += 1;
      return http.get(url, rest);
    } else {
      throw new Error(String(err));
    }
  }
}
