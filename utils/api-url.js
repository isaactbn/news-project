const BASE_URL = 'https://newsapi.org/v2'

// NASABAH
export const API_USER = {
  NEWS_LIST: 'https://newsapi.org/v2/everything?q=tesla&from=2023-05-14&sortBy=publishedAt&apiKey=a09ad5ff23f64fde8f66201265090c46',
  LIST_AUTH: `${BASE_URL}/policyholders`,
  LIST: param => `${BASE_URL}/everything${param}`,
}
