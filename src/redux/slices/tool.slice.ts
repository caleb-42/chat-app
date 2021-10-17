import { createSlice } from '@reduxjs/toolkit';
import { DefaultEventsMap } from "@socket.io/component-emitter";
import socketIOClient, { Socket } from "socket.io-client";

const endpoint: string = process.env.REACT_APP_SOCKET_ENDPOINT ?? '';
const socket = socketIOClient(endpoint);

interface ToolsState {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const initialState: ToolsState = {
  socket,
};

export const toolsSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
});

export default toolsSlice.reducer;
