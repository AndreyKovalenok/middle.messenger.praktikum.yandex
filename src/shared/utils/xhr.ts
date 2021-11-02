const METHODS = {
  GET: "GET" as const,
  POST: "POST" as const,
  PUT: "PUT" as const,
  DELETE: "DELETE" as const,
};

type TOptions = {
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
  timeout?: number;
};

type TMethodsKeys = keyof typeof METHODS;

type TRequestOptions = {
  method: typeof METHODS[TMethodsKeys];
  data?: Record<string, unknown>;
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

export class HTTPTransport {
  get = (url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request(url, { data, headers, method: METHODS.GET }, timeout);
  };

  post = (url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request(url, { data, headers, method: METHODS.POST }, timeout);
  };

  put = (url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request(url, { data, headers, method: METHODS.PUT }, timeout);
  };

  delete = (url: string, options: TOptions) => {
    const { data, headers, timeout } = options;

    return this.request(
      url,
      { data, headers, method: METHODS.DELETE },
      timeout
    );
  };

  request = (
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

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const requestUrl =
        method === METHODS.GET && data ? url + queryStringify(data) : url;

      xhr.open(method, requestUrl, true);

      xhr.timeout = timeout;

      for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }

      xhr.onload = function () {
        resolve(xhr);
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

  const http = new HTTPTransport();

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
