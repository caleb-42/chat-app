import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Helper from "../../../utils";
import { PopAnimStyle } from "../../../utils/styles";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import CText from "../../atoms/Text";

export const ChatHistory = () => {
	const { chatHistory } = useAppSelector(({ chat }) => chat)

	useEffect(() => {
		Helper.gotoPage("#trigger", '#chat-con');
	}, [chatHistory?.length]);

	return <Box display="flex" flexDir="column" height="100%" w="100%">
		{chatHistory?.map?.((data, ind) => {
			return <Box alignSelf={data.author === 'ottonova bot' ? "flex-end" : "flex-start"} shadow="md" textAlign="left" bg={data.author === 'ottonova bot' ? "#e9f0fd" : "#fff"} p="1rem" borderRadius="5px" mb="1rem" w="100%" maxW="350px" id={`msg${ind}`} key={ind} css={PopAnimStyle(data.author === 'ottonova bot' ? 'right' : 'left')}>
				<Box w="100%" >
					<CHeading props={{ mb: ".2rem", fontSize: "13px" }} fontWeight="600" value={data.author} />
					<CText fontSize="16px" fontWeight="400" value={data.message} />
				</Box>
			</Box>
		})}
		<Box>
			<CButton fontSize=".8rem" props={{ id: "trigger" }}>TRIGGER COMMMAND</CButton>
		</Box>
	</Box>
}