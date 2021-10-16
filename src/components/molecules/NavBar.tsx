import { Box } from "@chakra-ui/layout";
import { useContext } from "react";
import AuthRoute from "../../backend/auth";
import { context } from "../../utils/context";
import CButton from "../atoms/Button";
import Logo from "../atoms/Logo";

export const NavBar = () => {
	const store = useContext(context);

	return <Box w="100%" justifyContent="space-between" display="flex" alignItems="center">
		<Logo />
		<CButton width="150px" variant="outline" colorScheme="primary" onClick={() => {
			AuthRoute.signOut()
			store.setUser(null);
		}}>Log out</CButton>
	</Box>
}