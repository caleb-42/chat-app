import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { IMessage } from "../../../models/Events";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addMsg } from "../../../redux/slices/chat.slice";
import Assets from "../../../utils/assets";
import CTextField from "../../atoms/TextField";

export const ChatInput = () => {
	const dispatch = useAppDispatch();
	const { auth: { user }, tool: { socket } } = useAppSelector(state => state)

	const [msg, setMsg] = useState('');
	const emitMsg = (e: any) => {
		if (!msg) return;
		e.preventDefault();
		const data = { author: user?.username, message: msg } as IMessage;
		dispatch(addMsg(data));
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