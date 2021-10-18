import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addMsg, setCommand } from "../../../redux/slices/chat.slice";
import Assets from "../../../utils/assets";
import { NavBar } from "../../molecules/NavBar";
import { ChatHistory } from "./Chathistory";
import { ChatInput } from "./ChatInput";

export const ChatComp = () => {
	const { socket } = useAppSelector(({ tool }) => tool)
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!socket?.hasListeners('message')) {
			socket?.on("message", data => {
				dispatch(addMsg(data));
			});
		}
		if (!socket?.hasListeners('command')) {
			socket?.on("command", data => {
				dispatch(setCommand(data));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])

	return <Box w="100%" h="100%" backgroundImage={Assets.WATERMARK_DARK}>
		<Box display="flex" p="1rem 2rem" mx="auto" flexDir="column" h="100%" w="100%" maxW="865px">
			<NavBar />
			<Box display="flex" flexDir="column" id="chat-con" overflowY="auto" flexGrow={1}>
				<ChatHistory />
			</Box>
			<ChatInput />
		</Box>
	</Box>

}
