export const isBrowser = typeof window !== 'undefined';
export const baseURL = isBrowser
  ? window.location.origin
  : process.env.BASE_URL;
export const apiURL =
  process.env.NODE_ENV === 'production'
    ? `${baseURL}/api/v1`
    : process.env.API_URL;

export const manageURL =
  process.env.NODE_ENV === 'production'
    ? `${baseURL}/manage`
    : process.env.MANAGE_URL;

export const publishURL =
  process.env.NODE_ENV === 'production'
    ? 'https://publish.vn'
    : process.env.PUBLISH_URL;

export const apiPublishURL =
  process.env.NODE_ENV === 'production'
    ? 'https://sv.publish.vn/api'
    : process.env.PUBLISH_API_URL;

export const staticURL = 'https://file.publish.vn';
export const cdnURL = 'https://cdn.publish.vn';
export const cdnURLImg = 'https://cdn.publish.vn/images';
export const cdnURLCss = 'https://cdn.publish.vn/css';
export const perPage = 10;
export const perPageLatest = 10;
export const perPagePremium = 10;
export const perPageHome = 10;

export const sizeImageMax = 2 * 1024 * 1024;
export const sizeImageMaxMedium = 10 * 1024 * 1024;
export const sizeImageMaxLarge = 25 * 1024 * 1024;
export const facebookAppId = '1515704551966527';
