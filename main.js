// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let figure = document.querySelector('#panacek');

// let x = 500;
// let y = 700;

// function move() {
// 	if {

// 	}
// }

// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let figurine, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, mineX, minceY, minceSirka, minceVyska;
let score, numberCoins;
let soundCoin, soundWin;

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function init() {

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector
	figurine = document.querySelector('#panacek');
	coin = document.querySelector('#mince');
	score = document.querySelector('#score');
	soundCoin = document.querySelector('#zvukmince');
	soundWin = document.querySelector('#zvukfanfara');

	console.log("init");
	console.log(panacekX);

	numberCoins = 0;

	// zjistíme šířku a výšku panáčka
	panacekSirka = figurine.width; 
	panacekVyska = figure.height;

	// a umístíme panáčka do středu okna


	// umístíme panáčka na startovní pozici
	placeFigurine();

	// zjistíme šířku a výšku mince


	// a vygenerujeme první minci na náhodné pozici
	newCoin();

}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function placeFigurine() {
	// musíme to napsat :)
}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function newCoin() {
	// musíme to napsat :)
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function priStiskuKlavesy(udalost) {

	// šipka vlevo


	// šipka vpravo


	// šipka nahoru


	// šipka dolů


	// panáčka umistíme na nově vypočítanou pozici


	// otestujeme kolizi panáčka s mincí


}

// fuknce pro otestování kolize panáčka s mincí
function otestujKolizi() {
	// musíme to napsat :)
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) 
		// panacek a mince se prekryvaji
}
