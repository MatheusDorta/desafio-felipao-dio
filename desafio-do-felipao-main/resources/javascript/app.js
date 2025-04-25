let heroName = "";
let heroXP = 0;
let heroLevel = "";
let heroCR = 0;


function heroLevelCalc(xp) {
  switch(true) {
    case xp <= 1000:
      heroLevel= "ferro";
      break;
      
    case xp <= 2000:
      heroLevel= "bronze";
      break;
      
    case xp <= 5000:
      heroLevel= "prata";
      break;
      
    case xp <= 7000:
      heroLevel= "ouro";
      break;

    case xp <= 8000:
      heroLevel= "platina";
      break;

    case xp <= 9000:
      heroLevel= "ascendente";
      break;

    case xp <= 10000:
      heroLevel= "imortal";
      break;

    default:
      heroLevel= "radiante";
      break;
  }
}


function heroDedCR(xp) {
	switch(true){
		case xp < 300:
			heroCR = 100; //nivel 1
			break;

		case xp < 900:
			heroCR = 200; //nivel 2
			break;

		case xp < 2700:
			heroCR = 400; //nivel 3
			break;

		case xp < 6500:
			heroCR = 500; //nivel 4
			break;

		case xp < 14000:
			heroCR = 1100; //nivel 5
			break;

		case xp < 23000:
			heroCR = 1400; //nivel 6
			break;

		case xp < 34000:
			heroCR = 1700; //nivel 7
			break;

		case xp < 48000:
			heroCR = 2100; //nivel 8
			break;

		case xp < 64000:
			heroCR = 2400; //nivel 9
			break;

		case xp < 85000:
			heroCR = 2800; //nivel 10
			break;

		case xp < 100000:
			heroCR = 3600; //nivel 11
			break;

		case xp < 120000:
			heroCR = 4500; //nivel 12
			break;

		case xp < 140000:
			heroCR = 5100; //nivel 13
			break;

		case xp < 165000:
			heroCR = 5700; //nivel 14
			break;

		case xp < 195000:
			heroCR = 6500; //nivel 15
			break;

		case xp < 225000:
			heroCR = 7200; //nivel 16
			break;

		case xp < 265000:
			heroCR = 8800; //nivel 17
			break;

		case xp < 305000:
			heroCR = 9500; //nivel 18
			break;

		case xp < 355000:
			heroCR = 10900; //nivel 19
			break;

		default:
			heroCR = 12700; //nivel 20
			break;
	}
}

function determineNivel() {
	heroXP = document.getElementById('heroxp').value;
	heroName = document.getElementById('heroname').value;

	if (isNaN(heroXP)) {
		return;
	}

	if (heroName){
		//check if hero has a name
	} else {
		return;
	}

	if (heroXP == 0) {
		return;
	}

	heroLevelCalc(heroXP);

	heroDedCR(heroXP);

	let result = document.getElementById("result");
	let battle = document.getElementById("battle");

	result.textContent = "O herói " + heroName + " está no nível " + heroLevel + ".";

	battle.textContent = `Com esse nível, o herói e mais ${
	Math.ceil((18000 / heroCR) - 1)
	} guerreiros conseguirão derrotar o dragão!`;

	document.getElementById("return-content").style.display = "flex";
	document.getElementById("userdata").style.display = "none";
}
