let BASE_URL: string|undefined;

if(process.env.NODE_ENV === 'development') {
  BASE_URL = process.env.REACT_APP_DEV_BaseURL;
}

const TIMEOUT = 5000;

export {
  BASE_URL,
  TIMEOUT
}