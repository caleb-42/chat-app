import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthRoute from "../../../backend/auth";
import Helper from "../../../utils";
import { ACTIONS, context } from "../../../utils/context";
import { loginValidation } from "../../../validations/auth";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import Logo from "../../atoms/Logo";
import CTextField from "../../atoms/TextField";
import { SignUpFormStyle } from "./styles";

export const SignInForm = ({ switchPage }: any) => {
	const store = useContext(context);
	const [state, setState] = useState({
		username: '',
		password: '',
	});
	const [obsure, setObsure] = useState(false);
	const [loading, setLoading] = useState(false);

	const toast = useToast();

	const Router = useHistory();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const error = loginValidation(state.username, state.password);
		console.log(error);
		if (error) return toast(Helper.toastObj(error, 'error'))

		setLoading(true)
		AuthRoute.signIn(state.username, state.password).then((res) => {
			if (store.user) return;
			toast(Helper.toastObj('Authentication successful'))
			store.dispatch(ACTIONS.SET_USER , res)
			Router.replace('/');
		}).catch((err) => {
			console.log(err.message)
			toast(Helper.toastObj(err.message, 'error'))
		}).finally(() =>
			setLoading(false));
	}
	const handleChange = (e: any) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	return <SignUpFormStyle flexDirection="column" className="form-container sign-up-container">
		<Logo />
		<Box className="screen-con" justifyContent="space-between" h="100%" w="100%" display="flex" flexDir="column" alignItems="flex-start" p="2rem">
			<Box h="100%" w="100%" display="flex" flexDir="column" alignItems="flex-start">
				<CHeading props={{ mb: "3.5rem" }} value="Welcome back" />
				<Box className="form-con" w="100%">
					<form onSubmit={handleSubmit} className="w-100" action="" autoComplete="off">
						<CTextField mb="1.5rem" placeholder="username" name="username" onChange={handleChange} />
						<CTextField mb="4rem" props={{ type: !obsure ? 'password' : 'text', }} rightAdornment={<Box cursor="pointer" onClick={() => setObsure(!obsure)} pt=".5rem">{obsure ? <ViewIcon /> : <ViewOffIcon />}</Box>} placeholder="password" name="password" onChange={handleChange} />
						<CButton isLoading={loading} width="150px" props={{ type: 'submit' }}>Login</CButton>
					</form>
				</Box>
			</Box>
			<Box w="100%" className="switch" display="flex" justifyContent="flex-end">
				<CButton colorScheme="primary" variant="outline" width="100px" height="2.1rem" onClick={() => switchPage(false)}>Sign up</CButton>
			</Box>
		</Box>
	</SignUpFormStyle>

}

export const SignInSide = ({ switchPage }: any) => {
	return <Box className="overlay-panel overlay-left">
		<CHeading props={{ mb: "2rem", maxW: "300px" }} fontWeight="400" color="#fff" value="Don’t have an account yet?" />
		<CButton variant="outline" colorScheme="wht" width="120px" onClick={() => switchPage(false)}> Sign up</CButton>
	</Box>
}