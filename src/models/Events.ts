export interface IMessage {
	author: string;
	message: string;
}

export interface ICommand {
	author: string;
	command?: {
		type: string,
		data: string | Array<number> | Array<string> | { lat: string, lng: string } | null;
	}
}