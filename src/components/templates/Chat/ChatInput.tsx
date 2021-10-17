import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useContext, useState } from "react";
import { Socket } from "socket.io-client";
import { IMessage } from "../../../models/Events";
import Assets from "../../../utils/assets";
import { ACTIONS, context } from "../../../utils/context";
import CTextField from "../../atoms/TextField";

export const ChatInput = () => {
	const store = useContext(context);
	const { dispatch, user, socket } = store;
	const [msg, setMsg] = useState('');
	const emitMsg = (e: any) => {
		if (!msg) return;
		console.log(msg)
		e.preventDefault();
		const data = { author: user?.username, message: msg } as IMessage;
		dispatch(ACTIONS.SET_CHAT_HISTORY, data);
		socket?.emit('message', data);
	}

	return <form onSubmit={emitMsg}>
		<Box w="100%" display="flex" alignItems="center">
			<CTextField value={msg} onChange={(e) => setMsg(e.target.value)} width="100%" />
			<Box ml="1rem">
				<IconButton type="submit" borderRadius="60px" h="60px" w="60px" colorScheme="primary" aria-label="send">
					<Image src={Assets.SEND_MSG} />
				</IconButton>
			</Box>
		</Box>
	</form>
}