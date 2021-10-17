import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '../../models/Events';

interface ChatState {
  chatHistory: Array<IMessage>;
}

const initialState: ChatState = {
  chatHistory: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMsg: (state, action) => ({
      ...state,
      chatHistory: [...state.chatHistory, action.payload],
    }),
  },
});
export const { addMsg } = chatSlice.actions;

export default chatSlice.reducer;
