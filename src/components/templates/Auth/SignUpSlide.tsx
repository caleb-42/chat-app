import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthRoute from "../../../backend/auth";
import Helper from "../../../utils";
import { context } from "../../../utils/context";
import { signupValidation } from "../../../validations/auth";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import Logo from "../../atoms/Logo";
import CTextField from "../../atoms/TextField";
import { SignUpFormStyle } from "./styles";

export const SignUpForm = ({ switchPage }: any) => {
	const store = useContext(context);
	const [obsure, setAllObsure] = useState({
		pass: false,
		cpass: false,
	});

	const setObsure = (val: any) => setAllObsure({ ...state, ...val })

	const [state, setState] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const toast = useToast();

	const Router = useHistory();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const error = signupValidation(state.username, state.password, state.confirmPassword);
		console.log(error);
		if (error) return toast(Helper.toastObj(error, 'error'))

		AuthRoute.signUp(state.username, state.password).then((res) => {
			if(store.user) return;
			toast(Helper.toastObj('Authentication successful'))
			store.setUser(res)
			Router.replace('/');
		}).catch((err) => {
			console.log(err)
			toast(Helper.toastObj('Something when wrong', 'error'))
		});
	}
	const handleChange = (e: any) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	return <SignUpFormStyle flexDirection="column" className="form-container sign-in-container">
		<Logo />
		<Box className="screen-con" justifyContent="space-between" h="100%" w="100%" display="flex" flexDir="column" alignItems="flex-start" p="2rem">
			<Box h="100%" w="100%" display="flex" flexDir="column" alignItems="flex-start">
				<CHeading props={{ mb: "3.5rem" }} value="Register" />
				<Box className="form-con" w="100%">
					<form onSubmit={handleSubmit} className="w-100" action="" autoComplete="off">
						<CTextField value={state.username} mb="1.5rem" placeholder="username" name="username" onChange={handleChange} />
						<CTextField value={state.password} mb="1.5rem" props={{ type: !obsure.pass ? 'password' : 'text', }} rightAdornment={<Box cursor="pointer" onClick={() => setObsure({pass: !obsure.pass})} pt=".5rem">{obsure.pass ? <ViewIcon /> : <ViewOffIcon />}</Box>} placeholder="password" name="password" onChange={handleChange} />
						<CTextField mb="4rem" props={{ type: !obsure.cpass ? 'password' : 'text', }} rightAdornment={<Box cursor="pointer" onClick={() => setObsure({cpass: !obsure.cpass})} pt=".5rem">{obsure.cpass ? <ViewIcon /> : <ViewOffIcon />}</Box>} placeholder="confirm password" name="confirmPassword" onChange={handleChange} />
						<CButton props={{ type: 'submit' }} width="150px" >Sign up</CButton>
					</form>
				</Box>
			</Box>
			<Box w="100%" className="switch" display="flex" justifyContent="flex-end">
				<CButton onClick={() => switchPage(true)} colorScheme="primary" variant="outline" width="100px" height="2.1rem">Sign in</CButton>
			</Box>
		</Box>
	</SignUpFormStyle>
}

export const SignUpSide = ({ switchPage }: any) => {
	return <Box className="overlay-panel overlay-right">
		<CHeading props={{ mb: "2rem", maxW: "300px" }} fontWeight="400" color="#fff" value="Already have an account?" />
		<CButton variant="outline" colorScheme="wht" width="120px" onClick={() => switchPage(true)}> Sign in</CButton>
	</Box>
}