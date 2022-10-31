import { configureStore } from '@reduxjs/toolkit';
import layoutsReducer from './slices/layouts';
import fieldsReducer from './slices/fields';
import settingsReducer from './slices/settings';

export default configureStore({
  reducer: {
    layouts: layoutsReducer,
    fields: fieldsReducer,
    settings: settingsReducer,
  },
});
