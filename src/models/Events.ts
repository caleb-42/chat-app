export interface IMessage {
	author: string;
	message: string;
}

export interface IMap { lat: string; lng: string }
export interface ICommandData {
	type: string;
	data: string | Array<number> | Array<string> | IMap | null;
}

export interface ICommand {
	author: string;
	command?: ICommandData;
}