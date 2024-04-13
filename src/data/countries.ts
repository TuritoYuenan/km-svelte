interface Country {
	id: string;
	name: string;
	fullName: string;
	capital: string;
	languages: string[];
	description: string[];
	/**
	 * The country's HTML coordinate.
	 * Assuming a 2000 x 857 pixels map
	 */
	position: [number, number];
}

const countries: Country[] = [
	{
		id: "kd",
		name: "Kurdistan",
		fullName: "Republic of Kurdistan",
		capital: "Shingal",
		languages: ["Kurdish"],
		description: [
			"In this fictional universe, the Kurdish people have actually gained independence in early 2014, following an uprising against Turkish and Mashraqi powers.",
			"The uprising - with involvement of famous magical girl Layla - led to establishing a unified Kurdish country, which later got recognised in Q3 of 2014.",
		],
		position: [510, 85]
	},
	{
		id: "jp",
		name: "Magical Japan",
		fullName: "Magical State of Japan",
		capital: "Kyoto",
		languages: ["Japanese"],
		description: [
			"Japan with magical characteristics"
		],
		position: [780, 100]
	},
	{
		id: "vn",
		name: "Magical Vietnam",
		fullName: "Magical State of Vietnam",
		capital: "Kinh Dương",
		languages: ["Vietnamese"],
		description: [
			"Vietnam with magical characteristics"
		],
		position: [710, 160]
	},
	{
		id: "il",
		name: "New Israel",
		fullName: "State of New Israel",
		capital: "Birosalem",
		languages: ["Hebrew", "Yiddish", "Russian"],
		description: [
			"In this fictional universe, the Soviet idea of Jewish Autonomous Oblast (JAO) had instead succeeded in fostering a proper Jewish home",
			"The oblast then evolved past Soviet dependency, and in late 1991 when the union dissolved, cut away to form the state of New Israel",
			"The existance of a new, more peaceful homeland attracted Jewish people to migrate in, leaving the old location to Palestine, nowadays a part of Mashriq Arabia",
		],
		position: [695, 55]
	},
	{
		id: "mq",
		name: "Mashriq Arabia",
		fullName: "Mashriq Arab Union",
		capital: "Amman",
		languages: ["Arabic"],
		description: ["A union of the Levant Arabic states"],
		position: [440, 130]
	},
	{
		id: "nz",
		name: "Awtera",
		fullName: "Republic of Awtera",
		capital: "Wellington",
		languages: ["Māori", "English"],
		description: ["New Zealand with Maori domination"],
		position: [820, 300]
	},
	{
		id: "yu",
		name: "Nadoslavia",
		fullName: "Aerial Nation of Nadoslavia",
		capital: "Zrakoplov",
		languages: ["Serbian", "Croatian", "Slovene"],
		description: [
			"In this fictional universe, the Yugoslav Wars came to an abrupt and tragic end in 1997 when a terrorist group "
		],
		position: [400, 85]
	},
	{
		id: "--",
		name: "Homura village",
		fullName: "Village of the Homuras",
		capital: "Central Inn",
		languages: ["Japanese"],
		description: [
			"This is a small community consisting of multiverse versions of Homura (magical girl from Madoka Magica)",
			"The village is located in the interdimensional location between timelines (as inherited from the Homura Tamura spinoff)",
		],
		position: [0, 0]
	},
	{
		id: "le",
		name: "Baltic Union",
		fullName: "Union of the Baltics",
		capital: "Riga",
		languages: ["Latvian", "Lithuanian", "Estonian"],
		description: [
			"This is the union of the 3 Baltic states Latvia, Lithuania, and Estonia established after the dissolve of the Soviet Union"
		],
		position: [450, 25]
	},
]

export default countries;
export { type Country };
