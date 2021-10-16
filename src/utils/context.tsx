import React, { useState } from "react"
import { User } from "../models/Auth"

export const context = React.createContext({
	user: undefined,
	setUser: () => { }
} as InitState)

interface InitState { user: undefined | null | User, setUser: (user: User | null) => void }

export const ContextProvider = (props: any) => {

	const setUser = (user: undefined | User | null) => {
		setState({ ...state, user });
	}

	const initState: InitState = {
		user: undefined,
		setUser,
	}

	const [state, setState] = useState(initState);

	return (
		<context.Provider value={state}>
			{props.children}
		</context.Provider>
	)
}