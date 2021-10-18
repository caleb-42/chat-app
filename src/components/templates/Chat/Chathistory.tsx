import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCommand } from "../../../redux/slices/chat.slice";
import LoadPage from "../../../Routes/LoadPage";
import Helper from "../../../utils";
import { PopAnimStyle } from "../../../utils/styles";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import CText from "../../atoms/Text";
import CModal from "../../organism/Modal";
import CommandView from "./Command";

export const ChatHistory = () => {
	const { chat: { chatHistory, command }, tool: { socket } } = useAppSelector(({ chat, tool }) => ({ chat, tool }))
	const [isModalOpen, setModalOpen] = useState(false)
	const dispatch = useAppDispatch();

	const showCommand = () => {
		dispatch(setCommand(null))
		socket?.emit('command', {});
		setModalOpen(true)
	}

	useEffect(() => {
		Helper.gotoPage("#trigger", '#chat-con');
	}, [chatHistory?.length, socket]);

	return <>
		<CModal isOpen={isModalOpen} onClose={() => {
			setModalOpen(false)
		}}>
			<Box h="100%" display="flex" justifyContent="center" flexDir="column">
				{command ?
					<Box h="100%" textAlign="center">
						{CommandView(command?.command, () => {
							setModalOpen(false)
						})}
					</Box> :
					<LoadPage />
				}
			</Box>
		</CModal>
		<Box display="flex" flexDir="column" height="100%" w="100%">
			{chatHistory?.map?.((data, ind) => {
				return <Box alignSelf={data.author === 'ottonova bot' ? "flex-end" : "flex-start"} shadow="lg" textAlign="left" bg={data.author === 'ottonova bot' ? "#e9f0fd" : "#fff"} p="1rem" borderRadius="5px" mb="1rem" w="100%" maxW="350px" id={`msg${ind}`} key={ind} css={PopAnimStyle(data.author === 'ottonova bot' ? 'right' : 'left')}>
					<Box w="100%" >
						<CHeading color="#666" props={{ mb: ".2rem", fontSize: "14px" }} fontWeight="700" value={Helper.titleCase(data.author)} />
						<CText fontSize="16px" fontWeight="400" value={data.message} />
					</Box>
				</Box>
			})}
			<Box>
				<CButton fontSize=".8rem" onClick={showCommand} props={{ id: "trigger" }}>TRIGGER COMMMAND</CButton>
			</Box>
		</Box>
	</>
}