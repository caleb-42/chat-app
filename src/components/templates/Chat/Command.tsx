import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { addDays, format, parseISO } from "date-fns";
import { useState } from "react";
import { ICommandData, IMap, IMessage } from "../../../models/Events";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { chooseCommand } from "../../../redux/slices/chat.slice";
import CButton from "../../atoms/Button";
import CHeading from "../../atoms/Heading";
import CText from "../../atoms/Text";
import { RatingComp } from "../../molecules/RatingComp";
import { SimpleMap } from "./SimpleMap";
import { ChatStyle } from "./styles";

export const Date = ({ command, close }: { command: string, close: () => void }) => {
	const { tool: { socket }, auth: { user }, chat: { touchedCommands } } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const startDate = parseISO(command);
	let days = []

	for (let i = 0; i < 7; i++) {
		const newDay = format(addDays(startDate, i), 'EEEE');
		if (newDay === 'Saturday' || newDay === 'Sunday') continue;
		days.push(<CButton key={i} onClick={() => {
			const data = { author: user?.username, message: format(addDays(startDate, i), 'EEEE, dd/MM/yyyy hh:mm aaaa') } as IMessage;
			dispatch(chooseCommand({ msg: data, com: { type: 'date', data: command } }));
			socket?.emit('message', data)
			close()
		}} props={{ m: '.5rem' }} colorScheme="primary">{format(addDays(startDate, i), 'EEEE')}</CButton>)
	}
	return <>
		<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value={touchedCommands.date ? 'Choosen date' : 'Please choose a date'} />
		<Box>
			{touchedCommands.date ? <CText value={`You choose ${touchedCommands.date}`} /> : days}
		</Box>
	</>
}

export const Map = ({ command, close }: { command: IMap, close: () => void }) => {
	const { tool: { socket }, auth: { user }, chat: { touchedCommands } } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const [address, setAddress] = useState("");
	return <>
		<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value={touchedCommands.map ? 'Selected Address' : 'Please select a location on the map'} />

		<ChatStyle h={touchedCommands.map ? '' : "500px"} w="100%" className='marker' display="flex" justifyContent="center">
			{touchedCommands.map ? <CText value={`${touchedCommands.map}`} /> : <SimpleMap address={address} setAddress={(payload: { address: string, cnt: IMap }) => {
				if (address) {
					const data = { author: user?.username, message: `ADDRESS: ${payload.address},  LAT: ${payload.cnt.lat} LNG: ${payload.cnt.lng}` } as IMessage;
					dispatch(chooseCommand({ msg: data, com: { type: 'map', data: command } }));
					socket?.emit('message', data)
					close();
				}
				setAddress(payload.address)
			}} center={{ lat: Number(command.lat), lng: Number(command.lng) }} />}
		</ChatStyle>
	</>
}

export const Rate = ({ command, close }: { command: Array<number>, close: () => void }) => {
	const { tool: { socket }, auth: { user }, chat: { touchedCommands } } = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	return <>
		<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value={touchedCommands.rate ? 'Your experience' : 'Please rate your experience'} />
		<ChatStyle borderRadius="30px" overflow="hidden" className='rate' display="flex" justifyContent="center">
			{touchedCommands.rate ? <CText value={`You gave us a ${touchedCommands.rate} rating`} /> : <RatingComp
				classNames="stars"
				count={command[1]}
				onChange={(newRating: any) => {
					const data = { author: user?.username, message: `${newRating} Star` } as IMessage;
					dispatch(chooseCommand({ msg: data, com: { type: 'rate', data: command } }));
					socket?.emit('message', data)
					close()
				}}
				size={20}
				activeColor="#ffd700"
			/>}
		</ChatStyle>
	</>
}

export const Complete = ({ command, close }: { command: Array<string>, close: () => void }) => {
	const { tool: { socket }, auth: { user }, chat: { touchedCommands } } = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	//const Router = useHistory()

	return <>
		<CHeading props={{ textAlign: 'center', mb: '1.4rem', fontSize: '1.6rem' }} value='Are you done?' />
		<Box display="flex" justifyContent="space-around">
			{touchedCommands.complete ? <CText props={{ textAlign: 'center' }} value={`You selected ${touchedCommands.complete}`} /> : command.map(itm => <Button _hover={{ bg: itm.toLowerCase() === 'yes' ? 'green.400' : 'red.400' }} w="8rem" onClick={() => {
				const data = { author: user?.username, message: itm } as IMessage;
				dispatch(chooseCommand({ msg: data, com: { type: 'complete', data: command } }));
				socket?.emit('message', data)
				close()
				//itm.toLowerCase() === 'yes' ? Router.replace('/') : close();
			}} bg={itm.toLowerCase() === 'yes' ? 'green.500' : 'red.500'}>{itm}</Button>)
			}
		</Box >
	</>
}

const CommandView = (props: ICommandData | undefined, close: () => void) => {
	if (!props) return <Box />
	switch (props.type) {
		case 'date':
			return <Date command={props.data as string} close={close} />;
		case 'rate':
			return <Rate command={props.data as Array<number>} close={close} />;
		case 'map':
			return <Map command={props.data as IMap} close={close} />;
		case 'complete':
			return <Complete command={props.data as Array<string>} close={close} />;
		default:
			return <Box />
	}
}

export default CommandView;