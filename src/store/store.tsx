import { configureStore, createSlice, combineReducers, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  language: "ru",
  reviews: [],
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState.language as 'ru' | 'en', 
  reducers: {
    setLanguage: (state, action: PayloadAction<'ru' | 'en'>) => action.payload, 
  },
});


const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialState.reviews,
  reducers: {
    setReviews: (state, action) => action.payload,
  },
});


const rootReducer = combineReducers({
  language: languageSlice.reducer,
  reviews: reviewsSlice.reducer,
});


export type RootState = ReturnType<typeof rootReducer>;


const store = configureStore({
  reducer: rootReducer,
});

export const { setLanguage } = languageSlice.actions;
export const { setReviews } = reviewsSlice.actions;

export default store;
