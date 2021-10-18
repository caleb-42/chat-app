import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { ICommandData, IMap, IMessage } from "../../../models/Events";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addMsg } from "../../../redux/slices/chat.slice";
import CHeading from "../../atoms/Heading";
import { RatingComp } from "../../molecules/RatingComp";
import { ChatStyle } from "./styles";

export const Date = ({ command, close }: { command: string, close: () => void }) => {
	return <Box>
		{command}
	</Box>
}

export const Map = ({ command, close }: { command: IMap, close: () => void }) => {
	return <Box>
		{command.lat}
	</Box>
}

export const Rate = ({ command, close }: { command: Array<number>, close: () => void }) => {
	const { tool: { socket }, auth: { user } } = useAppSelector(({ tool, auth }) => ({ tool, auth }));
	const dispatch = useAppDispatch();

	return <ChatStyle className='rate' display="flex" justifyContent="center">
		<RatingComp
			classNames="stars"
			count={command[1]}
			onChange={(newRating: any) => {
				const data = { author: user?.username, message: `${newRating} Stars` } as IMessage;
				dispatch(addMsg(data));
				socket?.emit('message', data)
				close()
			}}
			size={20}
			activeColor="#ffd700"
		/>
	</ChatStyle>
}

export const Complete = ({ command, close }: { command: Array<string>, close: () => void }) => {
	const Router = useHistory()
	return <Box display="flex" justifyContent="space-around">
		{command.map(itm => <Button _hover={{ bg: itm.toLowerCase() === 'yes' ? 'green.400' : 'red.400' }} w="8rem" onClick={() => {
			itm.toLowerCase() === 'yes' ? Router.replace('/') : close();
		}} bg={itm.toLowerCase() === 'yes' ? 'green.500' : 'red.500'}>{itm}</Button>)
		}
	</Box >
}

const CommandView = (props: ICommandData | undefined, close: () => void) => {
	if (!props) return <Box />
	switch (props.type) {
		case 'date':
			return <>
				<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value='Please choose a date' />
				<Date command={props.data as string} close={close} />
			</>;
		case 'rate':
			return <>
				<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value='Please rate your experience' />
				<Rate command={props.data as Array<number>} close={close} />
			</>;
		case 'map':
			return <>
				<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value='Please select a location on the map' />
				<Map command={props.data as IMap} close={close} />
			</>;
		case 'complete':
			return <>
				<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value='Are you done?' />
				<Complete command={props.data as Array<string>} close={close} />
			</>;
		default:
			return <Box />
	}
}

export default CommandView;