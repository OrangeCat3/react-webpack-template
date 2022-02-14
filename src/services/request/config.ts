const devBaseURL = "http://localhost:3000"
const proBaseURL = "http://localhost:3000"

const BASE_URL = process.env.NODE_ENV === 'development'
                  ? devBaseURL : proBaseURL;
const TIMEOUT = 5000;

export {
  BASE_URL,
  TIMEOUT
}