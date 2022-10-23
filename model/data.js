export const lectures = [
	{
		id: 1,
		day: "Monday",
		code: "com 224",
		title: "Introduction to Computing",
		time: "8:00 AM",
	},
	{
		id: 2,
		day: "Monday",
		code: "com 228",
		title: "Agricultural Science",
		time: "10:00 AM",
		lecturer: "Mr. Areegbe",
		color: "yellow",
	},
	{
		id: 3,
		day: "Monday",
		code: "gns 204",
		title: "Application Packages",
		time: "1:00 PM",
		lecturer: "Mrs. Afolayan",
		color: "yellow",
	},
	{
		id: 4,
		day: "Tuesday",
		code: "com 223",
		title: "Introduction to database",
		time: "8:00 AM",
		lecturer: "Engr. Ayangbekun",
		color: "yellow",
	},
	{
		id: 5,
		day: "Tuesday",
		code: "com 225",
		title: "5",
		time: "1:00 PM",
		lecturer: "Mr. Sopekan",
		color: "yellow",
	},
	{
		id: 6,
		day: "Wednesday",
		code: "com 226",
		title: "6",
		time: "1:00 PM",
		lecturer: "Engr. Ayangbekun",
		color: "yellow",
	},
	{
		id: 7,
		day: "Thursday",
		code: "com 221",
		title: "lorem dfstvevtveter erctvertve etrvevtervte ervtevrte etrvetv",
		time: "8:00 AM",
		lecturer: "Mr. Sopekan",
		color: "yellow",
	},
	{
		id: 8,
		day: "Friday",
		code: "com 222",
		title: "8",
		time: "8:00 AM",
		lecturer: "Mr. Ola",
		color: "yellow",
	},
];

export const todos = [
	{
		header: "Task",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae accusamus quidem alias minus obcaecati eligendi corporis cumque error doloremque?",
		color: "yellow",
	},
	{
		header: "Work",
		text: "Read my book",
		color: "yellow",
	},
	{
		header: "Task",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae accusamus quidem alias minus obcaecati eligendi corporis cumque error doloremque?",
		color: "yellow",
	},
	{
		header: "Work",
		text: "Read my book",
		color: "yellow",
	},
	{
		header: "Task",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae accusamus quidem alias minus obcaecati eligendi corporis cumque error doloremque?",
		color: "yellow",
	},
	{
		header: "Work",
		text: "Read my book",
		color: "yellow",
	},
	{
		header: "Task",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae accusamus quidem alias minus obcaecati eligendi corporis cumque error doloremque?",
		color: "yellow",
	},
	{
		header: "Read",
		text: "Read my book",
		color: "yellow",
	},
];

const getPresentDay = () => {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const d = new Date();
	let day = days[d.getDay()];
};
