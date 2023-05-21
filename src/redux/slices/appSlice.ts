import {createSlice} from '@reduxjs/toolkit';

export interface IAppState {
  language: string;
  isTablet: boolean;
  firstBoot: boolean;
  notify: boolean;
  loading: boolean;
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: null,
    firstBoot: true,
    notify: false,
    loading: false,
  },
  reducers: {
    changeLanguage(state, action) {
      return (state = {
        ...state,
        language: action.payload,
      });
    },
    setNotifyFirstBoot(state, action) {
      return {
        ...state,
        notify: action.payload.notify,
        firstBoot: false,
      };
    },
    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload ?? false,
      };
    },
  },
  extraReducers: builder => {
    // builder.addCase(loadAppData.pending, state => {
    //   state.booted = false;
    // });
  },
});

export const {
  changeLanguage,
  actionChangeTablet,
  setNotifyFirstBoot,
  setLoading,
} = appSlice.actions;
export default appSlice.reducer;
