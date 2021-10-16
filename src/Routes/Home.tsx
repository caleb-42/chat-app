import { Box } from "@chakra-ui/layout";
import React, { useContext } from "react";
import AuthRoute from "../backend/auth";
import CButton from "../components/atoms/Button";
import CHeading from "../components/atoms/Heading";
import { context } from "../utils/context";

const HomePage = () => {
	const store = useContext(context);

	return <Box>
		<CHeading props={{ mb: "1rem" }} value="Home" />
		<CButton variant="outline" colorScheme="primary" onClick={() => {
			AuthRoute.signOut()
			store.setUser(null);
		}}>Sign out</CButton>
	</Box>
}

export default HomePage;