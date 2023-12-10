interface Country {
	id: string;
	name: string;
	fullName: string;
	capital: string;
	description: string;
}

const countries: Country[] = [
	{
		id: "kd",
		name: "Kurdistan",
		fullName: "Republic of Kurdistan",
		capital: "Shingal",
		description: "New homeland of Kurds, post-2014",
	},
	{
		id: "jp",
		name: "Magical Japan",
		fullName: "Magical State of Japan",
		capital: "Kyoto",
		description: "Drastic version of Japan, with magic",
	},
	{
		id: "vn",
		name: "Magical Vietnam",
		fullName: "Magical State of Vietnam",
		capital: "Kinh Dương",
		description: "Vietnam with magical characteristics",
	},
	{
		id: "il",
		name: "New Israel",
		fullName: "State of New Israel",
		capital: "Birosalem",
		description: "Russia gave the Jews some lands",
	},
	{
		id: "mq",
		name: "Mashriq Arabia",
		fullName: "Mashriq Arab Union",
		capital: "Amman",
		description: "A union of the Levant Arabic states",
	},
	{
		id: "nz",
		name: "Awtera",
		fullName: "Republic of Awtera",
		capital: "Wellington",
		description: "New Zealand with Maori domination",
	},
	{
		id: "yu",
		name: "Nadoslavia",
		fullName: "Aerial Nation of Nadoslavia",
		capital: "Zrakoplov",
		description: "Flying country, Yugoslavia successor",
	},
	{
		id: "hm",
		name: "Homura village",
		fullName: "Village of the Homuras",
		capital: "Central Inn",
		description: "The Inn from Homura Tamura",
	},
	{
		id: "le",
		name: "Baltic Union",
		fullName: "Union of the Baltics",
		capital: "Riga",
		description: "Union of 3 Baltic states",
	},
]

export default countries;
export { type Country };
