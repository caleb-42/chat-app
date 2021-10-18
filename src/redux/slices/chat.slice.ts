import { createSlice } from '@reduxjs/toolkit';
import { ICommand, IMessage } from '../../models/Events';

interface ChatState {
  chatHistory: Array<IMessage>;
  command: ICommand | null
}

const initialState: ChatState = {
  chatHistory: [],
  command: null
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMsg: (state, action) => ({
      ...state,
      chatHistory: [...state.chatHistory, action.payload],
    }),
    setCommand: (state, action) => ({
      ...state,
      command: action.payload,
    }),
  },
});
export const { addMsg, setCommand } = chatSlice.actions;

export default chatSlice.reducer;
