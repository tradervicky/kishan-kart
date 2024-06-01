export const API_URLS = {
    // auth
    LOGIN: '/api/auth/login',
    SIGNUP : '/api/auth/signup',
    //vendor
    GET_VENDOR_LIST : "/api/vendors",
    GET_VENDOR_BY_ID : "/api/vendors/",
    ADD_VENDOR : "/api/vendors/create",
    UPDATE_VENDOR : "/api/vendors/update/",
    //products
    GET_ALL_PRODUCTS : "/api/products",
    ADD_PRODUCT : "/api/products/add-product",
    //users
    ADD_USER : "/api/users/create",
    VIEW_ALL_USER : "/api/users/views",
    VIEW_USER_BY_ID : "/api/users/views/",
    UPDATE_USER : "/api/users/update/",
    DELETE_USER : "/api/users/delete/:id",

    // cards
    ADD_CARD : "/api/cards/add",
    VIEW_ALL_CARDS : "/api/cards",
    VIEW_CARD_BY_USER : "/api/cards/user/",
    UPDATE_CARD : "/api/cards/update/",
    
    //dashboard 
    VIEW_DASHBOARD : "/api/dashboard/stats"
  };

  