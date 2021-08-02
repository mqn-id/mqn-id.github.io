const CONFIG = {
  TOKEN: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://dicoding-restaurant-api.el.r.appspot.com/images/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: {
    prefix: 'mqn-restaurant',
    suffix: 'v1',
    precache: 'app-shell',
  },
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
