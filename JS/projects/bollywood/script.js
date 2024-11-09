const mainDiv = document.getElementById("moviesList")
const movies = [
	{
		title: "Baazigar",
		year: "1993",
		genres: ["Crime", "Drama", "Musical"],
		ratings: [
			4, 3, 5, 8, 5, 5, 3, 10, 9, 8, 5, 9, 10, 5, 8, 9, 1, 1, 5, 7, 7, 10, 7, 8,
			1, 6, 6, 5, 10, 9,
		],
		poster:
			"MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT175M",
		releaseDate: "1993-11-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Widowed Madan Chopra lives a very wealthy lifestyle with two daughters, Seema and Priya. His passion is car racing, and realizing that he is not young anymore, has his last race and wins - only to find out that another competitor, Vicky Malhotra, let him win. Madan befriends Vicky, introduces him to Priya and invites him to work for him in Bombay. Vicky and Priya are attracted to each other, much to Madan's delight and he announces their marriage. Before that could happen, Seema kills herself by throwing herself down from the roof of a multi-storied building. While Madan wants to close this case due to embarrassment, Seema meets with her college friend, Police Inspector Karan, and together they begin to unravel a plot that may well end Madan and the lives of others as well.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Shah Rukh Khan", "Rakhee Gulzar", "Kajol"],
		imdbRating: 7.8,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "24",
		year: "2016",
		genres: ["Action", "Romance", "Sci-Fi"],
		ratings: [
			5, 1, 5, 1, 3, 9, 3, 2, 8, 6, 7, 2, 9, 9, 9, 10, 6, 5, 1, 10, 7, 4, 5, 8,
			6, 2, 4, 10, 9, 6,
		],
		poster:
			"MV5BZmYyNWRmNjUtODg5OC00YmRjLTkwYWMtMjY5NjA5ZjhkNDg3XkEyXkFqcGdeQXVyNDA1NTY2Nzk@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "",
		duration: "PT164M",
		releaseDate: "2016-05-06",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A Sci-Fi family revenge drama happening between a scientist, his evil brother and the scientist's son, over a time travel gadget.                Written by\nNaveen Sankaran",
		actors: ["Suriya", "Samantha Ruth Prabhu", "Nithya Menon"],
		imdbRating: 8.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZmYyNWRmNjUtODg5OC00YmRjLTkwYWMtMjY5NjA5ZjhkNDg3XkEyXkFqcGdeQXVyNDA1NTY2Nzk@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Jodhaa Akbar",
		year: "2008",
		genres: ["Action", "Adventure", "Biography"],
		ratings: [
			7, 2, 3, 8, 6, 1, 4, 2, 1, 10, 6, 3, 7, 4, 4, 1, 3, 9, 5, 10, 2, 6, 9, 1,
			3, 7, 9, 7, 3, 9,
		],
		poster:
			"MV5BMTI1ODQ2MDIxMl5BMl5BanBnXkFtZTcwNTc3Mzk1MQ@@._V1_SY361_SX250_AL_.jpg",
		contentRating: "",
		duration: "PT213M",
		releaseDate: "2008-02-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Jodhaa Akbar is a sixteenth century love story about a marriage of alliance that gave birth to true love between a great Mughal Emperor, Akbar and a Rajput princess, Jodhaa. Politically, success knew no bounds for Emperor Akbar, After having secured the Hindu Kush, he furthered his realm by conquest until his empire extended from Afghanistan to the Bay of Bengal, and from the Himalayas to the Godhavari River. Through a shrewd blend of tolerance, generosity and force, Akbar won the allegiance of the Rajputs, the most belligerent Hindus. But little did Akbar know that when he married Jodhaa, a fiery Rajput princess, in order to further strengthen his relations with the Rajputs, he would in turn be embarking upon a new journey - the journey of true love. The daughter of King Bharmal of Amer, Jodhaa resented being reduced to a mere political pawn in this marriage of alliance, and Akbar's biggest challenge now did not merely lie in winning battles, but in winning the love of Jodhaa - a ...                Written by\nhEmRaJ (gavin_coolhgr@hotmail.com)",
		actors: ["Hrithik Roshan", "Aishwarya Rai Bachchan", "Sonu Sood"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1ODQ2MDIxMl5BMl5BanBnXkFtZTcwNTc3Mzk1MQ@@._V1_SY361_SX250_AL_.jpg",
	},
	{
		title: "Wake Up Sid",
		year: "2009",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			3, 6, 7, 10, 6, 7, 3, 3, 1, 4, 10, 2, 6, 3, 6, 1, 6, 7, 8, 4, 10, 9, 10,
			4, 6, 2, 5, 6, 2, 4,
		],
		poster:
			"MV5BMTg2NTk2MjU5NV5BMl5BanBnXkFtZTcwNTY0Nzg4Mg@@._V1_SY489_SX324_AL_.jpg",
		contentRating: "",
		duration: "PT138M",
		releaseDate: "2009-10-02",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"In Mumbai, Sid Mehra is, in the words of his father, an arrogant, spoiled brat. He lives with a doting mother, subservient brother, and a father who covers his expenses and credit card bills. Sid takes his college finals then starts work at his father's business; he lasts less than a week before walking out. At a graduation party, he meets Aisha, newly arrived from Calcutta and set on becoming a writer. He shows her the city and helps her refurbish a rented flat. He asks if she'd like to progress from friend to something more, but she says no: he lacks ambition and isn't her type. Will her words, his exam results, a confrontation with his parents, and a break with his friends be enough to wake Sid up?                Written by\n<jhailey@hotmail.com>",
		actors: ["Ranbir Kapoor", "Konkona Sen Sharma", "Supriya Pathak"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NTk2MjU5NV5BMl5BanBnXkFtZTcwNTY0Nzg4Mg@@._V1_SY489_SX324_AL_.jpg",
	},
	{
		title: "Saala Khadoos",
		year: "2016",
		genres: ["Action", "Drama", "Sport"],
		ratings: [
			2, 3, 7, 2, 7, 2, 2, 10, 1, 2, 7, 6, 4, 2, 2, 1, 6, 3, 4, 2, 2, 2, 3, 5,
			7, 10, 7, 8, 3, 10,
		],
		poster:
			"MV5BM2Q5YmM3YjMtOTE2Mi00MDg5LThkZjctYzUxOWU2ZTM1ZDk4XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SY334_SX250_AL_.jpg",
		contentRating: "",
		duration: "PT109M",
		releaseDate: "2016-01-29",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"An under-fire boxing coach, Prabhu is transferred from Hisar in Haryana to Chennai as his bosses at the Boxing Council do not like his disrespectful rule-breaking unconventional ways. In Chennai, he chances upon the raw fighting talent of Madhi, the sibling of aspiring boxer Lakshmi. He decides to put all his effort to tame Madhie and get her to shine but he is repeatedly put off by her playfulness & distrust.                Written by\nPipingHotViews",
		actors: ["Madhavan", "Nassar", "Radha Ravi"],
		imdbRating: 7.7,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BM2Q5YmM3YjMtOTE2Mi00MDg5LThkZjctYzUxOWU2ZTM1ZDk4XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SY334_SX250_AL_.jpg",
	},
	{
		title: "Qayamat Se Qayamat Tak",
		year: "1988",
		genres: ["Action", "Drama", "Musical"],
		ratings: [
			5, 2, 10, 3, 2, 5, 8, 1, 4, 5, 3, 6, 9, 8, 9, 9, 8, 4, 10, 2, 1, 1, 5, 9,
			3, 1, 9, 8, 8, 7,
		],
		poster:
			"MV5BMTY4MDQyMDUzOF5BMl5BanBnXkFtZTcwMjUyNTAzMQ@@._V1_SY250_SX168_AL_.jpg",
		contentRating: "",
		duration: "PT162M",
		releaseDate: "1988-03-01",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Both Dhanraj Singh and Randhir Singh are two bitter and old time enemies. They faced a disastrous situation when there children, Raj and Rashmi falls deeply in love. They openly declares there hatred for one another and will do anything in there power even kill but they will not accept there children's choice. But Raj and Rashmi is dedicated to there love and is not willing to accept the fact that there dads are enemies.                Written by\ngAvInDrA (brave_loverboy2004@hotmail.com)",
		actors: ["Aamir Khan", "Juhi Chawla", "Goga Kapoor"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4MDQyMDUzOF5BMl5BanBnXkFtZTcwMjUyNTAzMQ@@._V1_SY250_SX168_AL_.jpg",
	},
	{
		title: "Delhi Belly",
		year: "2011",
		genres: ["Comedy", "Crime", "Drama"],
		ratings: [
			10, 9, 8, 4, 3, 1, 4, 4, 4, 1, 1, 4, 4, 3, 2, 9, 6, 3, 6, 8, 2, 8, 2, 4,
			10, 4, 5, 6, 3, 2,
		],
		poster:
			"MV5BNTI3ODQwNDAzN15BMl5BanBnXkFtZTcwMDg5NDExNg@@._V1_SY360_SX250_AL_.jpg",
		contentRating: "",
		duration: "PT103M",
		releaseDate: "2011-07-01",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Delhi-based Sonia agrees to deliver a package for Vladimir Dragunsky and asks her rather unkempt and debt-ridden fianc\u00e9, Tashi Malhotra, to do it for her. Tashi, in turn, asks one of two of his room-mates, Nitin. But Nitin forgets to do so due to an upset stomach ailment commonly known as 'Delhi Belly' as well as his plan to blackmail their landlord, Manish and asks the third roommate Arup to deliver the package. A gangster, Somayajulu, who was the recipient of this package, starts by brutally questioning Vladimir, and finds out that the package may be in the possession of the trio. While Tashi must deal with his attraction for Journalist Menaka and incur the wrath of her husband, Rajiv, he still has to fully come to terms whether or not he wants to marry Sonia. And the entry of ruthless Somayajulu and his gang seriously jeopardizes any plans Tashi and his friends may have for the future.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Imran Khan", "Vir Das", "Kunaal Roy Kapur"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTI3ODQwNDAzN15BMl5BanBnXkFtZTcwMDg5NDExNg@@._V1_SY360_SX250_AL_.jpg",
	},
	{
		title: "Magadheera",
		year: "2009",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			10, 9, 2, 8, 4, 9, 1, 9, 7, 8, 1, 4, 10, 3, 7, 2, 1, 2, 1, 3, 1, 8, 9, 4,
			1, 9, 10, 9, 10, 9,
		],
		poster:
			"MV5BNzQxNWE0NjctMzgxZC00NTdlLTkxMWUtNGM1MmRiYjM4ZWIwXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "",
		duration: "PT147M",
		releaseDate: "2009-07-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"In 1609 AD, Mitravinda, a princess, and Kala Bhairava, the warrior that she loved, die. 400 years later, the warrior is reincarnated as Harsha, a motorcycle stuntman. He brushes hands with a girl and sparks fly as he begins to recall his past life. Knowing that he is destined to love this young woman, he sets about trying to identify her. Indu does not remember her past life and keeps Harsha at a distance; playing tricks on him until she gets to know him better. However, just as the two begin to fall in love, a sinister force from their shared past returns!                Written by\nL. Hamre",
		actors: ["Kajal Aggarwal", "Dev Gill", "Srihari"],
		imdbRating: 7.7,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQxNWE0NjctMzgxZC00NTdlLTkxMWUtNGM1MmRiYjM4ZWIwXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Highway",
		year: "2014",
		genres: ["Adventure", "Drama", "Romance"],
		ratings: [
			3, 6, 8, 8, 5, 2, 8, 10, 8, 8, 8, 1, 4, 2, 5, 5, 7, 6, 10, 9, 10, 3, 5, 4,
			8, 5, 1, 4, 5, 1,
		],
		poster:
			"MV5BMjE5NjkyNTczM15BMl5BanBnXkFtZTgwNDg4MzE5MDE@._V1_SY500_CR0,0,344,500_AL_.jpg",
		contentRating: "",
		duration: "PT133M",
		releaseDate: "2014-02-21",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A city girl - young, full of life - is on the highway at night with her fianc\u00e9. Suddenly, her life is swung away from the brocade and jewelry of marriage to the harsh brutality of abduction. Her life will never be the same again. The gang is in a panic; the girl is a big industrialist's daughter, his links in the corridors of power make ransom out of the question. But for the leader of this group sending her back is not an option. As the days pass by, the scenery changes, the girl feels that she has changed as well. Gradually, a strange bond begins to develop between the victim and the oppressor. It is in this captivity that she, for the first time, feels free.                Written by\nVikram Nayak",
		actors: ["Alia Bhatt", "Randeep Hooda", "Durgesh Kumar"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NjkyNTczM15BMl5BanBnXkFtZTgwNDg4MzE5MDE@._V1_SY500_CR0,0,344,500_AL_.jpg",
	},
	{
		title: "Aankhen",
		year: "2002",
		genres: ["Comedy", "Thriller", "Crime"],
		ratings: [
			6, 9, 1, 10, 7, 2, 6, 2, 5, 10, 8, 4, 4, 4, 3, 1, 7, 4, 2, 7, 8, 4, 1, 10,
			10, 1, 1, 4, 1, 1,
		],
		poster:
			"MV5BYmE2MTNkYTctN2FjYS00Zjc2LWFiOGQtNzFmZmE4YzM2NmM4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX345_AL_.jpg",
		contentRating: "",
		duration: "PT165M",
		releaseDate: "2002-04-05",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Vijay Singh Rajput (Amitabh Bachchan) is a quirky manager of Vilasrao Jefferson Bank. He is extremely strict at work and believes in pushing his workers to the limit. This means that his superiors hold him in high regard for his unblemished reputation and excellent track record. But things go terribly wrong for the honest bank manager when he finds one of his own employees trying to con the customers. At this, he loses his temper and gets physical with the employee. This doesn't go down well with his superiors and they decide that Rajput is now a liability to the bank and they sack him. Amitabh can't believe the Board of Directors and his mind is filled with revenge and what better revenge than robbing the bank himself, ironic as it may sound. He decides that he must think of a plan that will hit the bank where it hurts the most - in its safe where all the money is kept. Rajput blackmails Neha (Sushmita Sen) to use her professional skills to help his plan, to train three blind men to ...                Written by\nAnonymous",
		actors: ["Amitabh Bachchan", "Akshay Kumar", "Sushmita Sen"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYmE2MTNkYTctN2FjYS00Zjc2LWFiOGQtNzFmZmE4YzM2NmM4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX345_AL_.jpg",
	},
	{
		title: "Rockstar",
		year: "2011",
		genres: ["Drama", "Music", "Musical"],
		ratings: [
			7, 9, 2, 7, 4, 2, 2, 9, 10, 10, 6, 9, 10, 2, 6, 3, 6, 9, 2, 7, 10, 10, 4,
			9, 2, 9, 9, 2, 6, 10,
		],
		poster:
			"MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SY500_SX375_AL_.jpg",
		contentRating: "",
		duration: "PT159M",
		releaseDate: "2011-11-11",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'The film follows Janardhan Jhakar in a series of flashbacks and flash forwards, how the small collage boy became an international rock sensation "Jordan". To chase his dreams of a rockstar, the wanna-be singer his counseled that music and feelings only come with pain. In the process of which, he meets Heer, a tough on the outside and popular college girl, the both become friends, and as time passes by his dreams of music fade away as they spend time together. When heer moves away, Janardhan is thrown out of his house because of family misunderstandings. As he bides his time at a local mosque, his passion for music comes back to life. He is soon signed by a record label, where he makes more enemies than friends, his tour takes him to Prague, where he is reunited with a married Heer. Things go awry when the two share an intimate moment, and Jordan his deported to India on trespassing charges filed by Heer\'s husband. Now an angry painful and lonely JORDAN embarks on his journey to become...                Written by\nEros International',
		actors: ["Ranbir Kapoor", "Nargis Fakhri", "Shammi Kapoor"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SY500_SX375_AL_.jpg",
	},
	{
		title: "Piku",
		year: "2015",
		genres: ["Comedy", "Drama"],
		ratings: [
			4, 1, 4, 5, 1, 5, 6, 10, 5, 5, 10, 9, 7, 8, 1, 8, 7, 1, 10, 6, 7, 8, 2, 2,
			10, 10, 9, 1, 1, 3,
		],
		poster:
			"MV5BMTUwOTMxNjc2OV5BMl5BanBnXkFtZTgwODQ4OTMxNTE@._V1_SY500_SX375_AL_.jpg",
		contentRating: "",
		duration: "PT123M",
		releaseDate: "2015-05-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A quirky comedy about the relationship between a daughter and her aging father, whose eccentricities drive everyone crazy.",
		actors: ["Amitabh Bachchan", "Deepika Padukone", "Irrfan Khan"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwOTMxNjc2OV5BMl5BanBnXkFtZTgwODQ4OTMxNTE@._V1_SY500_SX375_AL_.jpg",
	},
	{
		title: "Socha Na Tha",
		year: "2005",
		genres: ["Romance", "Comedy"],
		ratings: [
			6, 7, 4, 3, 4, 8, 6, 1, 7, 1, 3, 7, 1, 6, 8, 6, 5, 10, 5, 2, 8, 8, 5, 1,
			7, 1, 1, 10, 2, 10,
		],
		poster:
			"MV5BMzMwNDcwNTAyOF5BMl5BanBnXkFtZTcwOTg2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT137M",
		releaseDate: "2005-03-04",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Mr. Oberoi is a wealthy industrialist, and lives a comfortable lifestyle, with this two sons. The elder son is married, and Mr Oberoi wants his second son, Viren, to marry too. He has already selected a bride for him in Aditi Malhotra. Though Viren has always lived in his father and brother's shadows, he is quite romantic at heart, and hopes to fall in love first and then marry the girl of his choice. The presence of Aditi prevents this, and he makes all attempts not to marry her. He succeeds, the wedding arrangements are all called off. Then he meets the girl of his dreams, Karen Fernandes, and proposes marriage to her. The only setback he sees that she is a Catholic, and he, a Hindu. However, that is soon overcome. Everything seems to go on smoothly between both the families, when Viren falls out of love with Karen, and wants to cancel the wedding. When questioned about his change in mind, he responds that he is in love with Aditi. But Aditi will not have anything to do with him ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Abhay Deol", "Ayesha Takia", "Ayesha Jhulka"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMzMwNDcwNTAyOF5BMl5BanBnXkFtZTcwOTg2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Dil Se..",
		year: "1998",
		genres: ["Drama", "Romance"],
		ratings: [
			10, 6, 2, 1, 5, 2, 9, 5, 2, 4, 2, 5, 4, 5, 4, 5, 6, 5, 4, 10, 2, 1, 10, 1,
			6, 1, 7, 5, 9, 1,
		],
		poster:
			"MV5BMTI2NjU4MjkxOF5BMl5BanBnXkFtZTcwMTc3MDYxMQ@@._V1_SY237_CR0,0,165,237_AL_.jpg",
		contentRating: "",
		duration: "PT163M",
		releaseDate: "1998-08-21",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Amar Varma, a producer for Indian news radio, meets an enigmatic woman at a railroad station and then again at a hill station. He falls in love with her, but the woman, who calls herself Meghna, rejects and leaves him although she seems to be interested. Later, Varma agrees to marry his family's choice, Preeti. But suddenly Meghna is back, and what is the secret that she holds?                Written by\n<sunilm@nwu.edu>",
		actors: ["Shah Rukh Khan", "Manisha Koirala", "Preity Zinta"],
		imdbRating: 7.8,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NjU4MjkxOF5BMl5BanBnXkFtZTcwMTc3MDYxMQ@@._V1_SY237_CR0,0,165,237_AL_.jpg",
	},
	{
		title: "Devdas",
		year: "2002",
		genres: ["Musical", "Romance"],
		ratings: [
			1, 6, 6, 7, 8, 5, 1, 1, 4, 7, 1, 9, 9, 6, 5, 2, 10, 5, 9, 7, 1, 8, 3, 4,
			7, 1, 10, 6, 3, 7,
		],
		poster:
			"MV5BY2QxMGM4Y2QtMGFmMy00ZjZkLWExMWQtNTY1Yjc0MDFjZjY0XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT185M",
		releaseDate: "2002-07-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The son of Zamindar Narayan Mukherjee, Devdas (Shahrukh Khan) was born with a silver spoon in his mouth. He grew up in the lush village of Taj Sonapur, where he spent his childhood, indulged by his lovely playmate Paro (Aishwarya). They grew up sharing a special relationship, in which they existed only to each other. Oblivious of all the differences of status and background, a bond that would never break grew between them. Slowly, it changed to love but it was still unsaid. But the reverie was broken when his family sent Devdas to London for education. Paro's world crashed knowing that her Devdas would be gone and she lit a diya, for it signified the fast coming back of her loved one. Years passed and Devdas returned. Devdas was besotted by her stunning beauty and longed to have her back. But Zamindar Narayan Mukherjee (Vijay Crishna), Devdas' father, met Paro's mother Sumitra's (Kiran Kher) marriage proposal with condescending arrogance. It caused a rift between the families and even...                Written by\nAnonymous",
		actors: ["Shah Rukh Khan", "Madhuri Dixit", "Aishwarya Rai Bachchan"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BY2QxMGM4Y2QtMGFmMy00ZjZkLWExMWQtNTY1Yjc0MDFjZjY0XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Hum Aapke Hain Koun...!",
		year: "1994",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			10, 3, 10, 6, 8, 7, 6, 9, 5, 10, 4, 5, 6, 6, 3, 8, 8, 7, 8, 2, 10, 7, 1,
			8, 1, 5, 10, 5, 9, 10,
		],
		poster:
			"MV5BMTcwMjk5NDg1Nl5BMl5BanBnXkFtZTgwMjA2NTkwMzE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT206M",
		releaseDate: "1994-08-05",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Prem, a top student, is learning the ropes of business under his elder brother Rajesh and his uncle Kailashnath, a big industrialist. In another town, Nisha is studying computer science and is the darling of her elder sister, Pooja, and her parents, Professor Choudhry and Kamladevi. Fate brings the two families together and this results in the the betrothal of Rajesh and Pooja. At the wedding, Prem meets Nisha and falls in love with this carefree woman. With Pooja as the woman of the house, joy knows no bounds in Prem's family. Months pass by and Pooja becomes pregnant. Nisha is invited to come and stay with her sister and attend the traditional function before the child's birth. Nisha's arrival is like a dream come true for Prem. Nisha stays there until the birth of the child, taking over the household chores, and becoming very much a part of the family. In soft whispers, Prem and Nisha commit their love for each other and secretly dream of spending a lifetime together. Then fate ...                Written by\nSujit R. Varma",
		actors: ["Madhuri Dixit", "Salman Khan", "Mohnish Bahl"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMjk5NDg1Nl5BMl5BanBnXkFtZTgwMjA2NTkwMzE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Hum Dil De Chuke Sanam",
		year: "1999",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			5, 9, 2, 4, 1, 2, 10, 5, 7, 3, 3, 10, 10, 6, 2, 8, 1, 9, 6, 8, 10, 8, 3,
			3, 7, 6, 1, 8, 2, 5,
		],
		poster:
			"MV5BZWI5ZWMxN2QtNjJmNS00M2EwLTg3ZmUtYzI5ODY3MWM2MzM1XkEyXkFqcGdeQXVyNDk3Mzg2OTc@._V1_SY500_CR0,0,350,500_AL_.jpg",
		contentRating: "",
		duration: "PT188M",
		releaseDate: "1999-06-18",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"When Sameer asks for Nandini's hand in marriage her family refuses. They have already chosen a husband for their daughter. Sameer returns to Italy. When Vanraj, Nandini's husband realizes that his new bride has been in love with someone else, he is prepared to sacrifice his love for her and take her to Italy to be reunited with her true love, Sameer.                Written by\nTapestry",
		actors: ["Salman Khan", "Ajay Devgn", "Aishwarya Rai Bachchan"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZWI5ZWMxN2QtNjJmNS00M2EwLTg3ZmUtYzI5ODY3MWM2MzM1XkEyXkFqcGdeQXVyNDk3Mzg2OTc@._V1_SY500_CR0,0,350,500_AL_.jpg",
	},
	{
		title: "1 - Nenokkadine",
		year: "2014",
		genres: ["Action", "Musical", "Mystery"],
		ratings: [
			10, 3, 7, 6, 5, 5, 9, 1, 3, 10, 7, 10, 2, 5, 8, 10, 6, 2, 7, 1, 6, 3, 6,
			7, 9, 4, 2, 5, 4, 1,
		],
		poster:
			"MV5BNzcwMzkwODE1NF5BMl5BanBnXkFtZTgwNzA1NzAwMTE@._V1_SY350_CR0,0,242,350_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2014-01-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Gautham (Mahesh Babu) is in search of the identity of his parents who were killed. He faces a psychological disorder which makes the search even more difficult. taking support of sameera(Kriti ) and figuring out ways to get to know what happened in the past makes the story.                Written by\nD Lokesh Reddy",
		actors: ["Mahesh Babu", "Kriti Sanon", "Nassar"],
		imdbRating: 8.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNzcwMzkwODE1NF5BMl5BanBnXkFtZTgwNzA1NzAwMTE@._V1_SY350_CR0,0,242,350_AL_.jpg",
	},
	{
		title: "Jolly LLB 2",
		year: "2017",
		genres: ["Comedy", "Drama"],
		ratings: [
			5, 3, 1, 9, 2, 4, 10, 1, 8, 8, 6, 7, 6, 8, 3, 10, 10, 7, 10, 7, 8, 6, 4,
			6, 5, 9, 3, 8, 5, 2,
		],
		poster:
			"MV5BMDY5MzFlYzEtNTg0YS00OGM5LWI1ZDMtZDkxN2Y2OTI1NGUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM1NjkwMDI@._V1_SY480_SX360_AL_.jpg",
		contentRating: "",
		duration: "PT137M",
		releaseDate: "2017-02-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Jolly is a clumsy lawyer who is faced with representing the most critical court case of his career.",
		actors: ["Ram Gopal Bajaj", "Sudhanva Deshpande", "Avijit Dutt"],
		imdbRating: 7.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMDY5MzFlYzEtNTg0YS00OGM5LWI1ZDMtZDkxN2Y2OTI1NGUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM1NjkwMDI@._V1_SY480_SX360_AL_.jpg",
	},
	{
		title: "Ghilli",
		year: "2004",
		genres: ["Action", "Comedy", "Romance"],
		ratings: [
			3, 6, 6, 9, 1, 2, 9, 8, 2, 7, 3, 9, 8, 8, 5, 4, 4, 8, 4, 5, 5, 3, 2, 7, 4,
			8, 6, 8, 7, 8,
		],
		poster:
			"MV5BYjU2NTY5ODUtMTI3Ni00YTJiLTliN2EtNTRkNWQzODFmNDA3XkEyXkFqcGdeQXVyMjA4NjIzMTA@._V1_SY500_SX375_AL_.jpg",
		contentRating: "",
		duration: "PT160M",
		releaseDate: "2004",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Muthu Pandi, a village strongman, decides to marry his niece Dhanalakshmi, and begins his quest by eliminating everyone who opposes their union - starting with both her brothers. In desperation, Dhanalakshmi decides to escape from the village, and in the process is unwittingly assisted by a university Kabaddi player Velu.                Written by\nJoyojeet Pal",
		actors: ["Joseph Vijay", "Trisha Krishnan", "Prakash Raj"],
		imdbRating: 7.8,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYjU2NTY5ODUtMTI3Ni00YTJiLTliN2EtNTRkNWQzODFmNDA3XkEyXkFqcGdeQXVyMjA4NjIzMTA@._V1_SY500_SX375_AL_.jpg",
	},
	{
		title: "Raanjhanaa",
		year: "2013",
		genres: ["Drama", "Romance"],
		ratings: [
			3, 10, 7, 3, 1, 3, 8, 5, 4, 7, 3, 7, 4, 6, 6, 7, 3, 3, 4, 4, 10, 4, 4, 9,
			7, 6, 2, 9, 4, 1,
		],
		poster:
			"MV5BMjE2MDA3MTQ4MF5BMl5BanBnXkFtZTcwNjE5NjY0OQ@@._V1_SY500_CR0,0,319,500_AL_.jpg",
		contentRating: "",
		duration: "PT140M",
		releaseDate: "2013-06-21",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The pundit's son Kundan (Dhanush) has fallen for the girl at first sight. That they're both kids makes us dismiss it as a meaningless crush. But a few years later, the boy is still in love with the girl, Zoya (Sonam Kapoor). When she's in school, he follows her around holding her hand and getting slapped in the process. Finally, she relents because of his \"consistency\". The film shifts cities when Zoya gets into JNU (Jawaharlal Nehru University), and through her, we are introduced to the idealistic and political culture of the place. She discovers a long-lost strength as she confronts and then falls for student leader Akram (Abhay Deol). The film takes a turn when Zoya returns to her hometown after eight long years only to find some things changed, and others surprisingly the same.                Written by\nSonia Chopra",
		actors: ["Dhanush", "Sonam Kapoor", "Mohammed Zeeshan Ayyub"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MDA3MTQ4MF5BMl5BanBnXkFtZTcwNjE5NjY0OQ@@._V1_SY500_CR0,0,319,500_AL_.jpg",
	},
	{
		title: "Hungama",
		year: "2003",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			5, 5, 8, 8, 1, 8, 10, 8, 8, 9, 10, 6, 3, 4, 10, 4, 4, 8, 5, 6, 3, 2, 3, 2,
			8, 5, 8, 10, 6, 8,
		],
		poster:
			"MV5BMTA5NTQyMzU1MDBeQTJeQWpwZ15BbWU4MDE5NTY1MTQx._V1_SY250_CR0,0,171,250_AL_.jpg",
		contentRating: "",
		duration: "PT153M",
		releaseDate: "2003-08-01",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The story of a bunch of misfits whose misconception about each others backgrounds end up in a series of chaotic, yet comic outcomes. Aftab and Rimi play two strangers who have to pretend that are a married couple in order to get a place to live. Paresh Rawal plays a rich, yet ground to earth businessman whose business is named after his wife Anjali. Akshaye Khanna plays a young man starting a new business in electronic ware. Things get complicated when Rimi Sen goes to Paresh Rawal's house in search of a job & meets Akshaye Khanna who falls in love with her thinking she is Paresh Rawal's daughter. Paresh Rawal's wife thinks that he is having an affair with Rimi Sen & while Paresh Rawal thinks his wife is having an affair with Akshaye Khanna due to Rimi Sen and her having the same name. Then comes in Shakti Kapoor whose daughter falls in love with a guy pretending to be Paresh Rawal's son and soon everything gets out of control.                Written by\nNeo, Wellington, NZ",
		actors: ["Akshaye Khanna", "Aftab Shivdasani", "Rimi Sen"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5NTQyMzU1MDBeQTJeQWpwZ15BbWU4MDE5NTY1MTQx._V1_SY250_CR0,0,171,250_AL_.jpg",
	},
	{
		title: "Rangeela",
		year: "1995",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			4, 4, 7, 5, 8, 3, 6, 4, 4, 7, 7, 7, 4, 9, 9, 8, 5, 6, 4, 8, 2, 1, 6, 6, 7,
			8, 5, 3, 7, 5,
		],
		poster:
			"MV5BNDBlMjY5ZjMtNGE3YS00NGUzLWE5ZWQtYTBjNWU1ZmU5MTY0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,354,500_AL_.jpg",
		contentRating: "",
		duration: "PT142M",
		releaseDate: "1995-09-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Mili is a very poor Indian, and like many would like to be rich and famous one day. She wants to be an Indian actress. She is friendly with another poor man named Munna, who she knows from her childhood. One day while she is singing and dancing on the beach, she is approached by a rich and famous movie actor, Raj, who wants her to act in his next movie. Raj has actually fallen in love with Mili and wants to get married to her. Mili finds her dreams coming true when she gets very famous. Will Mili marry Raj and live a life full of wealth and fame forever?                Written by\nSumitra (corrected by Sonia)",
		actors: ["Jackie Shroff", "Aamir Khan", "Urmila Matondkar"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNDBlMjY5ZjMtNGE3YS00NGUzLWE5ZWQtYTBjNWU1ZmU5MTY0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,354,500_AL_.jpg",
	},
	{
		title: "Khakee",
		year: "2004",
		genres: ["Action", "Adventure", "Drama"],
		ratings: [
			3, 6, 5, 6, 7, 6, 7, 8, 10, 4, 3, 5, 8, 1, 7, 10, 8, 3, 8, 6, 10, 3, 3, 2,
			4, 5, 6, 8, 6, 1,
		],
		poster:
			"MV5BMTY3MDE4MDY1Ml5BMl5BanBnXkFtZTcwMzE2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT174M",
		releaseDate: "2004-01-23",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"DCP Anant Shrivastav (Amitabh Bachchan) has been assigned the mission to escort terrorist Iqbal Ansari (Atul Kulkarni) from Chandangarh to Mumbai. His terrorist organization are determined to obtain him again. The plan for this is led by Yashwant Angre (Ajay Devgan), a ruthless killer and a former police officer. Anant's team consists of Inspector Shekhar Sachdev (Akshay Kumar), rookie cop Ashwin Gupte (Tusshar Kapoor) and two more inspectors. Soon Mahalakshmi (Aishwarya Rai) joins them as she is the only witness to have seen Yashwant. The team are armed and ready to go but danger lurks everywhere as the terrorist organization are determined to make sure the officers do not make it to Mumbai. The trip turns into survival when the team are attacked at various times. Finally the team make it to an abandoned cottage in the forest but there is a shoot out and the team are heavily outnumbered. Shekhar tries to force an exchange but against Anant's and Ashwin's judgement. Finally Ansari, ...                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Amitabh Bachchan", "Akshay Kumar", "Ajay Devgn"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MDE4MDY1Ml5BMl5BanBnXkFtZTcwMzE2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Kaththi",
		year: "2014",
		genres: ["Action", "Drama"],
		ratings: [
			9, 6, 10, 7, 6, 7, 9, 6, 8, 7, 9, 9, 2, 10, 6, 10, 10, 5, 3, 9, 5, 5, 1,
			5, 2, 2, 8, 1, 4, 6,
		],
		poster:
			"MV5BZTJhNGM4ZmMtNGE3My00YWI4LTgzMTQtNDQ2ZmQ4NDVkMjQxXkEyXkFqcGdeQXVyNjcwMjAyMDI@._V1_SY335_CR0,0,269,335_AL_.jpg",
		contentRating: "",
		duration: "PT166M",
		releaseDate: "2014-10-22",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A multinational company tries to forcefully take over a village that was once a fertile agricultural land to make way for its commercial projects. Jeevanantham, a Hydrology Grad and probably the most educated person in the village, takes the fight to the MNC and vows to reclaim what's their own. Does he deliver on his promise? Do his efforts bear fruit? - The answers form the crux of this sensitive-issue themed flick.                Written by\nPipingHotViews",
		actors: ["Joseph Vijay", "Samantha Ruth Prabhu", "Neil Nitin Mukesh"],
		imdbRating: 8.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZTJhNGM4ZmMtNGE3My00YWI4LTgzMTQtNDQ2ZmQ4NDVkMjQxXkEyXkFqcGdeQXVyNjcwMjAyMDI@._V1_SY335_CR0,0,269,335_AL_.jpg",
	},
	{
		title: "Rocket Singh: Salesman of the Year",
		year: "2009",
		genres: ["Comedy", "Drama"],
		ratings: [
			2, 1, 7, 8, 10, 7, 1, 1, 10, 6, 1, 6, 9, 9, 10, 7, 7, 6, 1, 6, 4, 5, 4, 6,
			8, 5, 3, 3, 10, 3,
		],
		poster:
			"MV5BMTk1ODg4NzIxNl5BMl5BanBnXkFtZTcwNDAyOTg5Mg@@._V1_SY375_CR0,0,233,375_AL_.jpg",
		contentRating: "",
		duration: "PT150M",
		releaseDate: "2009-12-11",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Harpreet Singh Bedi (Ranbir Kapoor) has just graduated, and his marks are, well, let's say a little embarrassing. But marks never stopped him from dreaming of an exciting and adventurous career, and they never will. 'Rocket Singh - Salesman of the Year' is the sometimes thoughtless, sometimes thoughtful story of a fresh graduate trying to find a balance between the maddening demands of the 'professional' way, and the way of his heart - and stumbling upon a crazy way which turned his world upside down, and his career right side up. Welcome to the world of sales, boss!                Written by\nDubai Internation Film Festival",
		actors: ["Ranbir Kapoor", "Prem Chopra", "Gauhar Khan"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1ODg4NzIxNl5BMl5BanBnXkFtZTcwNDAyOTg5Mg@@._V1_SY375_CR0,0,233,375_AL_.jpg",
	},
	{
		title: "Dear Zindagi",
		year: "2016",
		genres: ["Drama", "Romance"],
		ratings: [
			1, 7, 1, 4, 8, 5, 4, 9, 3, 4, 1, 8, 3, 1, 3, 4, 9, 3, 4, 7, 8, 7, 6, 9, 1,
			3, 10, 4, 2, 10,
		],
		poster:
			"MV5BZWQzYWI3ZGMtYzgyYy00OWZkLWEwODYtNGNiMTZhODBkNzUyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SY500_CR0,0,375,500_AL_.jpg",
		contentRating: "",
		duration: "PT151M",
		releaseDate: "2016-11-25",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"This is the story of Kaira, a budding cinematographer in search of perfect life. A chance encounter with Jug, an unconventional thinker, helps her gain new perspective about life. She discovers that happiness is all about finding comfort in life's imperfections.",
		actors: ["Alia Bhatt", "Shah Rukh Khan", "Kunal Kapoor"],
		imdbRating: 8.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZWQzYWI3ZGMtYzgyYy00OWZkLWEwODYtNGNiMTZhODBkNzUyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SY500_CR0,0,375,500_AL_.jpg",
	},
	{
		title: "Jaane Tu... Ya Jaane Na",
		year: "2008",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			8, 9, 1, 2, 1, 7, 8, 2, 8, 2, 4, 6, 3, 6, 3, 5, 1, 1, 1, 1, 5, 3, 5, 8, 3,
			7, 4, 10, 2, 2,
		],
		poster:
			"MV5BMTk5NzI2MDkzOF5BMl5BanBnXkFtZTcwODA5NTk5Mw@@._V1_SY250_CR0,0,185,250_AL_.jpg",
		contentRating: "",
		duration: "PT155M",
		releaseDate: "2008-07-04",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"While on the way to the airport, Mala, who Jignesh Patel believes is going to be his future girlfriend, must listen to the romantic overtures of a group who are obsessed with the popular number 'Jaane Tu Ya Jaane Na' from the movie 'Aa Gale Lag Jaa'. The story is about Jai Singh Rathore and Aditi Wadia, two friends who are so close that the Wadias decide to get them married. But both disagree, and decide to seek soul mates for each other. With Aditi's help, Jai meets Meghna, and both fall in love with each other. Jai is introduced to her parents, who also approve of him. Aditi's is then introduced to Sushant Modi, who instantly finds approval, even with her reclusive brother, Amit. Mala anxiously awaits the climax as the story unfolds with many twists and turns.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Imran Khan", "Genelia D'Souza", "Manjari Phadnis"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI2MDkzOF5BMl5BanBnXkFtZTcwODA5NTk5Mw@@._V1_SY250_CR0,0,185,250_AL_.jpg",
	},
	{
		title: "Madaari",
		year: "2016",
		genres: ["Adventure", "Crime", "Drama"],
		ratings: [
			9, 2, 4, 10, 10, 3, 3, 10, 7, 5, 9, 8, 10, 4, 8, 3, 3, 4, 7, 4, 1, 9, 9,
			8, 3, 2, 8, 2, 5, 10,
		],
		poster:
			"MV5BZDFjODM0NDAtNGJkZC00NmRiLWI3NmYtZDFkYmRhYmE4Zjk3XkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_SY500_CR0,0,346,500_AL_.jpg",
		contentRating: "",
		duration: "PT133M",
		releaseDate: "2016-07-22",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"'Madaari' is the story of a common man who sets out to avenge the death of his son caused by rampant corruption in the government. Losing the only family he had brings him to kidnap the home minister's son and bring those responsible to justice.                Written by\nKeith Francis Bacon",
		actors: ["Irrfan Khan", "Jimmy Shergill", "Vishesh Bansal"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZDFjODM0NDAtNGJkZC00NmRiLWI3NmYtZDFkYmRhYmE4Zjk3XkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_SY500_CR0,0,346,500_AL_.jpg",
	},
	{
		title: "Peepli (Live)",
		year: "2010",
		genres: ["Comedy", "Drama"],
		ratings: [
			3, 6, 9, 3, 6, 6, 3, 8, 6, 10, 4, 5, 7, 3, 5, 10, 2, 4, 6, 3, 7, 7, 4, 2,
			4, 6, 4, 10, 7, 5,
		],
		poster:
			"MV5BMTgwMzEzNjYyNl5BMl5BanBnXkFtZTcwOTg1MDI3Mw@@._V1_SX346_CR0,0,346,499_AL_.jpg",
		contentRating: "",
		duration: "PT95M",
		releaseDate: "2010-08-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'In the lead up to state elections in the Indian village of Peepli, two poor farmers, Natha and Budhia, face losing their land over an unpaid bank loan. Desperate, they seek help from an apathetic local politician, who scornfully suggests they commit suicide to benefit from a government program that aids the families of indebted deceased farmers. When a journalist overhears Budhia urge Natha to "do what needs to be done" for the sake of their families, a media frenzy ignites around whether or not Natha will commit suicide.                Written by\nSundance Film Festival',
		actors: ["Omkar Das Manikpuri", "Raghuvir Yadav", "Shalini Vatsa"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzEzNjYyNl5BMl5BanBnXkFtZTcwOTg1MDI3Mw@@._V1_SX346_CR0,0,346,499_AL_.jpg",
	},
	{
		title: "Dum Laga Ke Haisha",
		year: "2015",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			2, 3, 7, 4, 9, 7, 2, 7, 9, 3, 5, 9, 10, 2, 3, 4, 9, 7, 4, 10, 10, 3, 4, 4,
			10, 10, 4, 2, 2, 1,
		],
		poster:
			"MV5BMTg2Njg1OTg4OV5BMl5BanBnXkFtZTgwMjczNzM2NDE@._V1_SY389_SX250_AL_.jpg",
		contentRating: "",
		duration: "PT110M",
		releaseDate: "2015-02-27",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Prem Prakash Tiwari (Ayushmann Khurrana) listening to Kumar Sanu is the film's opening shot. Set in Haridwar, 1990s, the film captures the nascent feel of the town. Prem owns a cassette shop in the local market. His father is keen to get him hitched and the family goes to a local temple to meet Sandhya (Bhumi Pednekar). B.Ed, waiting for a teaching job, the most visible thing about her is her weight. Coming from a patriarchal cognitive set-up, she doesn't fit the quintessential idea of beautiful. And still, the school drop out Prem must marry her because he is incapable of attaining a girl with 'Juhi-Chawla-level-of-looks.' In an elaborate community-wedding ceremony, Prem and Sandhya get married. Their wedding night is uncomfortable with neither treading towards establishing conjugal relations. Prem has in his own reasons and the girl is naturally shy. Next morning on a call, she announces it to a friend and the whole family finds out.                Written by\nKing Motwani",
		actors: ["Bhumi Pednekar", "Sanjay Mishra", "Ayushmann Khurrana"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2Njg1OTg4OV5BMl5BanBnXkFtZTgwMjczNzM2NDE@._V1_SY389_SX250_AL_.jpg",
	},
	{
		title: "Mankatha",
		year: "2011",
		genres: ["Action", "Comedy", "Crime"],
		ratings: [
			6, 6, 4, 9, 10, 2, 8, 8, 10, 8, 7, 1, 1, 9, 2, 9, 7, 7, 1, 8, 2, 2, 1, 6,
			6, 5, 8, 9, 1, 9,
		],
		poster:
			"MV5BODAyOTNlMjktZjgxYS00Y2JiLWFiZTAtYjg0MTYyNzg3MjQyXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_SY500_CR0,0,312,500_AL_.jpg",
		contentRating: "",
		duration: "PT155M",
		releaseDate: "2011-08-31",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Mankatha is a racy and adrenaline-rushing story of a Maharashtra police officer Vinayak Mahadevan (Ajith) who is suspended for helping a smuggler to escape from police encounter. He starts leading life in his own way. He falls for Sanjana (Trisha), daughter of an influential local goon Arumuga Chettiyar (Jayaprakash) in Mumbai. A tough cop Prithvi (Arjun) takes charge to end betting scandal in IPL cricket in Mumbai. Arumuga uses his links with dons in Mumbai tries to route through his old theatre, a cash of over Rs 500 crore to be used in betting. Sumanth (Vaibhav), a goon working for Arumuga Chettiyarplans to take away the booty with the help of his friends Ganesh (Ashwin), Mahanth (Mahanth), who owns a bar in Mumbai and Prem (Premji), a IIT graduate. Vinayak joins the race. he promises to help them and divide it between them. Trouble starts after they take away the cash. Both Arumugha Chettiyar and police are now on their heels. Meanwhile, Mahanth and Prem escape with the cash. It ...                Written by\nCaptain",
		actors: ["Ajith Kumar", "Arjun", "Trisha Krishnan"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BODAyOTNlMjktZjgxYS00Y2JiLWFiZTAtYjg0MTYyNzg3MjQyXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_SY500_CR0,0,312,500_AL_.jpg",
	},
	{
		title: "Ghajini",
		year: "2005",
		genres: ["Action", "Drama", "Mystery"],
		ratings: [
			9, 10, 6, 2, 10, 10, 3, 7, 10, 4, 2, 2, 4, 3, 7, 10, 6, 9, 10, 2, 3, 7, 3,
			9, 10, 1, 6, 4, 3, 4,
		],
		poster:
			"MV5BMWY5OWMyYTYtYzRjOS00YjJjLWJiYjEtZWY3MzA2MmUwZDBkXkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_SY331_CR0,0,225,331_AL_.jpg",
		contentRating: "",
		duration: "PT175M",
		releaseDate: "2005-09-29",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Spunky and compassionate Kalpana rents an apartment and works as an ad-model. Her life changes when she invents a love affair between herself and wealthy Sanjay Ramaswamy. When Sanjay finds out, he decides to confront her to end this facade, but ends up falling in love with her. He pretends to be poor, proposes to her, and she subsequently accepts. Before they could get married, she gets killed, Sanjay gets assaulted, resulting in memory loss, and he is unable to remember anything beyond 15 minutes. During those 15 minutes, Sanjay manages to put together bit by bit through tattoos, Polaroid photos, notes, and maps on the wall of his apartment whatever he is able to recollect, as he sets out to avenge Kalpana's death. Sanjay does not know that the elusive killer knows about his agenda, and has already made plans to finish him off once and for all.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Suriya", "Asin", "Nayanthara"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMWY5OWMyYTYtYzRjOS00YjJjLWJiYjEtZWY3MzA2MmUwZDBkXkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_SY331_CR0,0,225,331_AL_.jpg",
	},
	{
		title: "Yuva",
		year: "2004",
		genres: ["Action", "Adventure", "Crime"],
		ratings: [
			7, 1, 4, 4, 6, 7, 1, 4, 8, 7, 4, 2, 1, 10, 6, 10, 3, 10, 8, 8, 10, 5, 8,
			5, 7, 2, 9, 2, 2, 5,
		],
		poster:
			"MV5BNThiZjYxNDItMGQxYy00ODU0LWFmM2YtOTQyZmU3ZWI5ZjFmXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
		contentRating: "",
		duration: "PT161M",
		releaseDate: "2004-05-22",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Michael (Ajay Devgan) , Arjun (Vivek Oberoi) and Lallan (Abhishek Bachchan) are three young men in Kolkata , with different ideals and objectives . Michael is an idealistic youth leader who dreams of a better India being created by the youth power . Arjun is a self-centered , opportunistic , easygoing fellow whose objective is to immigrate to a developed country and make big money . Lallan is a goon who works for Prosenjit Chatterjee (Om Puri) , an immoral politician . The lives of these three different people become intertwined following a murder attempt and an accident in broad daylight on the Hooghly bridge .                Written by\nSoumitra",
		actors: ["Ajay Devgn", "Abhishek Bachchan", "Rani Mukerji"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNThiZjYxNDItMGQxYy00ODU0LWFmM2YtOTQyZmU3ZWI5ZjFmXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
	},
	{
		title: "Baghban",
		year: "2003",
		genres: ["Drama", "Romance"],
		ratings: [
			2, 10, 9, 4, 4, 9, 6, 9, 1, 9, 10, 5, 2, 3, 5, 2, 9, 3, 8, 1, 4, 10, 2, 3,
			10, 9, 7, 2, 3, 8,
		],
		poster:
			"MV5BMjA2NTEyODY4Ml5BMl5BanBnXkFtZTcwOTk2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT181M",
		releaseDate: "2003-10-03",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Raj Malhotra and wife Pooja have four sons. The sons have settled down professionally and are quite independent. However, when Raj Malhotra retires, none of his children want to be burdened with the responsibility of taking care of their parents. Strangely, it is the adopted son who proves to be the most kind hearted of them all. Salman's girlfriend eventually marries him. The question is, will Raj and Pooja's sons learn the folly of their ways and turn over a new leaf?                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Amitabh Bachchan", "Hema Malini", "Aman Verma"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NTEyODY4Ml5BMl5BanBnXkFtZTcwOTk2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Badlapur",
		year: "2015",
		genres: ["Action", "Drama"],
		ratings: [
			6, 10, 6, 3, 10, 1, 1, 8, 10, 1, 1, 9, 3, 3, 6, 5, 7, 8, 9, 9, 4, 2, 3, 7,
			5, 4, 2, 6, 7, 4,
		],
		poster:
			"MV5BNThkNmQwMzAtYTM0ZS00NGIzLWEzMGMtM2EzZjUzNTk4YmNkXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SY500_CR0,0,343,500_AL_.jpg",
		contentRating: "",
		duration: "PT128M",
		releaseDate: "2015-02-20",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A young man (Raghu) wants revenge from the people who killed his wife and son in a bank robbery.There are two suspects in this case ,one escapes with the money and the other gets caught by the cops and is sentenced 20 years in jail. Fifteen years later he is suffering from cancer and he has only a year to live, so he requests Raghu to forgive his rest of the sentenced and let him get out from the jail. Raghu accepts his apology only on one condition that he names his partner. So after 15 years will Raghu be able to find the other suspect who destroyed his life? Will he punish him and take his 15 years old revenge?                Written by\nDeepika Mallar",
		actors: ["Varun Dhawan", "Nawazuddin Siddiqui", "Yami Gautam"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNThkNmQwMzAtYTM0ZS00NGIzLWEzMGMtM2EzZjUzNTk4YmNkXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SY500_CR0,0,343,500_AL_.jpg",
	},
	{
		title: "Thuppakki",
		year: "2012",
		genres: ["Action", "Crime", "Thriller"],
		ratings: [
			5, 6, 9, 8, 2, 5, 7, 7, 9, 4, 9, 7, 7, 10, 9, 1, 2, 5, 2, 3, 7, 6, 10, 2,
			3, 2, 1, 9, 7, 10,
		],
		poster:
			"MV5BMGFjZTdmMmEtOGZmYi00NmU5LTk4MjEtYTdmN2QzMjRmMWZkXkEyXkFqcGdeQXVyNjUwNDEzNTE@._V1_SY480_SX310_AL_.jpg",
		contentRating: "",
		duration: "PT165M",
		releaseDate: "2012-11-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Jagdish (Vijay), an army captain, is back in Mumbai for a holiday to be with his parents and two sisters. They want him to get married and finds a bride Nisha (Kajal Aggarwal) for him. After the usual bickerings the couple fall in love. Meanwhile Jagadish an intelligence officer in the military, has a mission to crack down on terrorist sleeper cells in Mumbai. How Jagadish moving around as an ordinary person using his brain and brawn in the correct measure, tracks down the terrorist in his own unique way forms the rest of this escapist entertainer.                Written by\nSurya Prakash",
		actors: ["Joseph Vijay", "Kajal Aggarwal", "Vidyut Jamwal"],
		imdbRating: 7.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMGFjZTdmMmEtOGZmYi00NmU5LTk4MjEtYTdmN2QzMjRmMWZkXkEyXkFqcGdeQXVyNjUwNDEzNTE@._V1_SY480_SX310_AL_.jpg",
	},
	{
		title: "Chachi 420",
		year: "1997",
		genres: ["Comedy", "Drama", "Family"],
		ratings: [
			10, 5, 7, 10, 1, 2, 3, 6, 9, 8, 9, 6, 8, 6, 1, 3, 4, 7, 10, 7, 9, 2, 4,
			10, 4, 6, 7, 10, 1, 2,
		],
		poster:
			"MV5BMjQ4OTQyMjUyOF5BMl5BanBnXkFtZTcwMTUwMDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT155M",
		releaseDate: "1997-12-19",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Wealthy Janki falls in love with poor Jaiprakash, much to the displeasure of her parents, and ends up getting married, and living with her husband. She subsequently gives birth to a daughter. Differences surface between the couple, and Janki leaves Jaiprakash and moves back in with her parents. Jaiprakash wants to see his daughter, but is prevented by Durgaprasad, Janki's dad, so he assumes the guise of a woman, calls himself Laxmi, and starts working as a nanny for his daughter. Complications arise when Durgaprasad gets attracted to Laxmi and wants to marry 'her'.                Written by\nCarrie",
		actors: ["Kamal Haasan", "Amrish Puri", "Om Puri"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4OTQyMjUyOF5BMl5BanBnXkFtZTcwMTUwMDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Guzaarish",
		year: "2010",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			1, 10, 6, 5, 8, 5, 5, 5, 8, 6, 2, 7, 1, 10, 1, 8, 10, 8, 10, 6, 7, 2, 4,
			2, 3, 10, 2, 8, 8, 6,
		],
		poster:
			"MV5BMTMzMzIzOTQwOF5BMl5BanBnXkFtZTcwMTI2MTYxNA@@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT126M",
		releaseDate: "2010-11-19",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Ethan Mascarenhas, formerly the world's greatest magician, has been quadriplegic since a performance went wrong 14 years before. For the past 12 years Ethan's health has been relatively stable, largely due to the relentless dedication of his nurse, Mrs Sofia D'Souza. He lives and works at his home, spreading new magic to millions of people with his irrepressible wit and spirit through books he has written and his radio show. But now his internal organs are failing. To avoid permanent hospitalization and machine life-support, Ethan petitions a court to be legally allowed to die. Ethan's request - his 'guzaarish' - shocks everyone in his world, but especially threatens his relationship with Sofia, who is the core of his existence. Will Ethan's petition succeed? How will Sofia respond?                Written by\nsshogben",
		actors: ["Hrithik Roshan", "Aishwarya Rai Bachchan", "Shernaz Patel"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMzIzOTQwOF5BMl5BanBnXkFtZTcwMTI2MTYxNA@@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Kaminey",
		year: "2009",
		genres: ["Action", "Comedy", "Crime"],
		ratings: [
			6, 2, 9, 1, 8, 2, 8, 7, 7, 3, 1, 4, 6, 7, 3, 7, 3, 10, 5, 7, 1, 8, 8, 6,
			7, 8, 2, 6, 8, 5,
		],
		poster:
			"MV5BMTM2MTQ4NTY1Nl5BMl5BanBnXkFtZTcwMDI3NTU2Mg@@._V1_SY432_CR0,0,298,432_AL_.jpg",
		contentRating: "",
		duration: "PT130M",
		releaseDate: "2009-08-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Guddu and Charlie are identical twins born and raised in the slums of Mumbai. They dream of leaving the squalor behind and moving into a life of prosperity and dignity. Though they look alike, the two are as different as chalk and cheese: one lisps while the other stammers; one is an honest, diligent social worker while the other hedges bets at a racecourse. The brothers want nothing to do with each other, but when Charlie gets mixed up in a deadly get-rich-quick scheme and Guddu realizes that the love of his life has unwittingly put a price on his head, their lives begin to collide. Faced with rogue politicians, drug dealers and crooked cops, they uncover a sinister plot laid out by the 'political-police-underworld' nexus. Their stories finally converge to a point when they realize they only have each other.                Written by\nUTV Communications",
		actors: ["Shahid Kapoor", "Priyanka Chopra", "Deb Mukherjee"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTQ4NTY1Nl5BMl5BanBnXkFtZTcwMDI3NTU2Mg@@._V1_SY432_CR0,0,298,432_AL_.jpg",
	},
	{
		title: "Kabhi Khushi Kabhie Gham...",
		year: "2001",
		genres: ["Drama", "Musical", "Romance"],
		ratings: [
			2, 5, 7, 3, 1, 2, 1, 1, 3, 6, 9, 6, 2, 8, 9, 2, 8, 3, 10, 5, 9, 2, 7, 8,
			9, 9, 8, 3, 2, 3,
		],
		poster:
			"MV5BMTgwMTg4Mjk4M15BMl5BanBnXkFtZTcwOTU5NTk5Mw@@._V1_SY250_SX158_AL_.jpg",
		contentRating: "",
		duration: "PT210M",
		releaseDate: "2001-12-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Yashvardhan Raichand lives a very wealthy lifestyle along with his wife, Nandini, and two sons, Rahul and Rohan. While Rahul has been adopted, Yashvardhan and Nandini treat him as their own. When their sons mature, they start to look for suitable brides for Rahul, and decide to get him married to a young woman named Naina. When Rahul is told about this, he tells them that he loves another woman by the name of Anjali Sharma. Yashvardhan decides to meet with the Sharma family, and finds out that they are middle-classed, unsophisticated, and will not be able to it into his family circle, as a result he refuses to permit Rahul to marry Anjali. A defiant Rahul decides to leave, gets married to Anjali, without his foster parents blessings, and re-locates to London, England, where Anjali's unmarried sister, Pooja, also lives. Rohan, who was studying in a hostel, returns home to find that Rahul is no longer living with them, and he also discovers that while outwardly his dad is not interested...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Shah Rukh Khan", "Kajol", "Amitabh Bachchan"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMTg4Mjk4M15BMl5BanBnXkFtZTcwOTU5NTk5Mw@@._V1_SY250_SX158_AL_.jpg",
	},
	{
		title: "Sivaji",
		year: "2007",
		genres: ["Action", "Adventure", "Drama"],
		ratings: [
			10, 10, 10, 2, 9, 3, 7, 3, 3, 8, 8, 2, 3, 8, 10, 1, 9, 7, 3, 5, 6, 5, 10,
			7, 6, 1, 7, 8, 6, 8,
		],
		poster:
			"MV5BMTY0MDc1OTI1OF5BMl5BanBnXkFtZTgwMDU1NzE2NDE@._V1_SY250_SX177_AL_.jpg",
		contentRating: "",
		duration: "PT188M",
		releaseDate: "2007-06-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Held in a cell, Sivaji reflects how he came to be under police scrutiny and his subsequent arrest for a variety of economic offenses. He had returned to Chennai from the U.S. to live with his parents and maternal uncle, and had hoped to invest money in colleges and hospitals so that people who are not privileged can benefit - much to the chagrin of a sophisticated goon, Adisheshan, who threatens him, and asks him not to tread on his territory. Disregarding this and hoping to get his projects going, Sivaji runs into bureaucratic corruption and red-tape - so much so that he gives in and bribes an official Rs.4 Crores to complete his Rs.200 Crore project. An enraged Adisheshan has the local politician stop the work, but Sivaji bribes the latter Rs.50 Crores, after liquefying most of his assets. While he is busy wooing and attempting to marry Tamizhselvi/Vidyabharti Ramlingam, a new politician takes over, stops his project, and demands another Rs.50 Crores. Unable to come up with the ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Rajinikanth", "Shriya Saran", "Suman"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0MDc1OTI1OF5BMl5BanBnXkFtZTgwMDU1NzE2NDE@._V1_SY250_SX177_AL_.jpg",
	},
	{
		title: "Maine Pyar Kiya",
		year: "1989",
		genres: ["Drama", "Family", "Musical"],
		ratings: [
			9, 1, 1, 2, 8, 8, 2, 4, 10, 6, 8, 2, 10, 1, 3, 6, 8, 2, 9, 5, 4, 5, 4, 6,
			1, 5, 1, 6, 1, 3,
		],
		poster:
			"MV5BMTM5NTg4MDIwN15BMl5BanBnXkFtZTgwMTY2ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT192M",
		releaseDate: "1989-12-29",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Karan (Alok Nath) lives in a small house with his only daughter, Suman (Bhagyashree). He decides to travel overseas in Dubai, in the Persian Gulf, so that he can accumulate enough wealth to get his daughter married. He decides to leave his daughter with his friend, Kishen Kumar choudhury (Rajiv Verma), wife Mrs. Kaushalya (Reema Lagoo), and son Prem (Salman Khan). Prem is supposed to marry Seema (Pervin Dastur), who is the only daughter of Kishen's business partner, Ranjeet (Ajit Vachani). But Prem falls in love with Suman. He woos her until she also falls in love with him. Kaushalya approves of Suman, but Kishan does not, and asks her to get out of his house and life, as he feels that she has taken advantage of his hospitality. Karan returns and is enraged at Kishan's behaviour. Prem is unhappy with his dad's decision, and he decides to leave home and be near Suman. But Karan does not approve of Prem, and will not let him come anywhere near Suman. Prem will now have to prove himself ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Salman Khan", "Bhagyashree", "Alok Nath"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5NTg4MDIwN15BMl5BanBnXkFtZTgwMTY2ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Once Upon a Time in Mumbaai",
		year: "2010",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			10, 4, 5, 9, 7, 4, 1, 8, 7, 5, 9, 3, 2, 2, 3, 7, 7, 10, 10, 9, 5, 3, 4, 2,
			8, 9, 9, 4, 2, 4,
		],
		poster:
			"MV5BMTAwMTg1NzY3NDReQTJeQWpwZ15BbWU3MDQ2NzQxNzM@._V1_SY320_CR0,0,213,320_AL_.jpg",
		contentRating: "",
		duration: "PT134M",
		releaseDate: "2010-07-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"During March 1993, after his Ambassador car is being fished out of water, Assistant Commissioner of Police, Agnel Wilson, narrates to the Commissioner as to how he commenced his investigation against an underworld gangster, Sultan Mirza. He details how Sultan had survived floods in Madras, shortly after Independence; his arrival in Bombay; and his employment which earned him a mere 25 Paisa daily. Agnel's attempts to rein in Sultan fail, but he keeps tabs on him and his romance with Bollywood actress, Rehana; as well as his new recruit, Shoaib, the son of Sub-Inspector Khan. Agnel will find his investigation slipping out of his hands after Sultan temporarily delegates complete responsibility to Shoaib.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Ajay Devgn", "Emraan Hashmi", "Kangana Ranaut"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTg1NzY3NDReQTJeQWpwZ15BbWU3MDQ2NzQxNzM@._V1_SY320_CR0,0,213,320_AL_.jpg",
	},
	{
		title: "Monsunbr\u00f6llop",
		year: "2001",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			3, 2, 5, 1, 4, 9, 7, 6, 10, 2, 5, 5, 1, 5, 5, 5, 7, 6, 10, 4, 7, 7, 6, 2,
			8, 8, 6, 8, 8, 7,
		],
		poster:
			"MV5BZWMzMDJhMjgtZjk2NS00ZDM4LThmOGMtOTQzYWU3N2Y4Y2M2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_SX346_AL_.jpg",
		contentRating: "7",
		duration: "PT114M",
		releaseDate: "2002-02-08",
		averageRating: 0,
		originalTitle: "Monsoon Wedding",
		storyline:
			"A story set in the modern upper-middle class of India, where telecommunications and a western lifestyle mix with old traditions, like the arranged wedding young Aditi accepts when she ends the affair with a married TV producer. The groom is an Indian living in Texas, and all relatives from both families, some from distant places like Australia, come to New Delhi during the monsoon season to attend the wedding. The four-day arrangements and celebrations will see clumsy organization, family parties and drama, dangers to the happy end of the wedding, lots of music and even a new romance for the wedding planner Dubey with the housemaid Alice...                Written by\nAlessio F. Bragadini <alessio@sevenseas.org>",
		actors: ["Naseeruddin Shah", "Lillete Dubey", "Shefali Shetty"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZWMzMDJhMjgtZjk2NS00ZDM4LThmOGMtOTQzYWU3N2Y4Y2M2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_SX346_AL_.jpg",
	},
	{
		title: "Page 3",
		year: "2005",
		genres: ["Drama"],
		ratings: [
			10, 8, 5, 10, 9, 8, 1, 9, 1, 7, 2, 8, 6, 5, 6, 8, 2, 9, 2, 7, 1, 6, 8, 6,
			5, 2, 9, 8, 2, 3,
		],
		poster:
			"MV5BMTY1NDUxNTU5MF5BMl5BanBnXkFtZTcwOTIxMTg4Mw@@._V1_SY250_SX182_AL_.jpg",
		contentRating: "",
		duration: "PT139M",
		releaseDate: "2005-01-21",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"'Page 3' takes a behind-the-scenes look at A-list celebrity lifestyles through the eyes of a female entertainment journalist. It explores the power-play between the rich and famous and the media. It is also the story of three girls trying to make a decent living in an indecent society.                Written by\nKavita Pushkarna",
		actors: ["Konkona Sen Sharma", "Atul Kulkarni", "Sandhya Mridul"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NDUxNTU5MF5BMl5BanBnXkFtZTcwOTIxMTg4Mw@@._V1_SY250_SX182_AL_.jpg",
	},
	{
		title: "Life in a Metro",
		year: "2007",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			5, 6, 9, 3, 6, 8, 7, 6, 5, 1, 6, 8, 9, 9, 8, 2, 9, 5, 10, 1, 6, 8, 7, 9,
			4, 7, 7, 7, 9, 3,
		],
		poster:
			"MV5BMjM0NjkxNTc5M15BMl5BanBnXkFtZTgwMDYxMTA2MDE@._V1_SY250_CR0,0,207,250_AL_.jpg",
		contentRating: "",
		duration: "PT132M",
		releaseDate: "2007-05-11",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The lives of a group of people, who live in Mumbai are told in this tale, which revolves around Rahul - who occupies an apartment owned by his uncle, and lets rich and influential people use it for their personal sexual past-times. An ignored and angry young wife, Shikha falls into the arms of a young man named Akash, who wants to be an actor for Indian movies; then there is Shikha's sister, Shruti, who is having an affair with a man named Monty; and finally there is Shikha's teacher, Shivani, who is romancing Amol. Things get complicated when Rahul finds out that Neha, who is his girlfriend, is using this very apartment to meet with Ranjeet, who is Shikha's husband.                Written by\nSumitra (corrected by Calista)",
		actors: ["Dharmendra", "Irrfan Khan", "Konkona Sen Sharma"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM0NjkxNTc5M15BMl5BanBnXkFtZTgwMDYxMTA2MDE@._V1_SY250_CR0,0,207,250_AL_.jpg",
	},
	{
		title: "Ghulam",
		year: "1998",
		genres: ["Crime", "Drama", "Thriller"],
		ratings: [
			3, 6, 6, 3, 5, 6, 10, 2, 6, 8, 3, 8, 1, 4, 9, 8, 3, 7, 2, 5, 8, 3, 7, 5,
			5, 5, 2, 5, 6, 2,
		],
		poster:
			"MV5BOWM1NWEwY2ItYTc1OC00ZmFkLThmM2UtZjc4ZWZhYjliMjBkXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
		contentRating: "",
		duration: "PT162M",
		releaseDate: "1998-06-19",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Ghulam means a slave. Sidharth (Aamir Khan) is an amateur boxer who does not work, preferring to loaf about with friends. His older brother Jai (Rajit Kapoor) works with a gangster who rules the neighborhood, terrorizing merchants and demanding protection money. As a child Sidharth idolized his father, an ex-freedom fighter, whom he saw committing suicide in guilt after a visit from an old acquaintance. Sidharth meets a girl, Alisha (Rani Mukerji), who rides with a motorcycle gang, and Hari, a social worker. The film tells the story of Sidharth's romance with Alisha and his reformation.                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Aamir Khan", "Rani Mukerji", "Rajit Kapoor"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOWM1NWEwY2ItYTc1OC00ZmFkLThmM2UtZjc4ZWZhYjliMjBkXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
	},
	{
		title: "Ishqiya",
		year: "2010",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			8, 3, 3, 2, 9, 4, 9, 4, 3, 8, 2, 7, 6, 2, 4, 2, 5, 9, 7, 1, 3, 10, 10, 1,
			8, 5, 2, 2, 4, 5,
		],
		poster:
			"MV5BNTg2MzA5Mjc4Ml5BMl5BanBnXkFtZTcwMzU3NTk5Mw@@._V1_SY250_SX173_AL_.jpg",
		contentRating: "",
		duration: "PT118M",
		releaseDate: "2010-01-29",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Ishqiya is a story about love arising in characters, portrayed uniquely according to their own personal traits. The situations in the plot lead the characters to experience the emotion creeping into their lives in the most unexpected manner.                Written by\nShemaroo Entertainment Pvt Ltd",
		actors: ["Naseeruddin Shah", "Vidya Balan", "Arshad Warsi"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTg2MzA5Mjc4Ml5BMl5BanBnXkFtZTcwMzU3NTk5Mw@@._V1_SY250_SX173_AL_.jpg",
	},
	{
		title: "Khaleja",
		year: "2010",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			3, 9, 3, 10, 5, 10, 5, 9, 2, 3, 3, 5, 9, 6, 4, 6, 10, 3, 7, 8, 1, 1, 4, 7,
			7, 3, 9, 6, 9, 1,
		],
		poster:
			"MV5BOGNiMWU0NjgtNjIyMy00ZGRkLTkyNTMtMzRlNDY0YTNjZWI4XkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SX320_CR0,0,320,475_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2010-10-07",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The story revolves around a remote village in Andhra Pradesh plagued by a strange disease killing a lot of people. The soothsayer of the village predicts that God would come to their village for rescue. Meanwhile, Raju (Mahesh Babu) a cab driver in Hyderabad goes to Rajasthan to handover an insurance cheque to a man's family who dies in his car. In a strange situation, Raju meets a man from the village and gets to know about their problem. Soon Raju realizes he is none other than the God-sent, the soothsayer predicted, and the rest of the story is all about how Raju takes up the responsibility to rescue the village from the clutches of evil.                Written by\nAnonymous",
		actors: ["Mahesh Babu", "Anushka Shetty", "Prakash Raj"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOGNiMWU0NjgtNjIyMy00ZGRkLTkyNTMtMzRlNDY0YTNjZWI4XkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SX320_CR0,0,320,475_AL_.jpg",
	},
	{
		title: "Golmaal: Fun Unlimited",
		year: "2006",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			1, 1, 4, 8, 9, 4, 8, 6, 2, 10, 3, 8, 3, 1, 4, 5, 8, 3, 10, 2, 6, 2, 1, 4,
			6, 4, 10, 10, 8, 8,
		],
		poster:
			"MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX275_CR0,0,275,376_AL_.jpg",
		contentRating: "",
		duration: "PT150M",
		releaseDate: "2006-07-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Gopal, Lucky, Madhav and Laxman - four guys bound together by their child-like notoriety, aimlessness and petty business of conning people for fun and money. Laxman is an intelligent student who is not allowed to pass by his mischievous band of friends Gopal, Madhav and mute Lucky. This is because all four friends use his hostel room to conduct their activities. He is peer-pressured into running a series of scams in order to earn himself and his friends some money. Once thrown out of college bag-n-baggage, the naughty foursome finds refuge in the bungalow of a blind couple as their grandson. A cat mouse game unfolds as Laxman's body and Gopal's voice makes for Sameer (The grandson from US). Each time the blinded Dadaji comes amidst them, hilarious situations arise Enter Nirali with a bath towel and the group now have time, place and 'resources' to fall in love. Their individual efforts at winning the lady's heart, fail, resulting in rib tickling comic scenes. Apart from their amorous ...                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Ajay Devgn", "Arshad Warsi", "Sharman Joshi"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX275_CR0,0,275,376_AL_.jpg",
	},
	{
		title: "Jolly LLB",
		year: "2013",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			2, 3, 5, 1, 3, 10, 1, 2, 3, 2, 2, 6, 7, 3, 8, 2, 3, 9, 5, 6, 1, 6, 6, 1,
			5, 5, 5, 9, 10, 7,
		],
		poster:
			"MV5BMjgzNDdiNmEtYWI1OC00ZjhjLWE2ZWQtY2QyNjE2ZDAyNTI3XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,378,500_AL_.jpg",
		contentRating: "",
		duration: "PT135M",
		releaseDate: "2013-03-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A small time lawyer files a PIL in court against his own idols case.",
		actors: ["Arshad Warsi", "Amrita Rao", "Boman Irani"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjgzNDdiNmEtYWI1OC00ZjhjLWE2ZWQtY2QyNjE2ZDAyNTI3XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,378,500_AL_.jpg",
	},
	{
		title: "Mardaani",
		year: "2014",
		genres: ["Action", "Drama", "Thriller"],
		ratings: [
			10, 6, 7, 3, 3, 5, 5, 1, 8, 2, 10, 6, 10, 7, 1, 8, 10, 1, 4, 9, 4, 5, 2,
			2, 10, 6, 4, 4, 2, 5,
		],
		poster:
			"MV5BMjI1MTA5MzM2MF5BMl5BanBnXkFtZTgwNjk2MDgwMjE@._V1_SY500_CR0,0,321,500_AL_.jpg",
		contentRating: "",
		duration: "PT113M",
		releaseDate: "2014-08-22",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"India is the world's hub for child sex trafficking - Nearly 40,000 children are abducted every year - Every 8 minutes a girl child goes missing in India. Mardaani, is a story of Shivani Shivaji Roy, Crime Branch, who sets out to confront the mastermind behind a child trafficking mafia.                Written by\nOfficial source",
		actors: ["Rani Mukerji", "Tahir Raj Bhasin", "Priyanka Sharma"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MTA5MzM2MF5BMl5BanBnXkFtZTgwNjk2MDgwMjE@._V1_SY500_CR0,0,321,500_AL_.jpg",
	},
	{
		title: "Psycho Raman",
		year: "2016",
		genres: ["Crime", "Drama", "Thriller"],
		ratings: [
			8, 9, 9, 6, 10, 1, 7, 7, 6, 4, 10, 5, 6, 4, 3, 7, 7, 3, 6, 8, 7, 8, 1, 4,
			2, 9, 1, 1, 7, 5,
		],
		poster:
			"MV5BMjE2MTgxZWYtMzVmMy00NjY0LWJkMjktZWE4OTYyOGI2MTUzXkEyXkFqcGdeQXVyNTE2MzU4OTA@._V1_SY500_SX346_AL_.jpg",
		contentRating: "",
		duration: "PT133M",
		releaseDate: "2016-06-24",
		averageRating: 0,
		originalTitle: "Raman Raghav 2.0",
		storyline:
			"Set in present day Mumbai the story follows the life of a serial killer Ramanna who is inspired by an infamous serial killer from the 1960s Raman Raghav. His strange obsession with Raghavan, a young Cop keeps growing as he closely follows him without his knowledge and often creates situations where both of them come face to face.",
		actors: ["Nawazuddin Siddiqui", "Vicky Kaushal", "Sobhita Dhulipala"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MTgxZWYtMzVmMy00NjY0LWJkMjktZWE4OTYyOGI2MTUzXkEyXkFqcGdeQXVyNTE2MzU4OTA@._V1_SY500_SX346_AL_.jpg",
	},
	{
		title: "Lootera",
		year: "2013",
		genres: ["Drama", "Romance"],
		ratings: [
			10, 2, 4, 6, 1, 9, 9, 3, 9, 9, 1, 9, 10, 7, 8, 9, 4, 1, 8, 10, 7, 6, 2, 1,
			3, 1, 3, 4, 1, 3,
		],
		poster:
			"MV5BOTUwNTYyMzk4Ml5BMl5BanBnXkFtZTcwMTY2Mzc4OQ@@._V1_SY500_CR0,0,321,500_AL_.jpg",
		contentRating: "",
		duration: "PT136M",
		releaseDate: "2013-07-05",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The year is 1953. A visiting archaeologist called Varun Shrivastav comes to the village of Manikpur in West Bengal to excavate the temple grounds of the local Zamindar. With knowledge and experience beyond his young demeanour, Varun greatly impresses the Zamindar and his family. Especially Pakhi, the Zamindar's feisty and only daughter, who finds herself irrevocably drawn towards him. But Varun isn't all he seems on the surface. And as the simmering attraction between him and Pakhi leads to a tender and deep love, he is forced to choose between her and his past. Making his choice, Varun disappears. Pakhi struggles to move on with her life, determined to forget him and their relationship. Until one day, when he returns under the most extraordinary circumstances. Inspired from O. Henry's \"The Last Leaf\", Lootera is the uplifting story of two lovers. Of heartbreak, betrayal... and ultimate redemption.                Written by\nLootera Film",
		actors: ["Ranveer Singh", "Sonakshi Sinha", "Barun Chanda"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwNTYyMzk4Ml5BMl5BanBnXkFtZTcwMTY2Mzc4OQ@@._V1_SY500_CR0,0,321,500_AL_.jpg",
	},
	{
		title: "Parineeta",
		year: "2005",
		genres: ["Drama", "Musical", "Romance"],
		ratings: [
			7, 10, 2, 2, 2, 5, 5, 4, 2, 9, 2, 6, 6, 7, 1, 1, 3, 5, 8, 6, 1, 8, 10, 10,
			7, 6, 10, 3, 7, 4,
		],
		poster:
			"MV5BMTcwOTEyMTYyM15BMl5BanBnXkFtZTcwMTEyMTAzMQ@@._V1_SY375_SX259_AL_.jpg",
		contentRating: "",
		duration: "PT130M",
		releaseDate: "2005-06-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Circa 1962 in Calcutta, India, live three neighboring families in a upper middle-class area. Gurcharan lives in a palatial home (Haveli) with his wife, and two beautiful daughters, Lolita and Koyal. He is retired,unable to find suitable work and must live off of his savings, ends up mortgaging his house with his neighbor, Navinchandra Roy, and hopes to get his daughters married within his means; there is Charu Sharma, who lives with her brother and sister-in-law, who has a wealthy brother, Girish, who lives in Britain. And finally there are the Roys - Navinchandra, a hard-nosed businessman, who will never undertake anything unless there is a high level of profit for him, his son, Shekhar, who he hopes to groom after himself, and his quiet, devout wife. Navin realizes Gurcharan's plight and offers Lolita a job at his office in order to enable the family to survive. Shekhar and Lolita are attracted to each other, but Navin does not approve of this, as he wants Shekhar to get married to ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Vidya Balan", "Saif Ali Khan", "Sanjay Dutt"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwOTEyMTYyM15BMl5BanBnXkFtZTcwMTEyMTAzMQ@@._V1_SY375_SX259_AL_.jpg",
	},
	{
		title: "Pyaar Ka Punchnama 2",
		year: "2015",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			6, 5, 10, 3, 6, 2, 1, 7, 3, 2, 1, 5, 4, 2, 1, 9, 8, 4, 8, 1, 9, 5, 1, 9,
			7, 10, 2, 8, 10, 6,
		],
		poster:
			"MV5BMTcxNDY5NjA5NV5BMl5BanBnXkFtZTgwNjcyMTk5NjE@._V1_SY492_SX340_AL_.jpg",
		contentRating: "",
		duration: "PT137M",
		releaseDate: "2015-10-16",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"After falling in love, three roommates experience changes in their lives.",
		actors: ["Sunny Singh Nijjar", "Sonalli Sehgal", "Kartik Aaryan"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxNDY5NjA5NV5BMl5BanBnXkFtZTgwNjcyMTk5NjE@._V1_SY492_SX340_AL_.jpg",
	},
	{
		title: "Shaitan",
		year: "2011",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			2, 4, 9, 3, 3, 5, 6, 6, 1, 1, 7, 4, 7, 7, 2, 4, 2, 7, 1, 10, 4, 1, 4, 6,
			7, 9, 10, 9, 9, 4,
		],
		poster:
			"MV5BNDJiNDQxYWUtNTM2Mi00MDg3LWI5NTYtNjU1NmVmNmYwNTE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "",
		duration: "PT121M",
		releaseDate: "2011-06-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"After the passing of her mother, and the entry of a step-mother, Amrita Jayshankar retreats into herself. Her father is summoned to her school and is told that his daughter may require counseling, but he refuses to believe and instead makes a donation to the school. Then Amrita meets with three males and a female, namely Zuben, Dushant Sahu, Karan Chaudhary; and Tanya Sharma respectively. Together they live it up with drugs and alcohol until things get out of control when they accidentally kill a couple. A corrupt police constable demands Rs.25 Lakhs to eliminate their involvement. Unable to come up with so much cash, the five decide to fake a kidnapping, demand the cash from Amrita's father, and clear their respective names. Amrita accordingly goes 'missing', and her father involves the police, who assign this case to once-suspended police inspector, Arvind Mathur. With the media getting involved, Arvind begins his investigation, but will soon find it hampered - complicating not only...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Kalki Koechlin", "Shiv Pandit", "Gulshan Devaiah"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNDJiNDQxYWUtNTM2Mi00MDg3LWI5NTYtNjU1NmVmNmYwNTE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Band Baaja Baaraat",
		year: "2010",
		genres: ["Drama", "Romance"],
		ratings: [
			5, 10, 3, 4, 1, 10, 6, 7, 1, 5, 10, 9, 3, 3, 4, 3, 6, 3, 5, 7, 5, 9, 5,
			10, 6, 7, 9, 6, 3, 6,
		],
		poster:
			"MV5BNmJmYTdkZDEtMTlmZS00ZmI0LTk3NzQtNDE2YjNlZjc5YWYzXkEyXkFqcGdeQXVyNDIxMDcxNjc@._V1_SY200_SX150_AL_.jpg",
		contentRating: "",
		duration: "PT139M",
		releaseDate: "2010-12-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"After Delhi-based slacker-collegian, Bittoo Sharma's father asks him to return home to work in the sugar-cane fields, he refuses and decides to partner with career-minded wedding planner, Janakpuri-based Shruti Kakkar. She refuses to have to do anything with him, but after he impresses her, she partners with him, they set up 'Shaadi Mubarak' and begin organizing small wedding celebrations with struggling restaurateur and florist, Rajinder Singh and Maqbool respectfully. The duo hit big time after they organize a wedding party at Sainik Farm and begin to have dreams of bettering their lives. It is then Shruti realizes that she has fallen in love with Bittoo, and is embittered when he does not reciprocate. This bitterness gets worse, and the duo split up, with Bittoo opening 'Happy Weddings' - resulting in a downward spiral of their performance. With creditors hovering over them, no money coming in, Shruti finally gives way to her parents' wishes and agrees to get married to Dubai-based...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Ranveer Singh", "Anushka Sharma", "Ranjit Batra"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNmJmYTdkZDEtMTlmZS00ZmI0LTk3NzQtNDE2YjNlZjc5YWYzXkEyXkFqcGdeQXVyNDIxMDcxNjc@._V1_SY200_SX150_AL_.jpg",
	},
	{
		title: "Srimanthudu",
		year: "2015",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			5, 1, 1, 3, 4, 5, 10, 10, 3, 4, 8, 10, 2, 8, 8, 4, 3, 9, 9, 10, 5, 10, 2,
			6, 8, 4, 7, 1, 9, 1,
		],
		poster:
			"MV5BZTE1YWNmMjMtOGJjMi00MjA0LWE3YmEtOWExYWU5ODQwNDc4L2ltYWdlXkEyXkFqcGdeQXVyNzEwNjg3MjE@._V1_SY500_SX353_AL_.jpg",
		contentRating: "",
		duration: "PT158M",
		releaseDate: "2015-08-07",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The simple yet, inspiring tale of Srimanthudu is about the scion of a wealthy business family, who is disinterested in merely making money. His thoughts and later circumstances move him to adopt a nondescript village and develop it against various odds. A wealthy entrepreneur (Jagapathi Babu) is a worried lot owing to his son's (Mahesh Babu) indifferent and aloof attitude. He wishes his son to acquire and continue the monumental business empire that he built over his lifetime. But, the latter does not agree to it, stating that he wishes to acquire respect first. His thoughts lie elsewhere. He meets a girl (Shruthi Haasan) and they soon fall in love owing to the similarity in their thoughts. However, when she gets to know his identity, she simply ignores him. When confronted, she chides him that he is too rich and does not even know the place of his birth. She is later revealed to be the daughter of a benevolent village head (Dr Rajendra Prasad). Incidentally that is the same village. ...                Written by\nMass_Sonu",
		actors: ["Darbha Appaji Ambarisha", "Jagapathi Babu", "Mahesh Babu"],
		imdbRating: 7.7,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZTE1YWNmMjMtOGJjMi00MjA0LWE3YmEtOWExYWU5ODQwNDc4L2ltYWdlXkEyXkFqcGdeQXVyNzEwNjg3MjE@._V1_SY500_SX353_AL_.jpg",
	},
	{
		title: "Ghajini",
		year: "2008",
		genres: ["Action", "Drama", "Mystery"],
		ratings: [
			9, 3, 5, 9, 8, 4, 4, 3, 9, 8, 10, 5, 5, 2, 10, 1, 7, 8, 3, 9, 5, 4, 6, 1,
			3, 4, 10, 4, 7, 7,
		],
		poster:
			"MV5BMjAyMzU3OTg2Nl5BMl5BanBnXkFtZTcwNzIyMjMyMg@@._V1_SY240_SX166_AL_.jpg",
		contentRating: "",
		duration: "PT183M",
		releaseDate: "2008-12-25",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Medical student, Sunita, is driven by curiosity to study the case of Sanjay Singhania, who is afflicted with short-term memory loss. She runs into him, befriends him, and finds out that he is out to kill a seemingly benevolent citizen, Ghajini Dharmatma. After warning the latter of the impending danger, she subsequently comes across a number of diaries written by Sanjay and attempts to put together a jigsaw puzzle as to how a successful and wealthy businessman became a crazed recluse, who re-lives his past through tattoos on his body, notes and Polaroid photographs on the wall of his Hiranandani Complex flat, and his sole obsession of carrying out his deadly mission - little knowing that Ghajini and his goons are out to erase every bit of evidence he has gathered and thus ensure that he ends up remembering nothing.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Aamir Khan", "Asin", "Jiah Khan"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMzU3OTg2Nl5BMl5BanBnXkFtZTcwNzIyMjMyMg@@._V1_SY240_SX166_AL_.jpg",
	},
	{
		title: "Dookudu",
		year: "2011",
		genres: ["Action", "Comedy"],
		ratings: [
			6, 4, 4, 10, 9, 8, 2, 10, 8, 4, 7, 9, 5, 9, 5, 2, 3, 5, 9, 5, 8, 8, 8, 4,
			6, 9, 3, 2, 4, 4,
		],
		poster:
			"MV5BMjg4OTgwNTExNF5BMl5BanBnXkFtZTcwMTMzNTM4Ng@@._V1_SY375_SX225_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2011-09-23",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Shankar Narayana is an honest politician who meets with a near-fatal accident. Some years later, Shankar's son Ajay has grown up to become a police officer. Ajay's mission to bring down the trade of drugs and weapons, takes him to Istanbul. It's while there that he first meets fashion student Prashanthi. Ajay is smitten with her. Back in India, Shankar finally awakes from a long coma. Ajay creates an elaborate home-life charade to shield his still-fragile father from any stress or shock. While out on the streets, it is time to hunt down Don Nayak and his criminal associates who tried to kill his father all those years ago.                Written by\nL. Hamre",
		actors: ["Mahesh Babu", "Samantha Ruth Prabhu", "Sonu Sood"],
		imdbRating: 7.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjg4OTgwNTExNF5BMl5BanBnXkFtZTcwMTMzNTM4Ng@@._V1_SY375_SX225_AL_.jpg",
	},
	{
		title: "Holiday",
		year: "2014",
		genres: ["Action", "Drama", "Thriller"],
		ratings: [
			10, 1, 9, 10, 4, 2, 3, 2, 7, 4, 7, 5, 10, 7, 8, 5, 6, 3, 7, 2, 5, 8, 5, 9,
			6, 6, 9, 10, 10, 4,
		],
		poster:
			"MV5BN2EwZjFiN2YtZjM1My00ODRkLWI5ZGMtMjEyMzY0MTBkYTkwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2014-06-06",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Virat (Akshay Kumar) is among a battalion of military officers that comes to Mumbai on vacation. Virat is also a secret Defence Intelligence Agent who cannot lie low, much to the irritation of his friend and sub inspector. During a bus ride, an attempt to frisk passengers for a lost wallet leads Virat to something much bigger. Within minutes, the bus is blown into pieces and he helps cops nab the carrier of the bomb, who escapes from the hospital only to be caught by Virat again. Using tact, Virat follows one clue at a time hoping to track down the terrorist on whose orders the sleeper cell terrorists plan to cause mayhem in Mumbai.                Written by\nSadiq khan (sadiqkhandirector@gmail.com)",
		actors: ["Akshay Kumar", "Sonakshi Sinha", "Freddy Daruwala"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BN2EwZjFiN2YtZjM1My00ODRkLWI5ZGMtMjEyMzY0MTBkYTkwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Shanghai",
		year: "2012",
		genres: ["Crime", "Thriller"],
		ratings: [
			8, 1, 5, 6, 3, 8, 2, 9, 2, 9, 9, 3, 5, 6, 4, 2, 4, 4, 1, 8, 2, 5, 8, 2, 9,
			1, 7, 1, 10, 5,
		],
		poster:
			"MV5BMTU4MTAwODQ2N15BMl5BanBnXkFtZTcwNDY3MzM3Nw@@._V1_SY480_CR0,0,332,480_AL_.jpg",
		contentRating: "",
		duration: "PT120M",
		releaseDate: "2012-06-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Prime leader of a campaign against a big government project is killed in what appears to be a road accident. An IAS officer is ordered to probe the incident and the veils of falsehood begin to drop.",
		actors: ["Emraan Hashmi", "Abhay Deol", "Prasenjit Chatterjee"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MTAwODQ2N15BMl5BanBnXkFtZTcwNDY3MzM3Nw@@._V1_SY480_CR0,0,332,480_AL_.jpg",
	},
	{
		title: "Tere Bin Laden",
		year: "2010",
		genres: ["Comedy", "Drama"],
		ratings: [
			3, 3, 2, 6, 9, 7, 9, 7, 7, 9, 6, 7, 4, 8, 7, 6, 2, 2, 5, 10, 8, 9, 5, 6,
			3, 8, 2, 6, 5, 4,
		],
		poster:
			"MV5BMTg0NDM4NjcyMF5BMl5BanBnXkFtZTcwMzA1NTI3Mw@@._V1_SY450_CR0,0,315,450_AL_.jpg",
		contentRating: "",
		duration: "PT95M",
		releaseDate: "2010-07-16",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"\"Tere Bin Laden\" is a tongue-in-cheek comedy about an ambitious young news reporter from Pakistan who is desperate to migrate to the US in pursuit of the American dream. His repeated attempts to immigrate are shot down as his visa is always rejected. But when things couldn't look worse he comes across an Osama bin Laden look alike. Ali then hatches a scheme to produce a fake Osama video and sell it to news channels as a breakthrough scoop! Unfortunately there are serious ramifications as the White House gets involved and dispatches a overzealous secret agent on Ali's trail.                Written by\nAnonymous",
		actors: ["Ali Zafar", "Pradhuman Singh", "Piyush Mishra"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NDM4NjcyMF5BMl5BanBnXkFtZTcwMzA1NTI3Mw@@._V1_SY450_CR0,0,315,450_AL_.jpg",
	},
	{
		title: "Taxi No. 9 2 11: Nau Do Gyarah",
		year: "2006",
		genres: ["Comedy", "Drama", "Thriller"],
		ratings: [
			3, 5, 2, 5, 3, 7, 1, 6, 1, 5, 10, 5, 5, 7, 2, 10, 5, 1, 6, 9, 5, 5, 6, 2,
			6, 1, 9, 9, 7, 8,
		],
		poster:
			"MV5BOTgxMTc0NTItODUyYy00ODY1LTg0NDEtZGI0MzQxZGY5NmFhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX347_AL_.jpg",
		contentRating: "",
		duration: "PT116M",
		releaseDate: "2006-02-24",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Raghav Shastri and Jai Mittal belong to two different strata of the society . Raghav is a hot-tempered , world-weary taxi driver who lies to his family about working as an insurance salesman . Jai is the heir to a sprawling business empire , your stereotypical spoiled rich man's son . After his father's demise , he leans that in his Late father's will , all the property and business has been transferred to Arjun Bajaj , his father's close friend . Jai challenges the will in court , saying that he possesses the original will safely sored away in a security vault . On the day of the hearing he hires Raghav's taxi to take him to the vault building , constantly nags him about driving too slowly which leads to speeding and accident . Jai gets away from the scene and reaches his destination , only to realize that he has dropped his vault key accidentally in Raghav's car . Raghav is arrested for the accident but not before he finds Jai's key . Jai is desperate to get the key from Raghav , ...                Written by\nSoumitra",
		actors: ["John Abraham", "Nana Patekar", "Sonali Kulkarni"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxMTc0NTItODUyYy00ODY1LTg0NDEtZGI0MzQxZGY5NmFhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX347_AL_.jpg",
	},
	{
		title: "Te3n",
		year: "2016",
		genres: ["Drama", "Mystery", "Thriller"],
		ratings: [
			1, 6, 6, 4, 10, 5, 10, 10, 1, 1, 9, 2, 10, 7, 10, 4, 9, 6, 10, 8, 1, 7, 8,
			9, 1, 4, 6, 4, 7, 2,
		],
		poster:
			"MV5BMzE2NDYzNDc1OV5BMl5BanBnXkFtZTgwNTI1ODA4ODE@._V1_SY480_CR0,0,332,480_AL_.jpg",
		contentRating: "",
		duration: "PT136M",
		releaseDate: "2016-06-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"John Biswas is a broken man. His life was destroyed when his precious granddaughter was kidnapped and murdered. Likewise, Martin Das, the investigating police officer, was so shaken by the case that he quit the force and turned to the priesthood. Now, eight years later, a young boy is kidnapped and police detective Sarita Sarkar sees similarities in the two cases. As a trail of clues leads John into the past, Fr. Martin and Sarita race to save the young boy.                Written by\nL. Hamre",
		actors: ["Amitabh Bachchan", "Nawazuddin Siddiqui", "Vidya Balan"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMzE2NDYzNDc1OV5BMl5BanBnXkFtZTgwNTI1ODA4ODE@._V1_SY480_CR0,0,332,480_AL_.jpg",
	},
	{
		title: "Bhool Bhulaiyaa",
		year: "2007",
		genres: ["Comedy", "Horror", "Mystery"],
		ratings: [
			1, 4, 9, 8, 8, 5, 5, 9, 2, 1, 2, 3, 7, 4, 4, 9, 9, 2, 9, 9, 3, 8, 5, 3,
			10, 9, 10, 9, 9, 6,
		],
		poster:
			"MV5BMjAyMjQ1Mjg5MV5BMl5BanBnXkFtZTgwOTk3MTA2MDE@._V1_SY250_SX171_AL_.jpg",
		contentRating: "",
		duration: "PT159M",
		releaseDate: "2007-10-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"When U.S.-based Siddharth visits his Indian home town with his new wife, he insists they stay at the ancestral home, laughing off family members' warnings of ghostly goings-on in the mansion. But events soon make him reconsider his beliefs. As unexplained and terrifying occurrences arise, Siddharth calls on his doctor friend to help solve the mystery. What will be the outcome? Will Siddharth's friend be able to solve this riddle?                Written by\ngavin (gunmasterM@hotmail.com)",
		actors: ["Akshay Kumar", "Vidya Balan", "Ameesha Patel"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMjQ1Mjg5MV5BMl5BanBnXkFtZTgwOTk3MTA2MDE@._V1_SY250_SX171_AL_.jpg",
	},
	{
		title: "No One Killed Jessica",
		year: "2011",
		genres: ["Biography", "Crime", "Drama"],
		ratings: [
			8, 10, 3, 3, 2, 8, 8, 5, 10, 8, 8, 3, 5, 1, 7, 3, 4, 9, 6, 7, 3, 8, 1, 4,
			5, 1, 9, 3, 5, 5,
		],
		poster:
			"MV5BMTU4Mzk0NDY3OV5BMl5BanBnXkFtZTcwMjE1MTkyNA@@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT136M",
		releaseDate: "2011-01-07",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Devastated when she is told that that her sister, Jessica Lall, is shot dead by Manish Bhardwaj, the son of Pramod, a Congress party Member of Parliament in Haryana, Delhi-based Sabrina Lall, in the company of her parents, attends the Court to view a charade that will lead to the acquittal of the accused and his accomplices seven years after the incident. Disillusioned by rampart police corruption and inefficiency; a stagnant British introduced legal system; the passing of her mother & the hospitalization of her father, she retreats unto herself. Then foul-mouthed NDTV employee, Meera Gaity, known for being more of an activist than a Journalist, takes an interest in this incident, and uncovers conspiracy & corruption that led to the accused' acquittals - leading to a near India-wide protest. While preparing herself to participate in a candle-lit procession at Delhi's India Gate, Meera will confront Sabrina and will come to know the reasons why the latter refuses to be involved in this...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Rani Mukerji", "Vidya Balan", "Myra Karn"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4Mzk0NDY3OV5BMl5BanBnXkFtZTcwMjE1MTkyNA@@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Uppi 2",
		year: "2015",
		genres: ["Action", "Mystery", "Thriller"],
		ratings: [
			9, 3, 1, 10, 3, 5, 3, 3, 2, 2, 3, 10, 2, 5, 2, 9, 10, 3, 5, 7, 9, 10, 2,
			1, 6, 6, 4, 4, 9, 9,
		],
		poster:
			"MV5BMjEyMTA0NzY2NF5BMl5BanBnXkFtZTgwNDQ1ODk1NjE@._V1_SY500_CR0,0,324,500_AL_.jpg",
		contentRating: "",
		duration: "PT135M",
		releaseDate: "2015-08-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A psychological thriller which depicts the fact that \"Today is a gift - that's why it's called Present\" in an unusual way. It is about a man called Neenu, who lives in the present. The film takes the audience through a journey of his life by detailing why Neenu lives in the present, by exploring his past and his future - both as seen by different people in Neenu's life. The film also highlights that happiness can be attained by means other than wealth.                Written by\nSooji",
		actors: ["Upendra", "Kristina Akheeva", "Parul Yadav"],
		imdbRating: 8.6,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyMTA0NzY2NF5BMl5BanBnXkFtZTgwNDQ1ODk1NjE@._V1_SY500_CR0,0,324,500_AL_.jpg",
	},
	{
		title: "Namastey London",
		year: "2007",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			9, 6, 3, 2, 9, 8, 10, 5, 1, 3, 4, 9, 6, 7, 10, 2, 2, 6, 9, 2, 1, 1, 1, 7,
			2, 4, 4, 2, 5, 5,
		],
		poster:
			"MV5BNTIzNDc3MTQ4OV5BMl5BanBnXkFtZTcwMzk0MDc4MQ@@._V1_SY250_SX153_AL_.jpg",
		contentRating: "",
		duration: "PT128M",
		releaseDate: "2007-03-23",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Indian-born Manmohan Malhotra decided to re-locate to London, England, established himself, returned to India, got married to Bebo, and after a period of 4 years got a visa for her so that she could live with him. Shortly thereafter she gave birth to Jasmeet. Manmohan was always embarrassed of Bebo, as she was overly healthy and not quite sophisticated, as a result he always left her at home, while he socialized. Bebo did not want Jasmeet to end up like her, so got her admitted in an English Medium school, encouraged to mingle with Caucasian friends, and as a result Jasmeet was transformed in to Jazz - a stunningly beautiful young woman, British in looks, talk, habits, and heart. Manmohan's plans to get her married to an Indian boy are all in vain. His friend, Parvez Khan, is in a similar situation with his son, Imran, openly romancing a Caucasian blonde, Susan. Manmohan decides to take his family for a tour in India, and ends up getting her married to Arjun Singh. On their return to ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Akshay Kumar", "Katrina Kaif", "Rishi Kapoor"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTIzNDc3MTQ4OV5BMl5BanBnXkFtZTcwMzk0MDc4MQ@@._V1_SY250_SX153_AL_.jpg",
	},
	{
		title: "Gunda",
		year: "1998",
		genres: ["Action", "Comedy", "Crime"],
		ratings: [
			1, 4, 1, 5, 9, 10, 1, 9, 6, 4, 1, 9, 2, 4, 7, 8, 3, 8, 8, 3, 2, 6, 10, 2,
			5, 8, 1, 6, 7, 3,
		],
		poster:
			"MV5BN2NkYzhlMDQtM2QwOS00NjJmLWI1M2QtMDFjNzE4ZmFkZjkxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,360,500_AL_.jpg",
		contentRating: "",
		duration: "PT129M",
		releaseDate: "1998",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The gangster Bulla (Mukesh Rishi) becomes the crime lord of Mumbai after killing his rival Lamboo Aata (Ishrat Ali). However, when his right hand man Kala Shetty (Rami Reddy) is arrested by police due to the intervention of a coolie and a good samaritan Shankar (Mithun Chakraborty), Bulla swears revenge. He manages to trap Shankar's sister Geeta (Sapna) into a sham marriage with Gulshan (Gulshan Rana) who is a scamster working for the pimp Lucky Chikna (Razak Khan). Bulla's younger brother Chutiya (Shakti Kapoor), who has long been impotent, becomes sex-crazed under the influence of London-imported pills provided by his loving elder brother and proceeds to brutally rape Geeta and ends up killing her. When Shankar's policeman father is also killed by the corrupt Inspector Kale (Rana Jung Bahadur), Shankar swears that he will kill Bulla, Chutiya, their ally Potey (Mohan Joshi) and the rest of their entourage within ten days.                Written by\nSoumitra",
		actors: ["Mithun Chakraborty", "Verna Raj", "Ishrat Ali"],
		imdbRating: 7.7,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BN2NkYzhlMDQtM2QwOS00NjJmLWI1M2QtMDFjNzE4ZmFkZjkxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,360,500_AL_.jpg",
	},
	{
		title: "D-Day",
		year: "2013",
		genres: ["Action", "Adventure", "Crime"],
		ratings: [
			2, 7, 4, 9, 3, 7, 1, 10, 6, 5, 3, 10, 9, 6, 7, 7, 5, 2, 9, 1, 5, 7, 6, 7,
			2, 10, 4, 6, 6, 7,
		],
		poster:
			"MV5BMTk4MDQzMjU3M15BMl5BanBnXkFtZTcwMDY1NzA4OQ@@._V1_SY500_CR0,0,346,500_AL_.jpg",
		contentRating: "",
		duration: "PT153M",
		releaseDate: "2013-07-19",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"9 years ago Wali Khan (Irrfan Khan) was sent into Karachi, Pakistan by the Chief of RAW Ashwini Rao (Nasser) to report the activities of The Most Wanted Man in India. 9 days ago Rudra Pratap Singh (Arjun Rampal) Indian Armed Forces, MARCOS unit, Zoya Rehman (Huma Qureshi) RAW Explosives expert, and Aslam, a petty thief from the streets of Mumbai recruited by RAW, infiltrated Pakistan to join Wali Khan and carry out the mission to bring back The Most Wanted Man in India. The man who was going to break all ISI protocol and security and attend his own son's wedding. The man who could on that day be abducted and brought back to India to face justice. 1 day ago everything went according to plan until it all failed. The team sent in to bring The Most Wanted Man in India, did the unthinkable - they carried out the most daring operation and almost got away with it. Almost because, something went horribly wrong.                Written by\nYash Raj Films",
		actors: ["Irrfan Khan", "Rishi Kapoor", "Arjun Rampal"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MDQzMjU3M15BMl5BanBnXkFtZTcwMDY1NzA4OQ@@._V1_SY500_CR0,0,346,500_AL_.jpg",
	},
	{
		title: "Nanban",
		year: "2012",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			5, 9, 9, 6, 5, 9, 2, 1, 5, 6, 10, 5, 9, 1, 7, 6, 2, 2, 2, 7, 1, 4, 8, 1,
			7, 1, 7, 2, 2, 7,
		],
		poster:
			"MV5BMDg5ZjgxMzQtYjZkMy00MmM4LTljNTItZmUzNThlZGJiMzAwXkEyXkFqcGdeQXVyMzc1MDM1ODA@._V1_SY500_CR0,0,320,500_AL_.jpg",
		contentRating: "",
		duration: "PT188M",
		releaseDate: "2012-01-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'Two buddies Venkatramakrishnan and Sevalkodi Senthil set out in search of their long lost friend Panchavan Parivendan aka Pari. They have a nerd Srivatsan for company and through intermittent flashbacks we are told that Pari, a bright, yet free-spirited student, who through his charisma is able to convince his two friends to think for themselves, follow their heart and take challenges with a positive attitude chanting his mantra: all is well. Pari wants to change the education system and often lock horns with Professor Virumandi Santhanam the Principal whose says: "Life is a race - Run Run Run". He wins the heart of Virumandi\'s daughter Riya and the film is about his journey.                Written by\nCaptain',
		actors: ["Joseph Vijay", "Jiiva", "Srikanth"],
		imdbRating: 7.7,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMDg5ZjgxMzQtYjZkMy00MmM4LTljNTItZmUzNThlZGJiMzAwXkEyXkFqcGdeQXVyMzc1MDM1ODA@._V1_SY500_CR0,0,320,500_AL_.jpg",
	},
	{
		title: "Paa",
		year: "2009",
		genres: ["Comedy", "Drama"],
		ratings: [
			9, 6, 5, 1, 6, 10, 6, 6, 7, 10, 6, 8, 6, 8, 5, 1, 6, 2, 1, 9, 2, 5, 2, 9,
			4, 5, 1, 4, 1, 10,
		],
		poster:
			"MV5BMjIxNDAwMzc4M15BMl5BanBnXkFtZTcwODAzMzg5Mg@@._V1_SY398_SX275_AL_.jpg",
		contentRating: "",
		duration: "PT133M",
		releaseDate: "2009-12-04",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Auro (Amitabh Bachchan) is an intelligent and witty 13-year-old boy with an extremely rare genetic defect that causes accelerated aging. He suffers from a progeria-like syndrome. Mentally he is 13, very normal, but physically he looks five times older. In spite of his condition, Auro is a very happy boy. He lives with his mother Vidya (Vidya Balan) who is a gynecologist. Amol Arte (Abhishek Bachchan) is young, progressive and a full-of-ideals politician. He is out to prove to the world that 'politics' is not a bad word. He is a man with a mission. Auro is Amol's son.                Written by\nBig Pictures",
		actors: ["Amitabh Bachchan", "Abhishek Bachchan", "Vidya Balan"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNDAwMzc4M15BMl5BanBnXkFtZTcwODAzMzg5Mg@@._V1_SY398_SX275_AL_.jpg",
	},
	{
		title: "Ayan",
		year: "2009",
		genres: ["Action"],
		ratings: [
			10, 10, 5, 4, 6, 8, 1, 9, 10, 4, 5, 5, 3, 3, 4, 10, 2, 10, 5, 7, 9, 8, 9,
			1, 6, 10, 8, 9, 5, 10,
		],
		poster:
			"MV5BNjU2MTY1NzMwMV5BMl5BanBnXkFtZTgwNjc2MTE0MjE@._V1_SY250_CR0,0,171,250_AL_.jpg",
		contentRating: "",
		duration: "PT162M",
		releaseDate: "2009-04-03",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The film's story revolves around Deva, a youngster whose mother wants him to become a government official. He, on the other hand, works for a smuggling group run by Arumuga Dass who has been his mentor and looking after him since childhood. Conflict occurs when Deva's arch rival, Kamalesh opposes and tries to eliminate Arumuga Dass from the smuggling business.                Written by\nAnonymous",
		actors: ["Suriya", "Tamannaah Bhatia", "Prabhu"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNjU2MTY1NzMwMV5BMl5BanBnXkFtZTgwNjc2MTE0MjE@._V1_SY250_CR0,0,171,250_AL_.jpg",
	},
	{
		title: "Talaash",
		year: "2012",
		genres: ["Crime", "Drama", "Mystery"],
		ratings: [
			10, 4, 2, 10, 7, 7, 8, 2, 10, 1, 3, 7, 1, 9, 7, 6, 5, 2, 9, 4, 6, 10, 3,
			6, 7, 6, 2, 1, 2, 4,
		],
		poster:
			"MV5BNTg5NzI3NzQzNl5BMl5BanBnXkFtZTcwMjM3MDU2OA@@._V1_SY500_CR0,0,344,500_AL_.jpg",
		contentRating: "",
		duration: "PT140M",
		releaseDate: "2012-11-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Seeing reflections of Mumbai under the red light, Talaash is a tale of love lost, fatal attraction and above all the quest to solve a perfect crime. Suspense at its core, Talaash explores Mumbai's underbelly like never before. Aamir Khan plays an investigation officer, Inspector Shekhawat who receives a phone call early in the morning informing him about death and an accident and how everything starts to unfold from there. The case turns into a life altering chase for Inspector Shekhawat when he is forced to reel under the repercussions of a broken married life with his wife Roshni played by Rani Mukherji and come face to face with his suppressed grief. Being on his investigational quest and fighting it out with personal struggle, Inspector Shekhawat meets a sex worker Rosie played by Kareena Kapoor who further adds shades of mystery to the puzzle. What looks like a simple car accident investigation turns into a haunting mystery as further investigations show many anomalies stringed ...                Written by\nReliance Entertainment",
		actors: ["Aamir Khan", "Kareena Kapoor", "Rani Mukerji"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTg5NzI3NzQzNl5BMl5BanBnXkFtZTcwMjM3MDU2OA@@._V1_SY500_CR0,0,344,500_AL_.jpg",
	},
	{
		title: "Nannaku Prematho",
		year: "2016",
		genres: ["Action", "Drama", "Fantasy"],
		ratings: [
			9, 6, 2, 3, 5, 7, 5, 8, 1, 4, 2, 9, 6, 6, 4, 9, 4, 1, 8, 10, 2, 6, 1, 4,
			7, 9, 4, 10, 9, 1,
		],
		poster:
			"MV5BMWRiOTQyMzktNWZlNS00ZjYxLTkwNTItYzA4YzVkNWRkYzRjXkEyXkFqcGdeQXVyNjQ4ODc3Nzc@._V1_SY480_SX339_AL_.jpg",
		contentRating: "",
		duration: "PT168M",
		releaseDate: "2016-01-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Abhi (Jr NTR) takes up a mission to bring down multi-billionaire Krishna Murthy (Jagapathi Babu) to ground zero as he cheated his father Prasad (Rajendra Prasad). Abhi's father wants to take revenge on Krishna Murthy before he dies, so he plans a mind game to fulfill his father's final wish. Rest is about the mind games between Abhi and Krishna Murthy.                Written by\nSampath Kumar",
		actors: ["Junior N.T.R.", "Rakul Preet Singh", "Jagapathi Babu"],
		imdbRating: 7.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMWRiOTQyMzktNWZlNS00ZjYxLTkwNTItYzA4YzVkNWRkYzRjXkEyXkFqcGdeQXVyNjQ4ODc3Nzc@._V1_SY480_SX339_AL_.jpg",
	},
	{
		title: "Fanaa",
		year: "2006",
		genres: ["Drama", "Romance", "Thriller"],
		ratings: [
			9, 5, 7, 8, 1, 3, 8, 10, 9, 4, 2, 5, 1, 6, 8, 9, 3, 8, 6, 2, 7, 10, 6, 3,
			2, 5, 1, 6, 2, 10,
		],
		poster:
			"MV5BMjI4NTQzMjQ4N15BMl5BanBnXkFtZTcwMzE4NTk5Mw@@._V1_SY250_SX226_AL_.jpg",
		contentRating: "",
		duration: "PT168M",
		releaseDate: "2006-05-26",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Choices--to choose between right or wrong is simple, but what defines one's life is the decision between the greater of two goods or the lesser of two evils. This is the advice that Zooni Ali Beg receives from her father, just as she is about to venture out into the world on her own for the very first time. Little does she know that these very words will shape her life. Zooni, a blind Kashmiri girl, meets Rehan Qadri, a local tour guide and an incorrigible flirt, who goes from city to city exploring their architecture--and also their women. Her friends warn her against this good-for-nothing roadside Romeo, but she chooses to ignore them. She is not one to be protected. It is now her time discover life, and love. Is this really the right choice? Rehan is fascinated by Zooni. He truly wants her to see life as it should be seen, in its many colors--and as he promises her, the time spent with him will be the most precious in all her life. Zooni sees Delhi, life and love like she never has...                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Aamir Khan", "Kajol", "Rishi Kapoor"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4NTQzMjQ4N15BMl5BanBnXkFtZTcwMzE4NTk5Mw@@._V1_SY250_SX226_AL_.jpg",
	},
	{
		title: "Nh10",
		year: "2015",
		genres: ["Thriller"],
		ratings: [
			6, 1, 3, 8, 4, 2, 3, 3, 9, 9, 6, 7, 1, 4, 9, 10, 10, 3, 7, 5, 9, 10, 5, 6,
			6, 6, 4, 1, 9, 1,
		],
		poster:
			"MV5BOTUyMzk3MzQ5OV5BMl5BanBnXkFtZTgwNDM3MjM5NDE@._V1_SY500_CR0,0,346,500_AL_.jpg",
		contentRating: "",
		duration: "PT115M",
		releaseDate: "2015-03-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Meera and Arjun are professionals living in Gurgaon. When Meera walks out of a party late one night, she gets attacked by a group of unknown men. Although she escapes through the skin of her teeth, it leaves her traumatized. Arjun, partly blaming himself for not being there that night, tries to make up for it by treating Meera to a luxurious desert holiday. As they stop on a Highway Dhaba for dinner, they witness a young girl being picked up by a bunch of hoodlums. Arjun chooses to step in, unmindful of the danger ahead.                Written by\nKing Motwani",
		actors: ["Anushka Sharma", "Ravi Beniwal", "Siddharth Bharadwaj"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOTUyMzk3MzQ5OV5BMl5BanBnXkFtZTgwNDM3MjM5NDE@._V1_SY500_CR0,0,346,500_AL_.jpg",
	},
	{
		title: "i",
		year: "2015",
		genres: ["Action", "Romance", "Thriller"],
		ratings: [
			3, 6, 9, 9, 1, 10, 1, 1, 4, 7, 3, 5, 6, 9, 4, 10, 1, 2, 9, 6, 4, 7, 6, 1,
			5, 7, 1, 9, 6, 5,
		],
		poster:
			"MV5BMTQyNDk3ODM1N15BMl5BanBnXkFtZTgwMTk1NjU5MzE@._V1_SY500_SX375_AL_.jpg",
		contentRating: "",
		duration: "PT188M",
		releaseDate: "2015-01-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A top shot model Diya (Amy Jackson) falls in love with Mr. Tamil Nadu Lingesan (Vikram), and together they become the most wanted model pair in the country. When Lingesan rejects an advertisement of a wealthy businessman (Ramkumar), who gave him the big break into ad world, he plans revenge against him. Now, he is joined by a greedy model (Upen Patel), lusty doctor (Suresh Gopi) and a trans-gender stylist who are out to cause massive damage to Lingesan's life which is worse than death. The rest of the story is how Lingesan takes revenge against these powerful people in the society.                Written by\nRavi",
		actors: ["Vikram", "Amy Jackson", "Suresh Gopi"],
		imdbRating: 7.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNDk3ODM1N15BMl5BanBnXkFtZTgwMTk1NjU5MzE@._V1_SY500_SX375_AL_.jpg",
	},
	{
		title: "Don",
		year: "2006",
		genres: ["Action", "Crime", "Thriller"],
		ratings: [
			6, 3, 2, 10, 4, 6, 6, 2, 4, 7, 3, 8, 9, 8, 5, 6, 6, 5, 3, 10, 10, 1, 9, 8,
			5, 8, 7, 4, 3, 4,
		],
		poster:
			"MV5BMTY3ODA1OTU0Nl5BMl5BanBnXkFtZTcwNTEyNjA0MQ@@._V1_SY250_SX180_AL_.jpg",
		contentRating: "",
		duration: "PT171M",
		releaseDate: "2006-10-20",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"In 2006, the drug trade is booming; trafficking between Asian and Europe is at an all time high. It is at this time that the Malaysian intelligence and Anti-Narcotic department are called upon for assistance by their Indian counterparts. There are rumors that the gang recently moved their operational headquarters. The cartel is headed by the dreaded Singhania, but what many people do not know is that the business is truly managed by his lieutenant, Don. A man who lives life on the edge, Don is constantly expanding the size of his empire while evading arrest or death at the hands of his enemies, both within and outside the law. He is unstoppable in his pursuit of absolute power. His chief pursuer is an Indian police officer, Desilva. He is a man who has sworn to put an end to this nexus of evil and knows that in capturing Don lies the key to unlock this puzzle. And one day he succeeds. Don is captured and Desilva puts his plan into action. Unknown to even his own department, Pesilva ...                Written by\ngAvInDrA (brave_loverboy2004@hotmail.com)",
		actors: ["Shah Rukh Khan", "Priyanka Chopra", "Arjun Rampal"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3ODA1OTU0Nl5BMl5BanBnXkFtZTcwNTEyNjA0MQ@@._V1_SY250_SX180_AL_.jpg",
	},
	{
		title: "Dedh Ishqiya",
		year: "2014",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			5, 3, 8, 2, 10, 2, 7, 4, 7, 8, 7, 8, 7, 6, 2, 9, 8, 6, 3, 8, 5, 8, 8, 4,
			5, 7, 3, 10, 5, 9,
		],
		poster:
			"MV5BMTkxMzU3MDMxMV5BMl5BanBnXkFtZTgwMzM5MDk3MDE@._V1_SY500_CR0,0,380,500_AL_.jpg",
		contentRating: "",
		duration: "PT152M",
		releaseDate: "2014-01-10",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Dedh Ishqiya is a 2014 Indian comedy thriller film. Out from jail, Khalujaan a.k.a Iftekhar (Naseeruddin Shah) and Babban (Arshad Warsi) have stolen a necklace made of royal jewels and are on the run. They part ways and meet at the Majidabad palace, where Iftekhar is competing with Urdu poets to win the heart of the nawab's widow Begum Para (Madhuri Dixit). Her quick-witted and mysterious friend and assistant Munniya (Huma Qureshi) slowly warms up to Babban and they together plot a kidnapping. Khalujaan (Naseeruddin Shah)and Babban (Arshad Warsi), the two romantic thieves are back in Dedh Ishqiya, sequel to the acclaimed and successful Ishqiya with their romantic adventures. And this time love will take them through the SEVEN STAGES OF LOVE... with the beautiful and dangerous Madhuri Dixit as Begum Para and Huma Qureshi as Munniya.                Written by\nSukh Sandhu",
		actors: ["Naseeruddin Shah", "Madhuri Dixit", "Arshad Warsi"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMzU3MDMxMV5BMl5BanBnXkFtZTgwMzM5MDk3MDE@._V1_SY500_CR0,0,380,500_AL_.jpg",
	},
	{
		title: "Yennai Arindhaal",
		year: "2015",
		genres: ["Action", "Drama", "Mystery"],
		ratings: [
			9, 8, 4, 5, 8, 1, 6, 8, 10, 10, 6, 6, 8, 6, 4, 10, 9, 4, 10, 4, 3, 2, 10,
			5, 2, 3, 1, 2, 10, 1,
		],
		poster:
			"MV5BYzM1M2UyZTgtOWI4My00NThmLThiYjctYzg4ODUyN2MxNWNmXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "",
		duration: "PT168M",
		releaseDate: "2015-02-05",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The life of a young boy, Sathyadev, takes a destined route when his father becomes an incidental casualty in a scene of crime. The I.P.S. route takes away from him, a loving wife-to-be and renders a child motherless. It also gives him a prominent enemy, Victor, who makes a comeback into his life as the perpetrator when he is attempting to solve a kidnap case. And like the narrative tells at that very moment - 'All hell breaks loose' and culminates in a riotous climax.                Written by\nPipingHotViews",
		actors: ["Ajith Kumar", "Arun Vijay", "Trisha Krishnan"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYzM1M2UyZTgtOWI4My00NThmLThiYjctYzg4ODUyN2MxNWNmXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Gadar: Ek Prem Katha",
		year: "2001",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			7, 7, 4, 9, 6, 3, 2, 6, 8, 1, 7, 5, 9, 1, 3, 6, 7, 10, 1, 4, 4, 8, 6, 6,
			5, 9, 6, 2, 4, 5,
		],
		poster:
			"MV5BZTQ2YjdlMTItY2RlNC00MjNlLWE2ODEtNjMxM2E3YjNlMzU2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX350_CR0,0,350,478_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2001-06-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Amongst the communal riots that erupt in the city, Tara shelters a wayward Sakina from a crazed mob and a bond that blossoms into love is created. The two eventually get married and have a son. The happy family, now living in Amritsar, gets the shock of their lives when Sakina learns that her father (Amrish Puri), whom she previously believed died in the riots back in Amritsar, is still alive after seeing his picture in a tattered, old newspaper. Upon contacting him, Sakina's father, now the mayor of Lahore in Pakistan, arranges for his daughter to arrive in Lahore to see him. Sakina leaves for Lahore minus Tara and her son, and upon reaching the city, learns of her father's plans for her - plans that include forcing Sakina to forget about her family and start life anew in Pakistan. Then begins an extraordinary journey which will lead Tara to cross the border into Pakistan to find his love Sakina.                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Sunny Deol", "Ameesha Patel", "Amrish Puri"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZTQ2YjdlMTItY2RlNC00MjNlLWE2ODEtNjMxM2E3YjNlMzU2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX350_CR0,0,350,478_AL_.jpg",
	},
	{
		title: "Bajirao Mastani",
		year: "2015",
		genres: ["Action", "Drama", "History"],
		ratings: [
			5, 10, 7, 7, 7, 3, 10, 2, 10, 9, 1, 2, 10, 5, 3, 9, 10, 3, 3, 4, 9, 4, 6,
			1, 2, 2, 7, 2, 7, 3,
		],
		poster:
			"MV5BMWI3YTA1MDktYWNjOS00MTE5LTkzMTQtOWNiODY2MjIzYTQwXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT158M",
		releaseDate: "2015-12-18",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'Bajirao 1, who fought over 41 major battles and many others, is reputed never to have lost a battle. Bajirao is described as "RANMARD" a man of the battlefield. Bajirao said to his brother "Remember that night has nothing to do with sleep. It was created by God, to raid territory held by your enemy. The night is your shield, your screen against the cannons and swords of vastly superior enemy forces. " Bajirao was a heaven born cavalry leader. In the long and distinguished galaxy of Peshwas, Bajirao was unequaled for the daring and originality of his genius and the volume and value of his achievements.                Written by\nAMIT KHER',
		actors: ["Ranveer Singh", "Priyanka Chopra", "Deepika Padukone"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMWI3YTA1MDktYWNjOS00MTE5LTkzMTQtOWNiODY2MjIzYTQwXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Wazir",
		year: "2016",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			1, 7, 9, 5, 7, 2, 9, 6, 5, 3, 6, 8, 8, 5, 3, 10, 3, 5, 9, 8, 1, 8, 7, 9,
			1, 6, 6, 5, 8, 8,
		],
		poster:
			"MV5BMTUzNDU4NDMyOV5BMl5BanBnXkFtZTgwNjcyNzU0NzE@._V1_SY500_SX375_AL_.jpg",
		contentRating: "",
		duration: "PT103M",
		releaseDate: "2016-01-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"'Wazir' is a tale of two unlikely friends, a wheelchair-bound chess grandmaster and a brave ATS officer. Brought together by grief and a strange twist of fate, the two men decide to help each other win the biggest games of their lives. But there's a mysterious, dangerous opponent lurking in the shadows, who is all set to checkmate them.                Written by\nAbhijat Joshi",
		actors: ["Amitabh Bachchan", "Farhan Akhtar", "Aditi Rao Hydari"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNDU4NDMyOV5BMl5BanBnXkFtZTgwNjcyNzU0NzE@._V1_SY500_SX375_AL_.jpg",
	},
	{
		title: "Dasavatharam",
		year: "2008",
		genres: ["Action", "Adventure", "Drama"],
		ratings: [
			2, 9, 10, 7, 6, 4, 1, 9, 9, 2, 6, 5, 1, 7, 7, 8, 5, 4, 7, 7, 3, 5, 6, 3,
			1, 4, 4, 3, 7, 1,
		],
		poster:
			"MV5BNjY0MGI3NTUtMjIzYy00OTM3LWI4YjMtNWQyMDgyMjU2YzYwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,366,500_AL_.jpg",
		contentRating: "",
		duration: "PT189M",
		releaseDate: "2008-06-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"U.S.-based Bio-technologist, Govind K. Somaiyya, narrates from a stadium a tale of religious conflict in India - even before the appearance of Jesus and Allah. This conflict was between worshipers of Bhagwan Shri Shiv and Bhagwan Shri Vishnu - with devotees of the latter being put to death. Now in post-9/11 era President George W. Bush invests heavily in biological research but things get out of control when a vial containing a deadly chemical is inadvertently dispatched via courier to Tamil Nadu, India. In order to retrieve it, Govind must face heavy odds, including a deadly CIA Agent, Chris Fletcher; a killer named Jasmine; RAW Officer Pranab Kundu, as well as a martial-arts artist from Tokyo.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Kamal Haasan", "Asin", "Mallika Sherawat"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNjY0MGI3NTUtMjIzYy00OTM3LWI4YjMtNWQyMDgyMjU2YzYwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,366,500_AL_.jpg",
	},
	{
		title: "Gabbar is Back",
		year: "2015",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			7, 1, 7, 2, 2, 10, 8, 8, 8, 7, 2, 5, 9, 6, 10, 3, 8, 7, 10, 2, 8, 4, 2, 9,
			7, 7, 6, 3, 6, 7,
		],
		poster:
			"MV5BMjQyMTY1NTc1NV5BMl5BanBnXkFtZTgwODUzMDIyNTE@._V1_SY500_CR0,0,347,500_AL_.jpg",
		contentRating: "",
		duration: "PT128M",
		releaseDate: "2015-05-01",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Gabbar Singh Rajput (Akshay Kumar) creates his own vigilante military network called the Anti-Corruption Force (ACF) that eliminates the most corrupt individuals, from all walks of life, in a systematic manner. As pressure builds on Police and Government to track down the man who masterminds these killings, Balbir Singh (Sonu Sood) is specially summoned to head the task. He is aided by Suryam (Prakash Raj) who, though being just a constable in the mammoth Police force, is compelled by his instincts to see through the underlying design.                Written by\nAnonymous",
		actors: ["Akshay Kumar", "Shruti Haasan", "Sunil Grover"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMTY1NTc1NV5BMl5BanBnXkFtZTgwODUzMDIyNTE@._V1_SY500_CR0,0,347,500_AL_.jpg",
	},
	{
		title: "Tamasha",
		year: "2015",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			6, 10, 8, 7, 1, 1, 1, 1, 9, 5, 4, 5, 2, 9, 3, 1, 9, 10, 9, 8, 4, 6, 5, 7,
			5, 6, 4, 8, 6, 3,
		],
		poster:
			"MV5BMjA1MTc0Mjc4Ml5BMl5BanBnXkFtZTgwNjU5Nzk4NjE@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT139M",
		releaseDate: "2015-11-27",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Tamasha is about the journey of someone who has lost his edge in trying to follow socially acceptable conventions of society. The film is based on the central theme of abrasion and loss of self that happens in an attempt to find oneself.                Written by\nKing Motwani",
		actors: ["Deepika Padukone", "Ranbir Kapoor", "Piyush Mishra"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc0Mjc4Ml5BMl5BanBnXkFtZTgwNjU5Nzk4NjE@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Sanam Teri Kasam",
		year: "2016",
		genres: ["Romance"],
		ratings: [
			4, 10, 8, 8, 4, 4, 7, 10, 2, 5, 5, 7, 5, 3, 8, 2, 3, 5, 4, 10, 1, 9, 6, 2,
			1, 2, 5, 3, 2, 7,
		],
		poster:
			"MV5BNGY1NWMxYzctMjQ5Ni00NjJiLTgyN2YtOTZlZWQ3OTcxZWFhXkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_SY434_CR0,0,299,434_AL_.jpg",
		contentRating: "",
		duration: "PT154M",
		releaseDate: "2016-02-05",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'A musical romantic movie exploring the journey that ensues when the blue blooded boy Inder (Harshvardhan Rane) "Who wanted to love no one" crosses paths with Saru (Mawra Hocane) "Whom no one wanted to love". All their lives they were waiting to meet, but they just didn\'t know it . A musical tale of love , longing and loss. Sanam Teri Kasam - A Love story sealed with a Curse Directed by Radhika Rao and Vinay Sapru Music by Himesh Reshammiya with songs which will make you live a lifetime of love.                Written by\nEros Now (http://erosnow.com/#!/movie/watch/1045781/sanam-teri-kasam/6638085/exclusive---official-trailer?ap=1)',
		actors: ["Harshvardhan Rane", "Mawra Hocane", "Vijay Raaz"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNGY1NWMxYzctMjQ5Ni00NjJiLTgyN2YtOTZlZWQ3OTcxZWFhXkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_SY434_CR0,0,299,434_AL_.jpg",
	},
	{
		title: "Dhobi Ghat",
		year: "2010",
		genres: ["Drama"],
		ratings: [
			2, 6, 2, 9, 6, 4, 5, 4, 7, 8, 9, 9, 5, 10, 10, 2, 3, 4, 1, 5, 1, 9, 7, 4,
			9, 7, 6, 6, 9, 8,
		],
		poster:
			"MV5BMTQ0NDIzMzE3OF5BMl5BanBnXkFtZTcwMDUxNzAzNA@@._V1_SY500_CR0,0,321,500_AL_.jpg",
		contentRating: "",
		duration: "PT100M",
		releaseDate: "2011-01-21",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'The lives of 4 different people in the city of Mumbai get entwined by fate and luck; Shai - an investment banker with a penchant for photography, Arun - a lonely painter, Munna - the "dhobi" who aspires to become an actor and Yasmin - making a video in her camcorder for her brother, who hasn\'t been to Mumbai before. The film follows how their lives are changed by the presence of one another. Will it be for better or for worse?                Written by\nkabya92',
		actors: ["Prateik", "Monica Dogra", "Kriti Malhotra"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0NDIzMzE3OF5BMl5BanBnXkFtZTcwMDUxNzAzNA@@._V1_SY500_CR0,0,321,500_AL_.jpg",
	},
	{
		title: "Raajneeti",
		year: "2010",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			4, 7, 2, 7, 3, 7, 2, 3, 8, 3, 4, 9, 5, 7, 6, 8, 8, 9, 3, 6, 8, 6, 4, 5,
			10, 7, 8, 10, 2, 4,
		],
		poster:
			"MV5BMTkwMzE5NzE3Nl5BMl5BanBnXkFtZTcwMDMyODE1Mw@@._V1_SY500_CR0,0,348,500_AL_.jpg",
		contentRating: "",
		duration: "PT163M",
		releaseDate: "2010-06-04",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Belonging to a prominent Uttar Pradesh-family of ruthless politicians, Samar Pratap is about to return to his Irish-American girlfriend, Sarah, in the U.S. and obtain a PhD, but cancels his trip when his father, Chandra, is shot dead. He decides to stay put and avenge this slaying but ends up dealing with aspiring politician, Indu Sakseria, who wants to wed him; his brother, Prithviraj, who has been granted control of the Rashtrawadi Party but is facing imprisonment on charges of Assaulting a Police Officer and Sexual Molestation; his cousin, Veerendra, who wants control of the party; and his astute maternal uncle, Brij Gopal - who secretly controls the entire family. Before he could even handle these situations, Sarah arrives in India and will soon accuse him of being a manipulative and conniving politician.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Naseeruddin Shah", "Arjun Rampal", "Nana Patekar"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMzE5NzE3Nl5BMl5BanBnXkFtZTcwMDMyODE1Mw@@._V1_SY500_CR0,0,348,500_AL_.jpg",
	},
	{
		title: "Kaabil",
		year: "2017",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			8, 4, 2, 8, 5, 1, 5, 4, 3, 7, 6, 1, 8, 4, 2, 1, 3, 6, 3, 1, 1, 2, 10, 9,
			4, 8, 9, 1, 8, 3,
		],
		poster:
			"MV5BNGU0MDM1ODgtZmMwNi00NWRiLTgxYWEtMjJlNjMxNjc1NzQzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_SY500_CR0,0,369,500_AL_.jpg",
		contentRating: "15",
		duration: "PT139M",
		releaseDate: "2017-01-25",
		averageRating: 0,
		originalTitle: "",
		storyline: "A blind man sets out to avenge the murder of his wife.",
		actors: ["Hrithik Roshan", "Yami Gautam", "Ronit Roy"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNGU0MDM1ODgtZmMwNi00NWRiLTgxYWEtMjJlNjMxNjc1NzQzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_SY500_CR0,0,369,500_AL_.jpg",
	},
	{
		title: "Luck by Chance",
		year: "2009",
		genres: ["Drama"],
		ratings: [
			4, 3, 8, 5, 7, 6, 7, 5, 2, 5, 8, 8, 4, 10, 10, 6, 7, 3, 10, 7, 5, 6, 10,
			1, 2, 6, 4, 10, 1, 7,
		],
		poster:
			"MV5BMTY4NjIxNDc3Nl5BMl5BanBnXkFtZTcwNDc4NTk5Mw@@._V1_SY250_CR0,0,188,250_AL_.jpg",
		contentRating: "",
		duration: "PT156M",
		releaseDate: "2009-01-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Refusing the accept the same fate as her sisters, Tara and Meghna, and get married to a boy from the same Caste, Kanpur-based Sona Mishra alienates herself from her accountant father, and re-locates to Mumbai in order to act in movies. She meets with Satish Chaudhary who offers to assist her in getting a lead role. Years later, all he could manage was bit parts, leaving her frustrated but hopeful. She meets with another struggling actor, Vikram Jaisingh, and both become fairly intimate. When a lead role with Satish does not materialize, and his wife, Pinky, becomes suspicious, she decides to depart. Disappointment and shock also await Vikram when he is candidly told by his friend, Abhimanyu Gupta, that he has no talent and must consider returning back in Delhi to assist his businessman father. It does look like the end of the road for both Sona and Vikram - leaving the question open whether they will continue with their relationship &/or return to their respective homes.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Farhan Akhtar", "Konkona Sen Sharma", "Rishi Kapoor"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NjIxNDc3Nl5BMl5BanBnXkFtZTcwNDc4NTk5Mw@@._V1_SY250_CR0,0,188,250_AL_.jpg",
	},
	{
		title: "Race Gurram",
		year: "2014",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			9, 1, 5, 10, 8, 8, 10, 5, 8, 7, 7, 6, 9, 10, 10, 7, 4, 9, 4, 10, 6, 1, 8,
			4, 6, 6, 5, 7, 1, 7,
		],
		poster:
			"MV5BMjE0ODQ5NTg4Ml5BMl5BanBnXkFtZTgwMjg5MzQwNDE@._V1_SY250_CR0,0,171,250_AL_.jpg",
		contentRating: "",
		duration: "PT163M",
		releaseDate: "2014-04-11",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Ram (Shaam) and Lakshman a.k.a Lucky (Allu Arjun) are brothers. Ram is a sincere guy who grows up to become an honest cop. Lucky is a happy-go-lucky guy who enjoys life. Ram and Lucky have a tom and jerry kind of fight going on. Siva Reddy (Ravi Kishan) is a factionist who wants to become a politician. Ram gathers evidence against Siva Reddy and Lucky unintentionally intercepts them. The rest of the story is all about the race between Lucky and Siva Reddy.                Written by\nshashank",
		actors: ["Allu Arjun", "Shruti Haasan", "Shaam"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0ODQ5NTg4Ml5BMl5BanBnXkFtZTgwMjg5MzQwNDE@._V1_SY250_CR0,0,171,250_AL_.jpg",
	},
	{
		title: "Koi... Mil Gaya",
		year: "2003",
		genres: ["Drama", "Fantasy", "Romance"],
		ratings: [
			6, 3, 3, 8, 5, 7, 4, 4, 2, 1, 7, 9, 10, 5, 3, 3, 3, 7, 3, 2, 4, 6, 3, 5,
			7, 2, 6, 2, 5, 9,
		],
		poster:
			"MV5BMTIxNjg4NzkwOV5BMl5BanBnXkFtZTcwNzU2OTUyMQ@@._V1_SY237_CR0,0,165,237_AL_.jpg",
		contentRating: "",
		duration: "PT171M",
		releaseDate: "2003-08-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Scientist Sanjay Mehra devises a computer that is capable of contacting aliens. His happiness is cut short when the scientists at a space-research center scoff at him and refuse to believe his claims. While returning home with his pregnant wife, he glimpses an alien spaceship, and, in the resulting confusion, he cannot control his car, leading to a crash. His wife survives but their unborn child suffers brain damage. Years later, their son Rohit Mehra has grown up but has thinking capacity of a child. He befriends the town Mayor's daughter Nisha, which angers Nisha's suitor Raj, a spoiled brat. One day, Rohit and Nisha find Rohit's father's computer in his shed and follow the instructions provided. That very evening, their town is paid a visit by an alien spaceship that lands someplace nearby and takes off shortly afterward. But when the police inspect the footprints, they discover that one of the aliens has been left behind. Then Rohit and Nisha find the alien, name him Jadoo, and ...                Written by\nSonia",
		actors: ["Rekha", "Hrithik Roshan", "Preity Zinta"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxNjg4NzkwOV5BMl5BanBnXkFtZTcwNzU2OTUyMQ@@._V1_SY237_CR0,0,165,237_AL_.jpg",
	},
	{
		title: "Atharintiki Daaredi",
		year: "2013",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			4, 7, 2, 1, 6, 9, 5, 5, 8, 2, 8, 9, 10, 8, 7, 5, 8, 6, 10, 10, 7, 10, 1,
			8, 6, 9, 6, 3, 2, 9,
		],
		poster:
			"MV5BZWQzNDdmN2UtZTc5ZC00M2EzLWE2ZTUtMjVhNzJmOGQ5YzkwXkEyXkFqcGdeQXVyMzA0NTI2OTM@._V1_SY500_CR0,0,341,500_AL_.jpg",
		contentRating: "",
		duration: "PT170M",
		releaseDate: "2013-09-27",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The Nanda family based in Milan,Italy is a very powerful family with a huge business empire. Raghunanda(Boman Irani), his son(Mukesh Rishi)and his grandson Gautam Nanda(Pawan Kalyan) manage their billion dollar business.Raghunanda asks his grandson to fulfil his wish of reuniting him(Raghunanda) with her daughter.In the past, she is asked to get out of the house for having married a pleader without their family's consent which leads to a heated and a shocking thing ,which is later revealed in the film. Gautam promises his grandfather that he would reunite him with his estranged daughter Sunanda(Nadiya) ,who lives far away from them in Hyderabad, he decides to travel to India and bring her back. But as he reaches Hyderabad , he come to know that his uncle(Rao Ramesh)is at the airport who returns back to Hyderabad from Chennai.His uncle in fact has a stroke while driving back and Gautam takes him to a hospital and saves his life. In the hospital he sees his aunt for the first time.He is...                Written by\nAashray Dhanur",
		actors: ["Pawan Kalyan", "Samantha Ruth Prabhu", "Pranitha"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZWQzNDdmN2UtZTc5ZC00M2EzLWE2ZTUtMjVhNzJmOGQ5YzkwXkEyXkFqcGdeQXVyMzA0NTI2OTM@._V1_SY500_CR0,0,341,500_AL_.jpg",
	},
	{
		title: "Shootout at Lokhandwala",
		year: "2007",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			6, 7, 1, 4, 5, 10, 5, 7, 6, 2, 7, 2, 3, 9, 8, 2, 1, 6, 6, 10, 5, 2, 8, 5,
			2, 8, 7, 8, 4, 2,
		],
		poster:
			"MV5BMTQ3NDM2ODk2M15BMl5BanBnXkFtZTgwMjg3OTczNDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT122M",
		releaseDate: "2007-05-25",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"On a calm summer day in 1991, in the bustling Lokhandwala Complex, five criminals including Maya and Dilip were counting 70 lakhs in flat no. 32 B, when 286 policemen, headed by ACP Khan, took strategic positions around their building. A gunfire ensued and the entire nation witnessed the most talked about daylight encounter lasting 6 hours that transformed suburban Mumbai into a virtual war zone. Shootout At Lokhandwala is the story of a seasoned cop, Khan, who chased Khalistani extremists, handpicked cops like Inspector Kaviraj Patil and Constable Javed Shaikh, and dared to engage trigger-happy gangsters in a residential locality of Mumbai. Khan's fight went beyond the encounter as he faced inquisition from his own department and legal charges of human rights violations. Shootout At Lokhandwala is the story of an upcoming underworld gangster, Maya, and his highly skilled partner, Dilip. The two made extortion the buzzword in the early 90s and dared to disobey the big bhai of the ...                Written by\nBecca",
		actors: ["Amitabh Bachchan", "Sanjay Dutt", "Sunil Shetty"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NDM2ODk2M15BMl5BanBnXkFtZTgwMjg3OTczNDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Dhamaal",
		year: "2007",
		genres: ["Adventure", "Comedy", "Mystery"],
		ratings: [
			2, 3, 1, 5, 9, 7, 10, 8, 2, 8, 8, 3, 1, 6, 7, 4, 7, 6, 8, 5, 7, 8, 2, 5,
			9, 5, 5, 5, 1, 3,
		],
		poster:
			"MV5BNGUyNTk0YmYtNjU2YS00NWQ1LTllZGQtYjk5YjU4YzYxZjY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY434_SX300_AL_.jpg",
		contentRating: "",
		duration: "PT136M",
		releaseDate: "2007-09-07",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Four slackers and con-men namely: Boman Contractor, who lives a wealthy lifestyle with his eccentric dad, Nari, who loves his antique car more than his son, and asks his son to leave when he damages the car; hot-headed Aditya and dim-witted Manav, orphaned brothers; and Deshbandhu Roy, a trickster who wears a magnetized belt; share a room with a lenient landlady, who eventually gives up on them and kicks them out. After a number of con tricks, the group are arrested by the Police, but released in the countryside. At this point they witness a car plummet down a cliff, with it's sole occupant, Bose, an underworld don, who, before dying, tells them that he has hidden 10 Crore Rupees in cash in the St. Sebastian's Garden, Goa, and if they find it, it is their's to keep. The group race toward Goa in Contractor's stolen car, little knowing that their plans will soon be foiled, albeit hilariously, by Police Inspector Kabir Nayak, who is angered at this Department for not appreciating his ...                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Sanjay Dutt", "Riteish Deshmukh", "Arshad Warsi"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNGUyNTk0YmYtNjU2YS00NWQ1LTllZGQtYjk5YjU4YzYxZjY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY434_SX300_AL_.jpg",
	},
	{
		title: "Rab Ne Bana Di Jodi",
		year: "2008",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			10, 8, 10, 2, 6, 2, 1, 2, 3, 5, 8, 6, 1, 2, 9, 4, 6, 9, 10, 7, 2, 6, 10,
			6, 3, 4, 3, 1, 6, 2,
		],
		poster:
			"MV5BNTU5MjI3MTE0NV5BMl5BanBnXkFtZTcwMDk4OTUxMg@@._V1_SY400_SX258_AL_.jpg",
		contentRating: "",
		duration: "PT167M",
		releaseDate: "2008-12-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Surinder is married to Taani but there is a huge age gap between them. There is no real romance in the marriage. Then, a dance reality show called \"Rab Ne Bana Di Jodi\" airs and Taani wants to participate but can't because her husband is not hip and happening. She has a fear of losing, and she also fears that her friends will laugh at her. Surinder overhears her problem and decides to go in for a makeover. He watches some movies and learns to dance in order to woo his young wife. Throughout the show, Taani keeps falling in love to with this new-and-improved Surinder without once realizing that he's really her husband.                Written by\nmansoor-biggest fan of SRK",
		actors: ["Shah Rukh Khan", "Vinay Pathak", "Anushka Sharma"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTU5MjI3MTE0NV5BMl5BanBnXkFtZTcwMDk4OTUxMg@@._V1_SY400_SX258_AL_.jpg",
	},
	{
		title: "Hum Tum",
		year: "2004",
		genres: ["Drama", "Romance", "Comedy"],
		ratings: [
			6, 1, 3, 8, 4, 6, 6, 3, 9, 8, 9, 9, 10, 3, 2, 1, 7, 2, 8, 3, 5, 4, 9, 3,
			3, 9, 3, 1, 9, 1,
		],
		poster:
			"MV5BMTAzNzQyNDY5NTheQTJeQWpwZ15BbWU3MDkzMzIyMzE@._V1_SY89_CR0,0,58,89_AL_.jpg",
		contentRating: "",
		duration: "PT142M",
		releaseDate: "2004-05-28",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Karan Kapoor and Rhea Prakash meet for the first time in a flight bound from Delhi to New York. They just cannot stand each other: Rhea is disgusted by Karan's flirtatious mannerisms and Karan is frustrated because of Rhea's overt seriousness. They have a massive fallout and part ways, vowing never to see each other's face again. Destiny brings them together again at Rhea's marriage ceremony three years later and the mars vs. venus war continues. Rhea gets married and leaves for USA. Four years later, Karan has become a successful cartoonist and travels to Paris to visit his father. Co-incidentally he meets Rhea again and learns that her husband is no more. Karan tries earnestly to bring happiness back in Rhea's life by promising her mother that he will find a suitable groom for Rhea but the duo never realizes that they are drawing closer to each other. Will love happen? And if it does, will the star-struck couple ever admit to it? Watch the breezy romantic musical comedy Hum Tum for ...                Written by\nSoumitra",
		actors: ["Saif Ali Khan", "Rani Mukerji", "Kiron Kher"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzNzQyNDY5NTheQTJeQWpwZ15BbWU3MDkzMzIyMzE@._V1_SY89_CR0,0,58,89_AL_.jpg",
	},
	{
		title: "Sultan",
		year: "2016",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			10, 6, 7, 2, 6, 5, 4, 8, 5, 8, 5, 10, 5, 10, 10, 7, 2, 7, 10, 1, 8, 9, 1,
			4, 2, 9, 6, 10, 2, 3,
		],
		poster:
			"MV5BOWY3MmVmMGQtYTIyMS00ODc2LWI4N2YtMjA1MmY1YjA3MzVlXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SY500_CR0,0,364,500_AL_.jpg",
		contentRating: "15",
		duration: "PT170M",
		releaseDate: "2016-07-06",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Sultan is a story of Sultan Ali Khan - a local wrestling champion with the world at his feet as he dreams of representing India at the Olympics. It's a story of Aarfa - a feisty young girl from the same small town as Sultan with her own set of dreams. When the 2 local wrestling legends lock horns, romance blossoms and their dreams and aspirations become intertwined and aligned. However, the path to glory is a rocky one and one must fall several times before one stands victorious - More often than not, this journey can take a lifetime. Sultan is a classic underdog tale about a wrestler's journey, looking for a comeback by defeating all odds staked up against him. But when he has nothing to lose and everything to gain in this fight for his life match... Sultan must literally fight for his life. Sultan believes he's got what it takes... but this time, it's going to take everything he's got.                Written by\nOfficial Source",
		actors: ["Salman Khan", "Anushka Sharma", "Marko Zaror"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY3MmVmMGQtYTIyMS00ODc2LWI4N2YtMjA1MmY1YjA3MzVlXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SY500_CR0,0,364,500_AL_.jpg",
	},
	{
		title: "Table No.21",
		year: "2013",
		genres: ["Adventure", "Thriller"],
		ratings: [
			1, 9, 3, 8, 2, 4, 6, 2, 6, 3, 7, 1, 2, 5, 3, 9, 10, 9, 2, 7, 9, 4, 6, 7,
			2, 8, 7, 2, 7, 5,
		],
		poster:
			"MV5BMWE3NjhiZGItMTE1Ny00M2Q5LTlmYjYtNjNhODdhZjg2YTNjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT108M",
		releaseDate: "2013-01-04",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'A couple live a mediocre life and are thrilled to have won an exotic vacation to Fiji & their excitement increases when they get a chance to play "Tell all truth" game for a mind boggling prize money. The game begins and the couple discovers that the game isn\'t really a game, but is a game of survival.                Written by\nvhavnal',
		actors: ["Paresh Rawal", "Rajeev Khandelwal", "Tina Desai"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMWE3NjhiZGItMTE1Ny00M2Q5LTlmYjYtNjNhODdhZjg2YTNjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Chaar Sahibzaade",
		year: "2014",
		genres: ["Animation", "History"],
		ratings: [
			3, 4, 4, 8, 9, 7, 5, 4, 2, 7, 9, 6, 8, 9, 5, 1, 9, 8, 9, 3, 5, 6, 4, 3, 7,
			6, 5, 10, 10, 1,
		],
		poster:
			"MV5BMjMxNjY5NTY3OV5BMl5BanBnXkFtZTgwODE0ODU0MzE@._V1_SY480_SX332_AL_.jpg",
		contentRating: "",
		duration: "PT135M",
		releaseDate: "2014-11-06",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The sacrifices of the four sons of Guru Gobind Singh ji (tenth guru of Sikhs) - Baba Ajit Singh ji, Baba Jujhar Singh ji, Baba Zorawar Singh ji and Baba Fateh Singh ji.",
		actors: ["Om Puri", "Harman Baweja"],
		imdbRating: 8.5,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjY5NTY3OV5BMl5BanBnXkFtZTgwODE0ODU0MzE@._V1_SY480_SX332_AL_.jpg",
	},
	{
		title: "Pokkiri",
		year: "2007",
		genres: ["Action", "Comedy", "Crime"],
		ratings: [
			7, 3, 5, 3, 1, 7, 2, 10, 4, 8, 9, 6, 9, 1, 7, 8, 3, 10, 8, 2, 5, 4, 2, 3,
			10, 7, 1, 9, 10, 7,
		],
		poster:
			"MV5BMzM2ODY0MzcxMV5BMl5BanBnXkFtZTgwODc0MTI5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT161M",
		releaseDate: "2007-01-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Tamil is a thug for hire in the city of Chennai who has no ties to anyone and will do any dirty work as long as the money as good. He meets a young girl named Shruthi and they fall in love. But there are two obstacles in the path of their romance : firstly, Shruthi detests Tamil's violent ways and secondly, police sub-inspector Govindan is pursuing Shruthi obsessively with intent of making her his mistress. Meanwhile, Dubai-based crime lord Ali Bhai has arrived in Chennai for the purpose of silencing his chief rival gangster Narasimhan and also to meet Tamil who is rising within the gang's ranks. However, during the meeting, Ali Bhai is arrested in a police raid conducted by Police Commissioner Mohammed Moideen Khan and his gang hatches a morally abhorrent plan in order to secure his release.                Written by\nSoumitra",
		actors: ["Joseph Vijay", "Asin", "Prakash Raj"],
		imdbRating: 7.2,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMzM2ODY0MzcxMV5BMl5BanBnXkFtZTgwODc0MTI5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Tere Naam",
		year: "2003",
		genres: ["Action", "Drama", "Musical"],
		ratings: [
			6, 8, 8, 7, 8, 9, 7, 4, 7, 9, 2, 9, 5, 2, 8, 8, 4, 9, 10, 7, 2, 8, 2, 6,
			6, 4, 1, 9, 10, 1,
		],
		poster:
			"MV5BMTA5Mjg4NzY5NDReQTJeQWpwZ15BbWU3MDU0Njg4MzE@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT132M",
		releaseDate: "2003-08-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A woman comes from a Hindu high caste family. Her name is Nirjala. Her family want her to get married to a Hindu upper caste man. She agrees to do so. But before the wedding, she meets with a poor Indian. This man belongs to a very low caste. This man also has a very hot temper and gets into fights all the time. But both fall in love with each other. Nirjala's family refuse to permit her to get married to him. They force her to get married to the man of their choice. In the meantime, Radhe gets into fight, and someone hits him very hard on his head. Radhe loses his senses and falls down. When he wakes him, he finds himself a mental patient. The hospital finds him very violent and they chain. He is unable to remember his past. Then Nirjala re-enters his life. Will this cure Radhe or make him even worse?                Written by\nCalista",
		actors: ["Salman Khan", "Bhoomika Chawla", "Mahima Chaudhry"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5Mjg4NzY5NDReQTJeQWpwZ15BbWU3MDU0Njg4MzE@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Mohabbatein",
		year: "2000",
		genres: ["Musical", "Drama", "Romance"],
		ratings: [
			5, 3, 1, 7, 2, 10, 1, 10, 7, 1, 9, 3, 6, 3, 8, 2, 7, 5, 1, 3, 8, 9, 3, 1,
			4, 5, 6, 6, 10, 4,
		],
		poster:
			"MV5BM2Q4ZDU5NmQtNDg1OC00ZDZiLTliZDQtMmFjOTBlMzMzYjU0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,354,500_AL_.jpg",
		contentRating: "",
		duration: "PT216M",
		releaseDate: "2000-10-27",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"National Award winner, Yash Chopra and Aditya Chopra's MOHABBATEIN is a film that portrays the battle between love and fear - A battle between two stubborn men and their opposing beliefs. Raj Aryan (Shahrukh Khan), who stands for love, he would go to any lengths for it. Narayan Shankar (Amitabh Bachchan) - voted the Millennium star in the BBC polls) a strict disciplinarian as the head of India's most prestigious educational institute who stands for fear, he believes that love leads to pain and weakness. It is also the story of 3 young men and women who have to learn to follow their hearts against all the odds and the outcome of their love stories that will decide what will finally triumph. .. love or fear.                Written by\nOfficial Source",
		actors: ["Amitabh Bachchan", "Shah Rukh Khan", "Uday Chopra"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BM2Q4ZDU5NmQtNDg1OC00ZDZiLTliZDQtMmFjOTBlMzMzYjU0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,354,500_AL_.jpg",
	},
	{
		title: "Dil To Pagal Hai",
		year: "1997",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			6, 8, 5, 6, 6, 6, 4, 4, 10, 9, 8, 6, 6, 4, 5, 3, 5, 6, 1, 8, 3, 3, 7, 5,
			3, 2, 10, 8, 2, 7,
		],
		poster:
			"MV5BMTk1NDk3ODM2NF5BMl5BanBnXkFtZTgwNzkwMzE1NjE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT179M",
		releaseDate: "1997-10-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"DIL TO PAGAL HAI is the story of Rahul (Shahrukh Khan), who does not believe in love. Rahul fails to understand how two people can spend their lives together. It is the story of Pooja (Madhuri Dixit), who believes that there is someone who is made for her and she is destined to meet that person. It is also the story of Nisha (Karisma Kapoor) who believes that love is friendship and one day her dream will come true. Dil To Pagal Hai is a grand musical about passionate people with dreams. Will their dreams come true? Will they find their true love? Dil To Pagal Hai makes us believe that - someone - somewhere - is made for us.                Written by\nOfficial Source",
		actors: ["Shah Rukh Khan", "Madhuri Dixit", "Karisma Kapoor"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1NDk3ODM2NF5BMl5BanBnXkFtZTgwNzkwMzE1NjE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Pardes",
		year: "1997",
		genres: ["Musical", "Romance", "Action"],
		ratings: [
			4, 4, 2, 4, 3, 6, 4, 2, 6, 10, 7, 2, 8, 10, 2, 5, 1, 2, 3, 8, 10, 2, 9, 6,
			8, 5, 2, 6, 7, 6,
		],
		poster:
			"MV5BNTczMzc2MjYwNF5BMl5BanBnXkFtZTgwNTk4ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
		contentRating: "",
		duration: "PT191M",
		releaseDate: "1997-12-08",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'This film takes a serious look at the lives of Westernized Non-Resident Indians (NRIs) in North America (Whereas Dilwale Dulhania Le Jayenge was about NRIs with Indian hearts, Pardes is about Westernized NRIs.) and hence the meaning of the title - "foreign land". Kishorilal is a successful businessman settled in America but still emotionally attached to his motherland - India. So the pardesi comes to India with his "American" son Rajiv to find a suitable \'"Indian" girl for him. Kishorilal hopes his soon-to-be daughter in law will instill some Indian values in his extremely westernized son. He finds his daughter in law in Kusum Ganga (a pet Subhash Ghai name just as Chandni was Yash Chopra\'s favorite for a long time) in the house of his childhood friend Suraj Dev. Mahima Chaudhary makes her debut as Ganga. To finalize the marriage he sends his son along with his foster son Arjun to India. Arjun plays Cupid and returns to America with Kusum and Rajiv. Arjun comes into the movie to get ...                Written by\nAman Bakhsh',
		actors: ["Shah Rukh Khan", "Amrish Puri", "Mahima Chaudhry"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzc2MjYwNF5BMl5BanBnXkFtZTgwNTk4ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
	},
	{
		title: "Rustom",
		year: "2016",
		genres: ["Crime", "Drama", "Thriller"],
		ratings: [
			7, 3, 9, 6, 7, 3, 1, 4, 7, 6, 3, 3, 8, 8, 9, 8, 10, 1, 9, 3, 6, 8, 5, 5,
			6, 8, 4, 2, 4, 7,
		],
		poster:
			"MV5BYTZmNTUyMTUtOGJiMi00NDQ3LWFiMzctMjVkNzY1OTJiYjgyXkEyXkFqcGdeQXVyNjU2NjMwMjQ@._V1_SY499_CR0,0,348,499_AL_.jpg",
		contentRating: "",
		duration: "PT148M",
		releaseDate: "2016-08-12",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Naval officer Rustom Pavri returns from his posting and finds his wife Cynthia is away from home since last two days his marriages is on the rocks when he finds love letters in cupboard which indicates that Cynthia has found love in one of his friend Vikram Makhija an arrogant business tycoon ,Rustom then issues a pistol from Naval Ship's Armory and shoots Vikram three times in his chest living him dead and surrender himself to senior inspector Vincent Lobo.                Written by\nalex.mjacko@gmail.com",
		actors: ["Akshay Kumar", "Ileana D'Cruz", "Esha Gupta"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYTZmNTUyMTUtOGJiMi00NDQ3LWFiMzctMjVkNzY1OTJiYjgyXkEyXkFqcGdeQXVyNjU2NjMwMjQ@._V1_SY499_CR0,0,348,499_AL_.jpg",
	},
	{
		title: "Karthik Calling Karthik",
		year: "2010",
		genres: ["Drama", "Romance", "Thriller"],
		ratings: [
			4, 10, 6, 5, 6, 10, 8, 6, 3, 10, 7, 10, 9, 2, 7, 9, 5, 8, 3, 3, 9, 4, 2,
			10, 3, 1, 10, 4, 2, 3,
		],
		poster:
			"MV5BMTg4NzUyNDExMl5BMl5BanBnXkFtZTcwOTg3NTk5Mw@@._V1_SY250_CR0,0,172,250_AL_.jpg",
		contentRating: "",
		duration: "PT135M",
		releaseDate: "2010-02-26",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Born in Delhi, but now living in Mumbai, Karthik Narayan is a much abused employee with ACL Construction, secretly in love with leggy Architect, Shonali Mukherjee, who has been going steady with yet another co-worker, Ashish. After purchasing a new telephone, Karthik gets a call from a male voice that resembles his, who instructs him to follow directions; tell no one about this phone call, and he will achieve success. He follows these instructions, is soon promoted, as well as befriends Shonali, and continues following instructions from this caller. After Shonali makes it clear that she loves him, he breaks his promise, and is urged to seek counseling by her. He reluctantly does so with a Pyschiatrist, Dr. Shweta Kapadia, who hopes to cure him by visiting him early morning in his flat - not realizing the shock and trauma that await the duo.                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Siddhartha Gupta", "Swapnel Desai", "Farhan Akhtar"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NzUyNDExMl5BMl5BanBnXkFtZTcwOTg3NTk5Mw@@._V1_SY250_CR0,0,172,250_AL_.jpg",
	},
	{
		title: "Waqt: The Race Against Time",
		year: "2005",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			6, 6, 3, 7, 2, 7, 5, 6, 1, 1, 2, 9, 8, 7, 10, 7, 7, 6, 1, 1, 8, 6, 6, 4,
			2, 9, 8, 3, 8, 3,
		],
		poster:
			"MV5BMTUzMzAyMzI0M15BMl5BanBnXkFtZTcwNTc2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT153M",
		releaseDate: "2005-04-22",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Waqt the race against time is the story of a father and a son between whom there is a special bond. Ishwarchand Thakur (Amitabh Bachchan) and Sumitra Thakur (Shefali Shah) are a married couple who run a toy factory together. They have a son called Aditya Thakur (Akshay Kumar) who does not have any interest in responsibility or what he wants to do in life. It gets even worse when he elopes with his girlfriend (Pooja, played by Priyanka Chopra), the daughter of Natu (Boman Irani). When Pooja gets pregnant, both Ishwar and Sumitra decide to make Aditya realize his responsibilities, as he will have to take care of his wife and child. Both take drastic measures and even chuck Aditya out the house along with Pooja. The farce becomes so bad that Aditya begins to hate his father and they do not speak to each other for a long time. At the same time Aditya becomes aware of his role in life. However, Ishwar has done all this for a reason and is hiding something from Aditya. Ishwar is trying to ...                Written by\ngavin@sunny_deol2009@yahoo.com",
		actors: ["Amitabh Bachchan", "Akshay Kumar", "Priyanka Chopra"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMzAyMzI0M15BMl5BanBnXkFtZTcwNTc2ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Raju Ban Gaya Gentleman",
		year: "1992",
		genres: ["Musical", "Comedy", "Romance"],
		ratings: [
			8, 1, 10, 10, 4, 3, 8, 2, 9, 6, 2, 2, 10, 6, 7, 10, 10, 3, 5, 9, 3, 4, 9,
			3, 3, 3, 8, 3, 4, 2,
		],
		poster:
			"MV5BMjE3NDk0MjAwNV5BMl5BanBnXkFtZTcwMDI5MDAzMQ@@._V1_SY250_SX174_AL_.jpg",
		contentRating: "",
		duration: "PT152M",
		releaseDate: "1992-11-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Holding a degree in engineering; Raj Mathur alias Raju finds that his talent is wasted in the village so he decides to re-locate to Bombay. In Bombay he faces challenges in finding the right job until he meets and befriend the Receptionist of Chhabria Builders, Renu, who with her recommendation he manages to hold the post as Chief Engineer within that company. After this there is no turning back for Raju as he continues to climb the ladder of success. But Raju faces a draw-back when a bridge that is being built under his supervision came down crushing to death some people - this negligence not only cost Raju his job but can incarcerate him as well.                Written by\ngavin (racktoo@hotmail.com)",
		actors: ["Shah Rukh Khan", "Amrita Singh", "Juhi Chawla"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NDk0MjAwNV5BMl5BanBnXkFtZTcwMDI5MDAzMQ@@._V1_SY250_SX174_AL_.jpg",
	},
	{
		title: "Business Man",
		year: "2012",
		genres: ["Action", "Comedy", "Crime"],
		ratings: [
			1, 3, 5, 7, 4, 7, 3, 2, 5, 6, 1, 3, 10, 8, 2, 1, 9, 4, 4, 4, 1, 5, 2, 7,
			1, 7, 4, 9, 1, 10,
		],
		poster:
			"MV5BZDRlNzk5OWUtNTIwNi00MDhmLThhYTctMTQ2OGM3NWU1ZTU5XkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SY500_CR0,0,352,500_AL_.jpg",
		contentRating: "",
		duration: "PT133M",
		releaseDate: "2012-01-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			'Surya (Mahesh Babu) comes to Mumbai with a sole aim to become "Bhai" for the city. He starts his mission by recruiting rowdies for monthly salaries. He eyes Mumbai Police Commissioner\'s daughter Chitra (Kajal) and loves her. How did he become Bhai and turn out to a big Businessman, forms rest of the story                Written by\nkarthikrocks71@gmail.com',
		actors: ["Mahesh Babu", "Kajal Aggarwal", "Prakash Raj"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BZDRlNzk5OWUtNTIwNi00MDhmLThhYTctMTQ2OGM3NWU1ZTU5XkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SY500_CR0,0,352,500_AL_.jpg",
	},
	{
		title: "2 States",
		year: "2014",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			5, 6, 9, 1, 9, 5, 3, 2, 4, 9, 5, 9, 4, 4, 1, 3, 1, 10, 8, 7, 5, 9, 1, 8,
			1, 9, 10, 10, 1, 9,
		],
		poster:
			"MV5BMTUwNjQ3Nzk5N15BMl5BanBnXkFtZTgwMjI4MTgzMTE@._V1_SY500_SX346_AL_.jpg",
		contentRating: "",
		duration: "PT149M",
		releaseDate: "2014-04-18",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A story about a romantic journey of a culturally opposite couple - Krish Malhotra and Ananya Swaminathan. They meet at the IIM-Ahmedabad College and during the program they fall in love. Complications arise after the program comes to an end and they decide to get married. Krish and Ananya belong to two different states of India. Krish, a North Indian Punjabi boy from Delhi, and Ananya, a Tamilian Brahmin from Chennai. They take a conscious decision; they won't get married until their parents agree. Everything goes downhill when the parents meet. There is a cultural clash and the parents oppose the wedding. To convert their love story into a love marriage, the couple faces a tough battle in front of them. For it is easy to fight and rebel, but much harder to convince. Will Krish and Ananya's love for each other sustain the battles? Will they manage to convince their parents and make it to their wedding?                Written by\nUTV Motion Pictures",
		actors: ["Arjun Kapoor", "Alia Bhatt", "Amrita Singh"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjQ3Nzk5N15BMl5BanBnXkFtZTgwMjI4MTgzMTE@._V1_SY500_SX346_AL_.jpg",
	},
	{
		title: "Fashion",
		year: "2008",
		genres: ["Drama", "Romance"],
		ratings: [
			1, 8, 10, 3, 5, 2, 6, 10, 2, 6, 10, 8, 8, 8, 7, 8, 6, 7, 8, 5, 8, 6, 9,
			10, 4, 3, 6, 5, 5, 4,
		],
		poster:
			"MV5BMTkxNzg4NDI0OV5BMl5BanBnXkFtZTcwNzIyMjk5MQ@@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "",
		duration: "PT167M",
		releaseDate: "2008-10-29",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Set against the glittering backdrop of the glamorous but ruthless world of haute couture fashion, this is the story of a small town girl with big dreams. Meghna always knew she was meant to be famous, but she was about to find out the hard way that success came at a price. Fashion is the tale of what happens when the price of success becomes too much to pay                Written by\nAnonymous",
		actors: ["Priyanka Chopra", "Kangana Ranaut", "Mugdha Godse"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNzg4NDI0OV5BMl5BanBnXkFtZTcwNzIyMjk5MQ@@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Fan",
		year: "2016",
		genres: ["Action", "Drama", "Thriller"],
		ratings: [
			6, 8, 3, 10, 5, 7, 8, 5, 7, 5, 6, 8, 5, 7, 3, 5, 10, 6, 3, 3, 9, 8, 4, 7,
			6, 7, 2, 6, 6, 3,
		],
		poster:
			"MV5BOTMzMjkwNTI0Nl5BMl5BanBnXkFtZTgwODIxMzQ1ODE@._V1_SY500_CR0,0,333,500_AL_.jpg",
		contentRating: "11",
		duration: "PT138M",
		releaseDate: "2016-04-15",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"In a world of labels it's easy to forget who made sportsmen, pop singers and matinee idols into stars, superstars and megastars - the FANS. Every FAN has their own personal relationship with their hero - it's almost a Love Story. FAN is the story of Gaurav (Shah Rukh Khan) a young man, 20 something, whose world revolves around the mega movie star Aryan Khanna (Shah Rukh Khan) or God as he refers to him. From the by lanes of Delhi, young Gaurav embarks on a journey to the city of dreams, Mumbai, in order to wish his God on his birthday. After all, he is Aryan's biggest FAN and even has a striking resemblance to him - how difficult could it be for the world biggest FAN to get an audience with the world's biggest Star. When things don't go according to plan, Gaurav's love and passion for his God turns in to a dangerous obsession that crosses the fine line. In an edge of the seat thriller, FAN will peel away at both Gaurav and Aryan's personalities and characters as the two men discover ...                Written by\nOfficial Agent",
		actors: ["Shah Rukh Khan", "Sayani Gupta", "Carolina Main"],
		imdbRating: 7.3,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BOTMzMjkwNTI0Nl5BMl5BanBnXkFtZTgwODIxMzQ1ODE@._V1_SY500_CR0,0,333,500_AL_.jpg",
	},
	{
		title: "Main Hoon Na",
		year: "2004",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			9, 5, 3, 2, 1, 1, 10, 9, 4, 1, 5, 10, 2, 6, 4, 3, 10, 7, 9, 10, 5, 9, 6,
			2, 9, 2, 3, 2, 1, 9,
		],
		poster:
			"MV5BMjE1Mjg3NTY3NV5BMl5BanBnXkFtZTcwNjQyNDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT179M",
		releaseDate: "2004-04-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"When India and Pakistan decide to end their hostilities, there is one army person in India who is unhappy, because of his son's death in the Indo-Pak war. He decides to launch terror attacks and bring an end to peace, and for this purpose he shoots and gravelly injures an Indian army officer. After the death of this officer, Raghavan then decides to do away with the army officer's daughter, Sanjana, who is studying in hostel. Raghavan and his men descend on the hostel and hold over 100 students hostage. There is only one student who can save them, and his name is Ram, he claims he is a student, but is here on a mission - a mission that when told will reveal his real identity and two plans which he must carry out simultaneously.                Written by\nSumitra (corrected by Iqbal)",
		actors: ["Shah Rukh Khan", "Sushmita Sen", "Sunil Shetty"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1Mjg3NTY3NV5BMl5BanBnXkFtZTcwNjQyNDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Don 2",
		year: "2011",
		genres: ["Action", "Crime", "Thriller"],
		ratings: [
			2, 7, 7, 10, 7, 8, 2, 4, 2, 8, 3, 3, 10, 1, 9, 8, 9, 8, 3, 2, 2, 7, 5, 7,
			3, 3, 3, 4, 4, 4,
		],
		poster:
			"MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_SY500_CR0,0,367,500_AL_.jpg",
		contentRating: "",
		duration: "PT148M",
		releaseDate: "2011-12-23",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Having conquered the Asian underworld, Don (Shah Rukh Khan) now has his sights set on European domination. In his way are the bosses of the existing European underworld and all law enforcement agencies. The action shifts from Kuala Lumpur to Berlin as Don must avoid assassination or arrest, whichever comes first, in order for his plan to succeed.                Written by\nOfficial site",
		actors: ["Shah Rukh Khan", "Florian Lukas", "Om Puri"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_SY500_CR0,0,367,500_AL_.jpg",
	},
	{
		title: "Ishq",
		year: "1997",
		genres: ["Action", "Comedy", "Drama"],
		ratings: [
			2, 7, 7, 3, 8, 10, 4, 1, 1, 1, 5, 7, 5, 4, 4, 9, 9, 2, 6, 2, 8, 6, 1, 5,
			10, 7, 3, 6, 2, 6,
		],
		poster:
			"MV5BMTI4MTE5NjMwN15BMl5BanBnXkFtZTcwMDgwMDEyMQ@@._V1_SX134_CR0,0,134,237_AL_.jpg",
		contentRating: "",
		duration: "PT161M",
		releaseDate: "1997-11-28",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Harbans Rai and Ranjit Rai are two wealthy businessmen who absolutely *loathe* poverty and poor people . As fate would have it , Harbans Rai's daughter Madhu falls for a poor mechanic Raja while Ranjit Rai's son Ajay romances a poor girl Kajal . When Harbans and Ranjit come to know of it they try various ways to separate the lovers .                Written by\nSoumitra",
		actors: ["Aamir Khan", "Ajay Devgn", "Juhi Chawla"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4MTE5NjMwN15BMl5BanBnXkFtZTcwMDgwMDEyMQ@@._V1_SX134_CR0,0,134,237_AL_.jpg",
	},
	{
		title: "Enthiran",
		year: "2010",
		genres: ["Action", "Drama", "Romance"],
		ratings: [
			4, 10, 8, 4, 7, 2, 1, 4, 4, 2, 5, 1, 3, 1, 3, 7, 4, 6, 9, 5, 7, 1, 2, 1,
			9, 8, 3, 5, 5, 1,
		],
		poster:
			"MV5BMTMzMDE2MDg0N15BMl5BanBnXkFtZTcwNTc0Nzg5Mw@@._V1_SY444_SX888_AL_.jpg",
		contentRating: "",
		duration: "PT155M",
		releaseDate: "2010-10-01",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Dr. Vasi (Rajnikanth) invents a super-powered robot, Chitti, in his own image. The scientific body, AIRD, that must approve the robot, declines it based on its not having emotions and the ability to make rational judgment. A sudden flash of lightning evokes emotions in the robot, and Chitti is seemingly ready for integration into the human world. Then, Chitti falls in love with Dr. Vasi's fianc\u00e9e Sana (Aishwarya Rai) and turns on his creator.                Written by\nJoyojeet Pal",
		actors: ["Rajinikanth", "Aishwarya Rai Bachchan", "Danny Denzongpa"],
		imdbRating: 7.1,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMDE2MDg0N15BMl5BanBnXkFtZTcwNTc0Nzg5Mw@@._V1_SY444_SX888_AL_.jpg",
	},
	{
		title: "Agneepath",
		year: "2012",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			2, 3, 1, 10, 9, 10, 8, 8, 8, 7, 1, 7, 8, 1, 1, 2, 1, 7, 7, 1, 1, 7, 9, 5,
			7, 9, 4, 5, 9, 7,
		],
		poster:
			"MV5BMzcxNTEzNzI4M15BMl5BanBnXkFtZTcwMTc3MDUzNw@@._V1_SY500_CR0,0,321,500_AL_.jpg",
		contentRating: "",
		duration: "PT174M",
		releaseDate: "2012-01-26",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Agneepath is a story of revenge of Vijay Chauhan against an evil and sadistic Kaancha, who hangs Vijay's father to death. Vijay grows up with a single aim of avenging his father's death. The story revolves around Vijay Chauhan, his relationships with his family and above all, his Revenge.                Written by\nCodeReplugd",
		actors: ["Hrithik Roshan", "Priyanka Chopra", "Sanjay Dutt"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMzcxNTEzNzI4M15BMl5BanBnXkFtZTcwMTc3MDUzNw@@._V1_SY500_CR0,0,321,500_AL_.jpg",
	},
	{
		title: "Yeh Jawaani Hai Deewani",
		year: "2013",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			2, 6, 9, 4, 8, 1, 9, 1, 9, 9, 6, 4, 3, 7, 2, 9, 1, 4, 6, 8, 3, 3, 8, 4, 1,
			7, 8, 3, 4, 5,
		],
		poster:
			"MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT160M",
		releaseDate: "2013-05-31",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Yeh Jawaani Hai Deewani is the story of the relationship between two characters, Bunny (Ranbir Kapoor) & Naina (Deepika Padukone), at two separate but defining times in their lives... first, when they are just out of college and standing on the crossroads of multiple decisions that will shape who and what they become... and then later on, in their late-twenties when they meet again, holding on to certain fulfilled and certain unfulfilled dreams, at a crossroads of another nature this time... how these two characters affect, change, befriend and eventually fall in love with each other is the journey the film aspires to take us on..                Written by\nEros International",
		actors: ["Deepika Padukone", "Priyanka Bose", "Poorna Jagannathan"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Yes Boss",
		year: "1997",
		genres: ["Comedy", "Drama", "Musical"],
		ratings: [
			2, 1, 5, 2, 10, 10, 8, 9, 10, 8, 2, 10, 6, 6, 10, 3, 10, 2, 5, 6, 9, 10,
			4, 7, 8, 9, 4, 9, 6, 4,
		],
		poster:
			"MV5BMTg5MTk5ODExMl5BMl5BanBnXkFtZTcwNzE3ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT163M",
		releaseDate: "1997-07-18",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"There are lots of poor people in India who want to get rich soon. A woman named Seema is one of them. She is very beautiful and has an admirer by the name of Sidharth. This man is very rich, and wants to marry Seema. But Seema finds out that he is already married, so refuses to marry him. He assures her that he does not love his wife, and will divorce her, and then marry Seema. Then there is the story of another poor person, a man by the name of Rahul. Rahul is also an admirer of Seema. But Rahul works for Sidharth. Rahul knows that Sidharth is going to betray Seema and have an affair with someone else very soon. Rahul also knows that Seema wants to get rich very quickly. How will be convince her about Sidharth? Rahul is also afraid If Sidharth finds out he will fire Rahul, thus he will remain a poor man all his life.                Written by\nSumitra (corrected by Calista)",
		actors: ["Shah Rukh Khan", "Aditya Pancholi", "Juhi Chawla"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MTk5ODExMl5BMl5BanBnXkFtZTcwNzE3ODgzMQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Fukrey",
		year: "2013",
		genres: ["Comedy", "Drama", "Romance"],
		ratings: [
			6, 7, 10, 7, 4, 5, 1, 9, 2, 2, 3, 10, 6, 4, 2, 10, 2, 5, 1, 2, 8, 2, 2, 3,
			7, 9, 10, 5, 2, 1,
		],
		poster:
			"MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_SY390_CR0,0,292,390_AL_.jpg",
		contentRating: "",
		duration: "PT139M",
		releaseDate: "2013-06-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"College. Three of the most important years of your life. Three years of studies (at times) and sheer indulgence. Indulgence in all the little pleasures that a carefree life has to offer. But it isn't always about ragging, fuchacha parties, college fests, races, and churning out ways to whack some extra pocket money from your parents. It's sometimes hard, ugly, and complicated. More so, when you really need to get admission in the coolest college in town and you know you don't deserve it. And to top that, you get yourself involved in the most bizarre stations that could crack you into pieces before you could crack it.                Written by\nExcel Entertainment",
		actors: ["Pulkit Samrat", "Manjot Singh", "Ali Fazal"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_SY390_CR0,0,292,390_AL_.jpg",
	},
	{
		title: "Kaho Naa... Pyaar Hai",
		year: "2000",
		genres: ["Action", "Crime", "Romance"],
		ratings: [
			2, 4, 5, 6, 6, 6, 6, 10, 1, 9, 1, 3, 8, 10, 7, 6, 10, 4, 8, 1, 4, 9, 5, 9,
			1, 5, 8, 4, 10, 4,
		],
		poster:
			"MV5BYjE0NjQ1ODItYWEyMi00YmExLThmODgtYjAwNGExZmFmYTI4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,366,500_AL_.jpg",
		contentRating: "",
		duration: "PT172M",
		releaseDate: "2000-01-14",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"A poor singer, Rohit, and the daughter of a very rich man, Sonia, fall in love. While on a cruise ship, they get separated from the rest of their party and end up on a deserted island. They live happily here for a few days until they are rescued. Sonia's friends help Rohit to make a name for himself so that they can get married. But before he reaches this goal, he meets an untimely death. Sonia's father sends her to live with her cousins in New Zealand to get over her heartbreak. In New Zealand she meets Raj Chopra who looks exactly like Rohit.                Written by\nHala",
		actors: ["Hrithik Roshan", "Ameesha Patel", "Anupam Kher"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYjE0NjQ1ODItYWEyMi00YmExLThmODgtYjAwNGExZmFmYTI4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,366,500_AL_.jpg",
	},
	{
		title: "Aashiqui 2",
		year: "2013",
		genres: ["Drama", "Music", "Musical"],
		ratings: [
			5, 6, 2, 4, 1, 4, 3, 5, 3, 4, 10, 9, 9, 5, 2, 5, 7, 2, 3, 9, 10, 9, 5, 1,
			8, 4, 9, 1, 7, 5,
		],
		poster:
			"MV5BMjEzNzczNTg2M15BMl5BanBnXkFtZTcwMjUxNjk0OQ@@._V1_SY500_CR0,0,348,500_AL_.jpg",
		contentRating: "",
		duration: "PT132M",
		releaseDate: "2013-04-26",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Rahul is a singer, who loses his career due to his drinking habits. He meets Arohi in a bar in Goa, where she works to earn a living. Impressed by her singing, he promises her to take her to Mumbai and make her a star, where they fall in love with each other. Aashiqui 2 is a musical love story of these lovers who goes through love and hate, fame and failure in their lives. However will they stay together accepting their success, or will they breakup due to their ego?                Written by\nManisha Krishna",
		actors: ["Aditya Roy Kapoor", "Shraddha Kapoor", "Shaad Randhawa"],
		imdbRating: 7.0,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNzczNTg2M15BMl5BanBnXkFtZTcwMjUxNjk0OQ@@._V1_SY500_CR0,0,348,500_AL_.jpg",
	},
	{
		title: "Raees",
		year: "2017",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			10, 2, 1, 3, 8, 7, 8, 6, 10, 8, 5, 7, 8, 9, 1, 2, 6, 9, 10, 4, 4, 9, 4,
			10, 9, 1, 3, 2, 3, 9,
		],
		poster:
			"MV5BMTc2NTYwMTE1NV5BMl5BanBnXkFtZTgwODQ5MzAwMTI@._V1_SY500_CR0,0,380,500_AL_.jpg",
		contentRating: "",
		duration: "PT143M",
		releaseDate: "2017-01-25",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"The film is set in the early 80's and 90's in Gujarat. The fictitious story of a man who builds an empire in the state of Gujarat, the only state that still follows prohibition. It's a story about his rise and his relationships, which help him become the single most powerful man in the state.                Written by\nRedChillies",
		actors: ["Shah Rukh Khan", "Nawazuddin Siddiqui", "Mahira Khan"],
		imdbRating: 7.4,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2NTYwMTE1NV5BMl5BanBnXkFtZTgwODQ5MzAwMTI@._V1_SY500_CR0,0,380,500_AL_.jpg",
	},
	{
		title: "Hasee Toh Phasee",
		year: "2014",
		genres: ["Comedy", "Romance"],
		ratings: [
			5, 2, 10, 7, 5, 2, 10, 5, 7, 8, 2, 2, 7, 6, 4, 6, 9, 4, 4, 3, 8, 1, 7, 8,
			5, 6, 10, 1, 6, 6,
		],
		poster:
			"MV5BMTQ5NTUyMzE3Ml5BMl5BanBnXkFtZTgwOTI5MDEwMTE@._V1_SY500_CR0,0,345,500_AL_.jpg",
		contentRating: "",
		duration: "PT141M",
		releaseDate: "2014-02-07",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Spread across Mumbai over a decade, the film is about the relationship between the quirky, rebellious Meeta (Parineeti Chopra) and the mischievous Nikhil (Sidharth Malhotra) struggling with their respective families to fit in. Nikhil bumps into Meeta on the occasion of her sister Deeksha's wedding while Meeta is on the run. He falls in love with Meeta's sister Karishma on the same day. The film jumps to the eve of Nikhil and Karishma's engagement. Karishma's wealthy father, Devesh Solanki, does not approve of Nikhil as he finds him to be a lackadaisical young man. On the day of his engagement, Nikhil promises Karishma that he will prove himself to be worthy of her within the next seven days. Nikhil is re-introduced to Meeta by Karishma and is instructed to put her up in a hotel. Nikhil recognizes Meeta. In an attempt to please Karishma he decides to keep Meeta in the flat above his own house, with his crazy extended family. During the course of Meeta's stay at Nikhil's house, they ...                Written by\nReliance Entertainment",
		actors: ["Aariyan Gupta", "Adah Sharma", "Amita Udgata"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NTUyMzE3Ml5BMl5BanBnXkFtZTgwOTI5MDEwMTE@._V1_SY500_CR0,0,345,500_AL_.jpg",
	},
	{
		title: "Karan Arjun",
		year: "1995",
		genres: ["Action", "Comedy", "Fantasy"],
		ratings: [
			3, 6, 2, 7, 10, 2, 5, 10, 10, 6, 2, 8, 10, 6, 7, 8, 9, 3, 3, 8, 3, 2, 8,
			8, 3, 5, 4, 7, 1, 6,
		],
		poster:
			"MV5BMTUyNjU4NjQxN15BMl5BanBnXkFtZTcwODMyNDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
		contentRating: "",
		duration: "PT175M",
		releaseDate: "1995-01-13",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"When Durga's husband speaks out against the tyrannical rule of his brother, Durjan Singh, he is mercilessly killed, and Durga and her two children, Karan and Arjun, are left destitute. Durga brings up her sons without informing them of their heritage nor of the death of their father, but they soon find out when the elder Thakur decides to invite Durga back into his household. This does not auger well with Durjan Singh, and he has the elder Thakur killed. When he finds out about Durga, he goes to end her life, but her sons spring up to defend her, only to get themselves killed. Alone, destitute more than ever, and devastated, Durga loses her mind, and prays to God to bring her sons back so that they can avenge her humiliation, and the death of their father. Seventeen years later, two youth re-enter her life, they do look like her sons, and are ready to take on Durjan Singh, but will they also meet the same fate as Karan, Arjun, and their father?                Written by\nrAjOo (gunwanti@hotmail.com)",
		actors: ["Rakhee Gulzar", "Salman Khan", "Shah Rukh Khan"],
		imdbRating: 6.9,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjU4NjQxN15BMl5BanBnXkFtZTcwODMyNDE0MQ@@._V1_SY250_CR0,0,176,250_AL_.jpg",
	},
	{
		title: "Mujhse Shaadi Karogi",
		year: "2004",
		genres: ["Comedy", "Romance"],
		ratings: [
			8, 8, 7, 3, 8, 1, 2, 8, 3, 4, 4, 5, 2, 8, 10, 10, 3, 9, 1, 10, 3, 4, 9, 9,
			10, 7, 4, 8, 3, 4,
		],
		poster:
			"MV5BYTg3N2YyZDAtY2QyNy00MDYzLTliYzctZTVkZTE2NzY0NDU4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,347,500_AL_.jpg",
		contentRating: "",
		duration: "PT163M",
		releaseDate: "2004-07-30",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"Sunny rents a room in a City called Goa in India. His room-mate is Sameer, who likes to fool around with woman, then dump them. He eventually falls in love, then gets dumped. Sorrowful and repentant, Sameer also has had many misadventures, especially when he ended up slapping an elderly man. Now Sameer has fallen for his next door neighbor, Rani. Now Sameer has two problems to overcome in order to wed Rani. The first he has to eliminate his competitor, none other than Sunny himself, who is also in love with Rani, and will do anything to marry her; and the second is Rani's father, ironically the very man who Sameer had slapped earlier. Will Sunny end up getting married to Rani, leaving Sameer to repent for the rest of his life?                Written by\nSumitra (corrected by Calista)",
		actors: ["Salman Khan", "Akshay Kumar", "Priyanka Chopra"],
		imdbRating: 6.8,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BYTg3N2YyZDAtY2QyNy00MDYzLTliYzctZTVkZTE2NzY0NDU4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_CR0,0,347,500_AL_.jpg",
	},
	{
		title: "Sarkar Raj",
		year: "2008",
		genres: ["Action", "Crime", "Drama"],
		ratings: [
			9, 4, 10, 2, 5, 5, 9, 5, 5, 7, 9, 4, 5, 1, 8, 2, 7, 9, 8, 4, 6, 3, 2, 2,
			7, 6, 10, 8, 2, 1,
		],
		poster:
			"MV5BMTUzODIyMTk4MV5BMl5BanBnXkFtZTcwMDM5NTk5Mw@@._V1_SY250_SX173_AL_.jpg",
		contentRating: "",
		duration: "PT125M",
		releaseDate: "2008-06-06",
		averageRating: 0,
		originalTitle: "",
		storyline:
			"When Anita Rajan, CEO of Sheppard power plant, an international Company, brings a power plant proposal to set up in rural Maharashtra before the Nagres, insightful Shankar is quick to realize the benefits the power plant can bring to the people. After convincing Sarkar who is against it for various reasons, Shankar undertakes a journey along with Anita to the villages of Maharashtra to mobilize support from the masses. However, things are not what they seem to be and Shankar's dream project gradually becomes a political minefield. It is in this backdrop the evil forces mightier than ever, mushroom and gang up to bring down the regime of Sarkar and obliterate Shankar's name from the political horizon.                Written by\ngavin (gunmasterM@hotmail.com)",
		actors: ["Amitabh Bachchan", "Abhishek Bachchan", "Aishwarya Rai Bachchan"],
		imdbRating: 6.8,
		posterurl:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzODIyMTk4MV5BMl5BanBnXkFtZTcwMDM5NTk5Mw@@._V1_SY250_SX173_AL_.jpg",
	},
]
console.log(movies.length)
/* i need to take div, title(h2),year(p),posterURL(img)*/
function displayData ()
{
	movies.forEach(function (m)
	{
	const movieDiv = document.createElement("div") //<div>
	movieDiv.classList.add("movie") //<div class="movie">
		const title = document.createElement("h2")
		title.textContent = m.title;
		const year = document.createElement("p")
		year.textContent= m.year
		const image = document.createElement("img")
		image.src = `./img/${m.poster}`;
		image.alt= m.title
	movieDiv.append(image, title, year)
	mainDiv.appendChild(movieDiv)	
	})
}
displayData()



