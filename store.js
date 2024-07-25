import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { infoAPI } from './redux/services/main/about';
import { projectAPI } from './redux/services/project/project';
import { skillAPI } from './redux/services/skill/skill';
import { contactPostAPI } from './redux/services/main/contact';

const rootReducer = combineReducers({
    [infoAPI.reducerPath]: infoAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [skillAPI.reducerPath]: skillAPI.reducer,
    [contactPostAPI.reducerPath]: contactPostAPI.reducer,
});

const middleware = (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        infoAPI.middleware,
        projectAPI.middleware,
        skillAPI.middleware,
        contactPostAPI.middleware
    );
};

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

setupListeners(store.dispatch);

export default store;