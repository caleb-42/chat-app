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
	/* 
		useEffect(() => {
			console.log('sacsc')
			const savedState = Helper.getLocalStorage({ key: 'state' });
			setState(savedState);
		}, []) */

	const dispatch = (action: string, data: any, oldState = state) => {
		switch (action) {
			case ACTIONS.SET_CHAT_HISTORY:
				var array = [...oldState.chatHistory, data]
				console.log('reducer', action, data, array);
				setState({
					chatHistory: array,
					user: state.user,
					command: state.command,
					socket: state.socket,
					dispatch: state.dispatch,
				});
				break;
			case ACTIONS.SET_COMMAND:
				setState({ ...oldState, command: data });
				break;
			case ACTIONS.SET_USER:
				setState({ ...oldState, user: data });
				break;
			default:
				setState(oldState)

		}
		//	Helper.saveToLocalStorage({ obj: state, key: 'state' })
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