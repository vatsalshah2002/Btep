import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customer/Product/Reducer";
import cartReducer from "./Customer/Cart/Reducer";
import { orderReducer } from "./Customer/Order/Reducer";
import ReviewReducer from "./Customer/Review/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";
import productReducer from "./Admin/Product/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,
    adminOrder:adminOrderReducer,

    adminsProduct:productReducer,
    adminsOrder:adminOrderReducer
}); 

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))
//export const store = createStore(rootReducers, applyMiddleware(thunk));
//export const store = configureStore({
 //   reducer: rootReducers,
 //   middleware: [thunk],
//  });