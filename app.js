const dogsObject = {
	chiko: {
		name: "chiko",
		age: "2 ans",
		weight: "12kg",
		loveFriends: true,
		loveCats: true,
		appartement: false,
		description:
			"Chiko est un adorable petit chien. Il a été retrouvé attaché à un poteau et amaigrai. Aujourd'hui Chiko va mieux, il est en bonne santé et s'amuse beaucoup. Il apprécie la présence de ses congénères et, jusqu'à ce jour, n'a pas montré d'inquiétudes particulières vis à vis d'autres animaux ",
		profil: "Chiko s'avère être un chien facile sans séquelle psychologique ou physique majeur.",
		dogImg: "/images/neutralBoy.jpg",
	},
	stella: {
		name: "stella",
		age: "8 ans",
		weight: "6kg",
		loveFriends: false,
		loveCats: false,
		appartement: true,
		description:
			"Stella est une adorable chienne au passé douloureux. Elle a été délaissée à contre coeur à l'association suite au décès de son maître et ami. En bonne santé, elle est toutefois atteinte de la leishmaniose et nécessite donc une attention particulière et un traitement à vie",
		profil: "Si Stella adore les humains, elle n'en est pas moins une caractérielle qui se laisse difficillement approchée par ses congénères ou d'autres animaux. . De part sa petite taille, Stelle s'adaptera à une vie en appartement",
		dogImg: "/images/animal.png",
	},
	andre: {
		name: "andre",
		age: "11 ans",
		weight: "24kg",
		loveFriends: true,
		loveCats: true,
		appartement: false,
		description:
			"Andre est un adorable petit chien. Il a été retrouvé attaché à un poteau et amaigrai. Aujourd'hui Chiko va mieux, il est en bonne santé et s'amuse beaucoup. Il apprécie la présence de ses congénères et, jusqu'à ce jour, n'a pas montré d'inquiétudes particulières vis à vis d'autres animaux ",
		profil: "Andre s'avère être un chien facile sans séquelle psychologique ou physique majeur. Il conviendra à qui saura l'aimer et le choyer à condition que vous possédiez une maison. Chiko aime courir et ne supprotera pas la vie en appartement",
		dogImg: "/images/animal.png",
	},
	dwight: {
		name: "dwight",
		age: "1 an",
		weight: "20kg",
		loveFriends: true,
		loveCats: true,
		appartement: false,
		description:
			"Dwight est un adorable petit chien. Il a été retrouvé attaché à un poteau et amaigrai. Aujourd'hui Chiko va mieux, il est en bonne santé et s'amuse beaucoup. Il apprécie la présence de ses congénères et, jusqu'à ce jour, n'a pas montré d'inquiétudes particulières vis à vis d'autres animaux ",
		profil: "Dwight s'avère être un chien facile sans séquelle psychologique ou physique majeur. Il conviendra à qui saura l'aimer et le choyer à condition que vous possédiez une maison. Chiko aime courir et ne supprotera pas la vie en appartement",
		dogImg: "/images/animal.png",
	},
};

localStorage.clear();

$(".dog").click((e) => {
	const target = e.currentTarget.className.split(" ")[1];

	for (const [key, value] of Object.entries(dogsObject)) {
		if (target === key) {
			const values = JSON.stringify(value);
			localStorage.setItem("currentDog", values);
		}
	}

	if (localStorage.getItem("currentDog")) {
		window.location.replace("./chiens.html");
	}
});
