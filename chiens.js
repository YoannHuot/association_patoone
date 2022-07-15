const maison = "Une maison est nécessaire et sera un pré-requis obligatoire ";
const appartement = "Une vie en appartement est envisageable";
const noCats = "Un foyer sans chat est nécessaire";
const cats = "Un foyer avec des chats ne pose pas de problème";
const noOtherDogs = "Un foyer sans autre chien sera un pré-requis obligatoire";
const otherDogs = "Un foyer avec d'autres chiens serait un plus";

const showDog = () => {
	const currentDog = localStorage.getItem("currentDog");
	const parseStorage = JSON.parse(currentDog);

	createDom(currentDog, parseStorage);
};

const createDom = (p, data) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	const name = capitalizeFirstLetter(data.name);

	if (p && data) {
		const path = `images/${data.name}/${data.name}`;
		console.log(path);

		$(".chiens-description").append(` 
        <h2 class="text-capitalize px-4 pt-4">${name}</h5>
        <div >
            <div class="row ">
			<div class="dogs__description col-lg-4 col-md-12 mb-4 mb-lg-0 ">
				<img
                src=${`${path}1.jpg`}
					class="w-100 img-fluid pictures__chiens  rounded mb-4"
					alt="Boat on Calm Water"
				
				/>

				<img
                src=${`${path}2.jpg`}
					class="w-100 img-fluid pictures__chiens  rounded mb-4"
					alt="Wintry Mountain Landscape"
				
				/>
			</div>

			<div class="column__chiens col-lg-4 mb-4 mb-lg-0 ">
				<img
                src=${`${path}3.jpg`}
					class="w-100 img-fluid pictures__chiens  rounded mb-4"
					alt="Mountains in the Clouds"
				
				/>

				<img
                src=${`${path}4.jpg`}
					class="w-100 img-fluid pictures__chiens rounded mb-4"
					alt="Boat on Calm Water"
				
				/>
			</div>

			<div class="col-lg-4 mb-4 mb-lg-0 ">
				<img
                src=${`${path}5.jpg`}
					class="w-100 img-fluid  rounded mb-4 pictures__chiens"
				 alt="Waves at Sea"
				
				/>

				<img
                src=${`${path}6.jpg`}
					class="w-100 img-fluid pictures__chiens  rounded mb-4"
					alt="Yosemite National Park"
				
				/>
			</div>
		</div>
        <div class="px-4">
			<h3 class="pt-4">Un peu plus sur ${name}</h3>
			<p >${data.description}</p>
			<h3 class="pt-4">Qui pour ${name} ?</h3>
			<p >${data.profil}</p>
        </div>
        
        <div class="row w-100 bg-primary mt-4">
            <div class="infos col-sm px-4 mt-4 pt-4 d-flex align-items-center flex-column" style="height:250px">
                <p class="text-center" style="height:100px">${data.appartement ? appartement : maison}</p>
				<img src = "${
					data.appartement ? "images/pictos/apartment.png" : "images/pictos/house.png"
				}" alt="appartement permission" class="picto__chiens w-25 "/>
            </div>
        <div class="infos col-sm px-4 mt-4 pt-4 d-flex align-items-center flex-column" style="height:250px">
            <p class="text-center" style="height:100px">${data.loveCats ? cats : noCats}</p>
			<img src = "${
				data.loveCats ? "images/pictos/cat.png" : "images/pictos/no-cats.png"
			}" alt="cats permission" class="picto__chiens w-25"/>
        </div>
			<div class="infos col-sm px-4 mt-4 pt-4 d-flex align-items-center flex-column" style="height:250px">
			<p class="text-center" style="height:100px">${data.loveFriends ? otherDogs : noOtherDogs}</p>
			<img src = "${
				data.loveFriends ? "images/pictos/dogs-allowed.png" : "images/pictos/no-dogs.png"
			}" alt="cats permission" class="picto__chiens w-25"/>
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
