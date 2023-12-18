import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'
import chatReducer from '../Slices/chatSlice'
import channelMessagesSlice from '../Slices/channelMessagesSlice';
import userSettingsSlice from '../Slices/userSettingsSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        channelMessages : channelMessagesSlice,
        userSettings : userSettingsSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();