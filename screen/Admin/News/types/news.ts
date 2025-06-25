export interface News {
	id: string;
	date: Date;
	heading: string;
	introduction: string;
	imageURL: string;
	isHilight: boolean;
	information: {
		first: {
			info: {
				heading: string;
				description: string[];
			};
			quote: string;
		};
		second: {
			imageURL: string;
			hilight: string;
			info: string[];
			info2: string[];
		};
		third: {
			heading: string;
			info: string[];
			hilight: string;
			info2: string[];
			imageURL: string;
			info3: string[];
		};
	};
}
