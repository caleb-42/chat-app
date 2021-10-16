import React, { useState } from "react"
import { User } from "../models/Auth"

export const context = React.createContext({
	user: null,
	setUser: () => { }
} as InitState)

interface InitState { user: null | User, setUser: (user: User) => void }

export const ContextProvider = (props: any) => {

	const setUser = (user: User) => {
		setState({ ...state, user });
	}

	const initState: InitState = {
		user: null,
		setUser,
	}

	const [state, setState] = useState(initState);

	return (
		<context.Provider value={state}>
			{props.children}
		</context.Provider>
	)
}