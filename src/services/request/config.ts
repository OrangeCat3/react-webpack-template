let BASE_URL: string|undefined;

if(process.env.REACT_APP_isMock) {
  BASE_URL = process.env.REACT_APP_Mock_BaseURL;
} else if(process.env.NODE_ENV === 'development' && !process.env.REACT_APP_isMock) {
  BASE_URL = process.env.REACT_APP_DEV_BaseURL;
} else if(process.env.NODE_ENV === 'production') {
  BASE_URL = process.env.REACT_APP_PRO_BaseURL;
}

console.log(BASE_URL);


const TIMEOUT = 5000;

export {
  BASE_URL,
  TIMEOUT
}