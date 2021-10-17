import { DefaultEventsMap } from "@socket.io/component-emitter";
import React, { useState } from "react";
import { Socket } from "socket.io-client";
import { IUser } from "../models/Auth";
import { ICommand, IMessage } from "../models/Events";

export const context = React.createContext({
	user: undefined,
	chatHistory: [],
	command: null,
	socket: null,
	dispatch: (action: string, data: any) => { },
} as InitState)

interface InitState {
	user: undefined | null | IUser,
	command: null | ICommand,
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | null,
	chatHistory: Array<IMessage>,
	dispatch: (action: string, data: any) => void
}

export const ContextProvider = (props: any) => {
	const [state, setState] = useState<InitState>({
		user: undefined,
		command: null,
		chatHistory: [],
		socket: null,
		dispatch: (data) => console.log
	});

	const dispatch = (action: string, data: any) => {
		console.log(action, data, state)
		switch (action) {
			case ACTIONS.SET_CHAT_HISTORY:
				setState({ ...state, chatHistory: [...state.chatHistory, data] });
				break;
			case ACTIONS.SET_COMMAND:
				setState({ ...state, command: data });
				break;
			case ACTIONS.SET_USER:
				setState({ ...state, user: data });
				break;
			default:
				setState(state)
		}
	}

	return (
		<context.Provider value={{ ...state, dispatch, socket: props.socket }}>
			{props.children}
		</context.Provider>
	)
}

export const ACTIONS = {
	SET_USER: 'SET_USER',
	SET_CHAT_HISTORY: 'SET_CHAT_HISTORY',
	SET_COMMAND: 'SET_COMMAND',
}