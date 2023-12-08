import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'
import chatReducer from '../Slices/chatSlice'
import channelMessagesSlice from '../Slices/channelMessagesSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        channelMessages : channelMessagesSlice

    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;