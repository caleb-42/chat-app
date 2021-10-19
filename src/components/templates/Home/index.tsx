import { Box } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import React from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "../../../redux/hooks";
import Assets from "../../../utils/assets";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import { NavBar } from "../../molecules/NavBar";
import { Chatly } from "./ChatlyAnim";

const Home = () => {
	const theme = useTheme();
	const Router = useHistory();
	const { user } = useAppSelector(({ auth }) => auth)

	return <Box w="100%" h="100%" p="1rem" backgroundImage={Assets.WATERMARK_DARK}>
		<Box display="flex" mx="auto" flexDir="column" h="100%" w="100%" maxW="800px">
			<NavBar />
			<Box mb="2rem" flexDir="column" alignItems="center" justifyContent="center" display="flex" flexGrow={1}>
				<CHeading className="greeting" fontWeight="400">
					Hello {user?.username}. I'm <span style={{ fontWeight: 700, color: theme.colors.secondaryColor.main }}>Chatly</span>
				</CHeading>
				<Box w="300px" h="350px" pos="relative">
					<Chatly />
				</Box>
				<CButton className="start-chat" onClick={() => Router.push('/chat')} height="50px" width="200px">Start Chat</CButton>
			</Box>
		</Box>
	</Box>
}


export default Home;

