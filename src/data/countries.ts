interface Country {
	id: string;
	name: string;
	fullName: string;
	capital: string;
	languages: string[];
	description: string;
	/**
	 * The country's HTML coordinate.
	 * Assuming a 2000 x 857 pixels map
	 */
	location: [number, number];
}

const countries: Country[] = [
	{
		id: "kd",
		name: "Kurdistan",
		fullName: "Republic of Kurdistan",
		capital: "Shingal",
		languages: ["Kurdish"],
		description: "New homeland of Kurds, post-2014",
		location: [500, 85]
	},
	{
		id: "jp",
		name: "Magical Japan",
		fullName: "Magical State of Japan",
		capital: "Kyoto",
		languages: ["Japanese"],
		description: "Drastic version of Japan, with magic",
		location: [780, 90]
	},
	{
		id: "vn",
		name: "Magical Vietnam",
		fullName: "Magical State of Vietnam",
		capital: "Kinh Dương",
		languages: ["Vietnamese"],
		description: "Vietnam with magical characteristics",
		location: [720, 150]
	},
	{
		id: "il",
		name: "New Israel",
		fullName: "State of New Israel",
		capital: "Birosalem",
		languages: ["Hebrew", "Yiddish", "Russian"],
		description: "Russia gave the Jews some lands",
		location: [710, 30]
	},
	{
		id: "mq",
		name: "Mashriq Arabia",
		fullName: "Mashriq Arab Union",
		capital: "Amman",
		languages: ["Arabic"],
		description: "A union of the Levant Arabic states",
		location: [440, 115]
	},
	{
		id: "nz",
		name: "Awtera",
		fullName: "Republic of Awtera",
		capital: "Wellington",
		languages: ["Māori"],
		description: "New Zealand with Maori domination",
		location: [820, 300]
	},
	{
		id: "yu",
		name: "Nadoslavia",
		fullName: "Aerial Nation of Nadoslavia",
		capital: "Zrakoplov",
		languages: [""],
		description: "Flying country, Yugoslavia successor",
		location: [420, 70]
	},
	{
		id: "hm",
		name: "Homura village",
		fullName: "Village of the Homuras",
		capital: "Central Inn",
		languages: ["Japanese"],
		description: "The Inn from Homura Tamura",
		location: [0, 0]
	},
	{
		id: "le",
		name: "Baltic Union",
		fullName: "Union of the Baltics",
		capital: "Riga",
		languages: ["Latvian", "Lithuanian", "Estonian"],
		description: "Union of 3 Baltic states",
		location: [460, 10]
	},
]

export default countries;
export { type Country };
