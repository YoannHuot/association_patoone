const getClass = (param) => {
	return document.getElementsByClassName(param);
};

const getId = (param) => {
	return document.getElementById(param);
};

const getAttribute = (param) => {
	return Element.getAttribute(param);
};

let Humain = new Object({
	nom: "Doe",
	prénom: " Jogn",
});

let personne2 = Object.create(Humain);
