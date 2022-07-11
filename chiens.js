const home = " ";

const appartement =
	"Il conviendra à qui saura l'aimer et le choyer à condition que vous possédiez une maison. Chiko aime courir et ne supprotera pas la vie en appartement";
const maison = "Une vie en appartement et nécessaire";
const noCats = "Un foyer sans  chat est nécessaire";
const cats = "Un foyer avec les chats ne pose pas de problème";
const noOtherDogs = "Un foyer avec d'autres chiens serait un plus";
const otherDogs = "Un foyer sans autre chien est nécessaire";

const showDog = () => {
	const currentDog = localStorage.getItem("currentDog");
	const parseStorage = JSON.parse(currentDog);

	createDom(currentDog, parseStorage);
};

const createDom = (p, data) => {
	if (p && data) {
		$(".chiens-description").append(` 
        <div class="card">
            <img class="card-img-top" src="${data.dogImg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.description}</p>
                <p class="card-text">${data.profil}</p>
            </div>
        <div class="card-footer">
          <small class="text-muted">${data.appartement ? appartement : maison}</small>
          <small class="text-muted">${data.loveCates ? noCats : cats}</small>
          <small class="text-muted">${data.loveFriends ? otherDogs : noOtherDogs}</small>
        </div>
      </div>`);
	} else {
		$(".chiens-description").append(
			"<div>Comment êtes vous arrivés ici ? Vous n'avez pas choisi de chien :/ </div>"
		);
		setTimeout(() => {
			alert("Vous n'avez pas choisi de chiens à regarder. Vous allez être redirigié à l'acceuil");
			window.location.replace("/");
		});
	}
};

showDog();
