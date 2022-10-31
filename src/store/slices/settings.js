import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'settings',
  initialState: {
    primaryColor: 'rgb(26, 176, 179)',
  },
  reducers: {},
});

// export const {} = slice.actions;

export const selectSetting = (id) => (state) => {
  return state.settings[id];
};

export default slice.reducer;
