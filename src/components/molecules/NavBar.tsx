import { IconButton } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthRoute from "../../backend/auth";
import { useAppDispatch } from "../../redux/hooks";
import { signOut } from "../../redux/slices/auth.slice";
import { resetChat } from "../../redux/slices/chat.slice";
import CButton from "../atoms/Button";
import Logo from "../atoms/Logo";

export const NavBar = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const [state, setState] = useState(false);

	console.log(history)

	useEffect(() => {
		if (history.location.pathname === "/chat") setState(true)
		else setState(false)
	}, [history.location.pathname])

	return <Box w="100%" mb="1rem" justifyContent="space-between" display="flex" alignItems="center">
		<Box display="flex" shadow="none" justifyContent="flex-start">
			{state && <IconButton mb="20px" mr="1rem" onClick={() => {
				history.replace('/')
			}} variant="solid" aria-label="back-button">
				<ArrowBackIcon fontWeight="bold" width="1.3rem" color="#444" />
			</IconButton>}
			<Logo />
		</Box>
		{!state ? <CButton width="150px" variant="outline" colorScheme="primary" onClick={() => {
			AuthRoute.signOut()
			dispatch(signOut());
		}}>Log out</CButton> :
			<CButton width="150px" size="sm" colorScheme="primary" variant="outline" onClick={() => {
				dispatch(resetChat());
			}}>Reset</CButton>
		}
	</Box >
}