// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program



// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let figurine, figurineX, figurineY, figurineWidth, figurineHeight;
let coin, coinX, coinY, coinWidth, coinHeight;
let score, numberCoins;
let soundCoin, soundWin;

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function init() {

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector
	figurine = document.getElementById('panacek');
	coin = document.getElementById('mince');
	score = document.getElementById('score');
	soundCoin = document.getElementById('zvukmince');
	soundWin = document.getElementById('zvukfanfara');

	console.log("init");
	console.log(figurineX);

	numberCoins = 0;

	// zjistíme šířku a výšku panáčka
	figurineWidth = figurine.width; 
	figurineHeight = figurine.height;

	// a umístíme panáčka do středu okna
	figurineX = Math.round(window.innerWidth / 2 - figurineWidth / 2);
	figurineY = Math.round(window.innerHeight / 2 - figurineHeight / 2);

	// umístíme panáčka na startovní pozici
	placeFigurine();

	// zjistíme šířku a výšku mince
	coinWidth = coin.width;
	coinHeight = coin.height;

	// a vygenerujeme první minci na náhodné pozici
	newCoin();

}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function placeFigurine() {
	// musíme to napsat :)
	figurine.style.left = figurineX + "px";
	figurine.style.top = figurineY + "px";
	console.log("place figurine");
}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function newCoin() {
	// musíme to napsat :)
	coinX = Math.round(Math.random() * (window.innerWidth - coinWidth));
	coinY = Math.round(Math.random() * (window.innerHeight - coinHeight));
	coin.style.left = coinX + 'px';
	coin.style.top = coinY + 'px';
	console.log("place coin");
	
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function onKey(event) {
	console.log(event);
	// šipka vlevo
if (event.key === "ArrowLeft") {
	figurineX -= 10;
	console.log("to left")
	if (figurineX < 0) {
		figurineX = 0;
	}
	figurine.src = 'obrazky/panacek-vlevo.png';
}

	// šipka vpravo
	if (event.key === "ArrowRight") {
		figurineX += 10;
		if (figurineX + figurineWidth > window.innerWidth) {
			figurineX = window.innerWidth - figurineWidth;
		}
		figurine.src = 'obrazky/panacek-vpravo.png';
	}

	// šipka nahoru
	if (event.key === "ArrowUp") {
		figurineY -= 10;
		if (figurineY < 0) {
			figurineY = 0;
		}
		figurine.src = 'obrazky/panacek-nahoru.png';
	}


	// šipka dolů
	if (event.key === "ArrowDown") {
		figurineY += 10;
		if (figurineY + figurineHeight > window.innerHeight) {
			figurineY = window.innerHeight - figurineHeight;
		}
		figurine.src = 'obrazky/panacek.png';
	}

	// panáčka umistíme na nově vypočítanou pozici
	placeFigurine();

	// otestujeme kolizi panáčka s mincí
	meeting();

}

// fuknce pro otestování kolize panáčka s mincí
function meeting() {
	// otestujeme, zda nedošlo ke kolizi s mincí
	// toto je nejjednodušší a nejrychlejší test
	// na průnik dvou obdélníků
	if (!(figurineX + figurineWidth < coinX || coinX + coinWidth < figurineX || figurineY + figurineHeight < coinY || coinY + coinHeight < figurineY)) {
		// obdélníky se překrývají, mimozemšťan našel minci

		// přehrajeme zvuk sebrání mince
		soundCoin.play();

		// zvýšíme skóre
		higherScore();

		// posuneme minci na novou náhodnou pozici
		newCoin();
	}
}


// funkce pro zvýšení skóre
function higherScore() {

	// zvýšíme skóre o 1
	numberCoins++;

	// vypíšeme skóre do textu na obrazovce
	score.innerText = numberCoins;

	// otestujeme, zda už hráč nemá 5 bodů
	if (numberCoins === 5) {
		// přehrajeme fanfáru
		soundWin.play();

		// zobrazíme vítěznou hlášku
		alert('Vyhrála jsi tuhle super hru!');
	}
}