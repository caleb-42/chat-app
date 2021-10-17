import { Box } from "@chakra-ui/layout";
import { useContext } from "react";
import { context } from "../../../utils/context";

export const ChatHistory = () => {
	const { chatHistory } = useContext(context);

	console.log(chatHistory);
	return <Box>
		{chatHistory.map((data, ind) => {
			return <Box key={ind}>{data?.author}: {data?.message}</Box>
		})}
	</Box>
}