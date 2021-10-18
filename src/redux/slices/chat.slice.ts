import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommand, ICommandData, IMessage } from '../../models/Events';

interface ChatState {
  chatHistory: Array<IMessage>;
  command: ICommand | null,
  touchedCommands: { date: string; rate: string; map: string; complete: string }
}

const initialState: ChatState = {
  chatHistory: [],
  command: null,
  touchedCommands: { date: '', rate: '', map: '', complete: '' },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMsg: (state, action) => ({
      ...state,
      chatHistory: [...state.chatHistory, action.payload],
    }),
    setCommand: (state, action) => {
      return ({
        ...state,
        command: action.payload
      })
    },
    chooseCommand: (state, action: PayloadAction<{ msg: IMessage, com: ICommandData }>) => ({
      ...state,
      chatHistory: [...state.chatHistory, action.payload.msg],
      touchedCommands: { ...state.touchedCommands, [action.payload.com?.type as string]: action.payload.msg.message }
    }),
  },
});
export const { addMsg, setCommand, chooseCommand } = chatSlice.actions;

export default chatSlice.reducer;
