enum Height { VeryShort, Short, Average, Tall, VeryTall, Maineka };
enum Category { Political, Cultural, Civil };

interface MagicalGirl {
	name: string;
	nickname: string;
	title: string;
	age: number;
	height: Height;
	ability: string;
	location: string;
	nationality: string;
	occupation: string;
	category: Category;
}

const magicalGirls: MagicalGirl[] = [
	{
		name: '',
		nickname: '',
		title: '',
		age: 0,
		height: Height.Average,
		ability: '',
		location: '',
		nationality: '',
		occupation: '',
		category: Category.Civil,
	}
]

export default magicalGirls;
