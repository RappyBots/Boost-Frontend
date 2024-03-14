export default class Guild {
	id: string;
	name: string;
	icon?: string;
	banner?: string;
	messages?: {
		add?: {
			title?: string;
			description?: string;
		};
		loss?: {
			title?: string;
			description?: string;
		};
		dm?: string;
	};
	image?: {
		boost?: string;
		loss?: string;
		dm?: string;
	};
	roles?: {
		id: string;
		name: string;
		color: string;
		added: boolean;
	}[];
	channels?: {
		id: string;
		name: string;
		added: boolean;
	}[];
	invited: boolean;

	constructor(data: any) {
		this.id = data.id;
		this.name = data.name;
		this.icon = data.icon;
		this.banner = data.banner;
		this.messages = data.messages;
		this.image = data.image;
		this.roles = data.roles;
		this.channels = data.channels;
		this.invited = data.invited;
	}
}
