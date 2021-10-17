import { Box } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import Assets from "../../../utils/assets";
import { context } from "../../../utils/context";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import { NavBar } from "../../molecules/NavBar";
import { Chatly } from "./ChatlyAnim";

const Home = () => {
	const theme = useTheme();
	const Router = useHistory();
	const store = useContext(context);

	return <Box w="100%" h="100%" p="1rem" backgroundImage={Assets.WATERMARK_DARK}>
		<Box display="flex" mx="auto" flexDir="column" h="100%" w="100%" maxW="800px">
			<NavBar />
			<Box mb="2rem" flexDir="column" alignItems="center" justifyContent="center" display="flex" flexGrow={1}>
				<CHeading fontWeight="400">
					Hello {store.user?.username}. I'm <span style={{ fontWeight: 700, color: theme.colors.secondaryColor.main }}>Chatly</span>
				</CHeading>
				<Box w="300px" h="350px" pos="relative">
					<Chatly />
				</Box>
				<CButton onClick={() => Router.push('/chat')} height="50px" width="200px">Start Chat</CButton>
			</Box>
		</Box>
	</Box>
}


export default Home;

