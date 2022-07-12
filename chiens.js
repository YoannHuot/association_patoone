const home = " ";

const maison =
	"Il conviendra à qui saura l'aimer et le choyer à condition que vous possédiez une maison. Chiko aime courir et ne supprotera pas la vie en appartement";
const appartement = "Une vie en appartement est envisageable";
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
	console.log(p);
	console.log(data);

	if (p && data) {
		const path = `images/${data.name}/${data.name}`;
		$(".chiens-description").append(` 
        <h2 class="text-capitalize px-4 pt-4">${data.name}</h5>
        <div class="px-4">
            <div class="row">
			<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
				<img
                src=${`${path}1.jpg`}
					class="w-100 img-fluid  rounded mb-4"
					alt="Boat on Calm Water"
				/>

				<img
                src=${`${path}2.jpg`}
					class="w-100 img-fluid  rounded mb-4"
					alt="Wintry Mountain Landscape"
				/>
			</div>

			<div class="col-lg-4 mb-4 mb-lg-0">
				<img
                src=${`${path}3.jpg`}
					class="w-100 img-fluid  rounded mb-4"
					alt="Mountains in the Clouds"
				/>

				<img
                src=${`${path}4.jpg`}
					class="w-100 img-fluid rounded mb-4"
					alt="Boat on Calm Water"
				/>
			</div>

			<div class="col-lg-4 mb-4 mb-lg-0">
				<img
                src=${`${path}5.jpg`}
					class="w-100 img-fluid  rounded mb-4"
					alt="Waves at Sea"
				/>

				<img
                src=${`${path}6.jpg`}
					class="w-100 img-fluid  rounded mb-4"
					alt="Yosemite National Park"
				/>
			</div>
		</div>
            <div class="card-body">
                <p class="card-text">${data.description}</p>
                <p class="card-text">${data.profil}</p>
        </div>
        
        <div class="row">
            <div class="col-sm px-4 mt-4 pt-4 font-weight-bold bg-success" style="height:200px">
                ${data.appartement ? appartement : maison}
            </div>
        <div class="col-sm px-4 mt-4 pt-4" style="height:200px">
            ${data.loveCates ? noCats : cats}
        </div>
        <div class="col-sm px-4 mt-4 pt-4" style="height:200px">
            ${data.loveFriends ? otherDogs : noOtherDogs}
        </div>
</div>`);
	} else if (p === null || data === null) {
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
