import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, 
    UPDATE_PRODUCT_FAILURE, 
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,} from "./ActionType";
import api,{API_BASE_URL} from "../../../config/api";

export const createProduct = (product) => async (dispatch) => {
    try {
         dispatch({ type: CREATE_PRODUCT_REQUEST });
        
        const { data } = await api.post(`${API_BASE_URL}/api/admin/products/`,product.data);
        
             dispatch({
               type: CREATE_PRODUCT_SUCCESS,
               payload: data,
             });
        
             console.log("created product ", data);
           } catch (error) {
             dispatch({
               type: CREATE_PRODUCT_FAILURE,
               payload:error.message,
             });
          }
}

export const deleteProduct = (productId) => async (dispatch) => {
    try {
         dispatch({ type: DELETE_PRODUCT_REQUEST });
        
        const { data } = await api.post(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
        
             dispatch({
               type: DELETE_PRODUCT_SUCCESS,
               payload: data,
             });
        
           } catch (error) {
             dispatch({
               type: DELETE_PRODUCT_FAILURE,
               payload:error.message,
             });
          }
}

export const updateProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
  
      const { data } = await api.put(
        `${API_BASE_URL}/api/admin/products/${product.productId}`,
        product
      );
  
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const getProducts = () => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
  
      const { data } = await api.get(`${API_BASE_URL}/api/admin/products/`);
  
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        payload:
        
            error.message,
      });
    }
  };