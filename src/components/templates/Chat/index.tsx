import { Box } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import Assets from "../../../utils/assets";
import { ACTIONS, context } from "../../../utils/context";
import { NavBar } from "../../molecules/NavBar";
import { ChatHistory } from "./Chathistory";
import { ChatInput } from "./ChatInput";

export const ChatComp = () => {
	const store = useContext(context);
	const { dispatch, socket } = store;

	console.log('gain')
	useEffect(() => {
		socket?.on("message", data => {
			console.log('socket', data)
			dispatch(ACTIONS.SET_CHAT_HISTORY, data);
		});
		socket?.on("command", data => {
			dispatch(ACTIONS.SET_COMMAND, data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])

	return <Box w="100%" h="100%" bg="#B7C0CD">
		<Box display="flex" p="1rem 2rem" mx="auto" bgColor="#f5f5f5" backgroundImage={Assets.WATERMARK_DARK} flexDir="column" h="100%" w="100%" maxW="865px">
			<NavBar />
			<Box display="flex" flexGrow={1}>
				<ChatHistory />
			</Box>
			<ChatInput />
		</Box>
	</Box>

}
