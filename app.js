const dogsObject = {
	chiko: {
		name: "chiko",
		age: "2 ans",
		weight: "16kg",
		loveFriends: true,
		loveCats: true,
		appartement: false,
		description:
			"Chiko est un adorable petit chien. Il a été retrouvé attaché à un poteau et amaigri. Aujourd'hui Chiko va mieux, il est en bonne santé et s'amuse beaucoup. Il apprécie la présence de ses congénères et, jusqu'à ce jour, n'a pas montré d'inquiétudes particulières vis à vis d'autres animaux ",
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
			"Stella est une adorable chienne au passé douloureux. Elle a été délaissée à contrecoeur à l'association suite au décès de son maître et ami. En bonne santé, elle est toutefois atteinte de la leishmaniose et nécessite donc une attention particulière et un traitement à vie",
		profil: "Si Stella adore les humains, elle n'en est pas moins une caractérielle qui se laisse difficillement approchée par ses congénères ou d'autres animaux. De part sa petite taille, Stelle s'adaptera à une vie en appartement",
		dogImg: "/images/animal.png",
	},
	andre: {
		name: "andre",
		age: "5 ans",
		weight: "24kg",
		loveFriends: true,
		loveCats: false,
		appartement: true,
		description:
			"Andre est un Shiba d'âge moyenne. Il a été secouru de son précédent foyer où il était maltraité par ses anciens propriétaires. Il apprécie sa vie en famille d'acceuil mais garde toutefois des réservers vis-à-vis des humains. Il faudra du temps, de la patience et la compassion pour qu'il se livre à nouveau.  ",
		profil: "Andre est un chien au passé lourd qui préférera une famille d'expérience. Adepte de siestes et de canapé, une vie en appartement lui conviendra tout à fait.",
		dogImg: "/images/animal.png",
	},
	dwight: {
		name: "dwight",
		age: "2 ans",
		weight: "20kg",
		loveFriends: false,
		loveCats: false,
		appartement: false,
		description:
			"Dwight est un jeune Golden Retriever qui a été secouru par un bénévole. Il a été retrouvé errant dans la rue, sans collier ni puce.",
		profil: "Dwight est un chien au passé certainement compliqué qui ne se laisse que très peu approché. Comme tous, il aura besoin de beaucoup de temps et d'amour pour retrouver de la confiance",
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
		const newUrl = "dogs.html";

		location.href = newUrl;
	}
});
