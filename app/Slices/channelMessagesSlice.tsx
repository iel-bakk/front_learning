import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from '../store/store';

type channelNames = {
    channels: channelConversation[],
    username : string
   };
   
type channelConversation = {
    channelName : string,
    messages : channelMessages[]
};

   type channelMessages = {
    sender : string,
    content : string,
    channelName : string
   }

   export const fetchChannelData = createAsyncThunk("channel/fetch", async (thunkApi) => {
    try {
        const response = await fetch("http://localhost:4000/Chat/channel", {
          method: "GET",
          credentials: 'include',
        });
        const data = await response.json();
        // console.log('Chat data from server:', data);
        return data;
      } catch (error) {
        console.error('Error fetching chat chat data:', error);
        throw error;
      }
})   
   
const initialState:{entity:channelNames, loading : boolean, error : string} = {
    entity: {
        channels : [],
        username : ''
    },
    loading : true,
    error : ''
  };

const channelMessagesSlice = createSlice({
  name: 'channelMessages',
  initialState,
  reducers: {
    updateChannelMessages: (state, action) => {
        const { channelName, messages } = action.payload;
        const channel = state.entity.channels.find(channel => channel.channelName === channelName);
        if (channel) {
          channel.messages = messages;
        }
      },
      addMessageToChannel : (state, action) => {
        const message: channelMessages  = action.payload;
        const channel = state.entity.channels.find(channel => channel.channelName === message.channelName);
        channel?.messages.push(message)
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannelData.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.loading = false;
      })
      .addCase(fetchChannelData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong !';
      });
  },
});


export const { updateChannelMessages } = channelMessagesSlice.actions;
export const { addMessageToChannel } = channelMessagesSlice.actions;

// export const { addInfos } = chatSlice.actions;
export default channelMessagesSlice.reducer;
// export const selectUser = (state: RootState) => state.user.user_Data
// export const selectLoading = (state: RootState) => state.user.loading
// export const selectError = (state: RootState) => state.user.error
