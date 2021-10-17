import { Box } from "@chakra-ui/layout";
import AuthRoute from "../../backend/auth";
import { useAppDispatch } from "../../redux/hooks";
import { signOut } from "../../redux/slices/auth.slice";
import CButton from "../atoms/Button";
import Logo from "../atoms/Logo";

export const NavBar = () => {
	const dispatch = useAppDispatch();

	return <Box w="100%" justifyContent="space-between" display="flex" alignItems="center">
		<Logo />
		<CButton width="150px" variant="outline" colorScheme="primary" onClick={() => {
			AuthRoute.signOut()
			dispatch(signOut());
		}}>Log out</CButton>
	</Box>
}