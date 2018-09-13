/*****************************************************************************/
/*                                                                           */
/*  Autor    : Janine Altzschner                                             */
/*                                                                           */
/*  Projekt  : Bachelorarbeit mit dem Thema:                                 */
/*             Kollokationen im Spracherwerb. Entwicklung einer              */
/*             browser-basierten Übung mit individueller Rückmeldung.        */
/*                                                                           */
/*             Humboldt-Universität zu Berlin                                */
/*             Sprach- und literaturwissenschaftliche Fakultät               */
/*             Institut für deutsche Sprache und Linguistik                  */
/*                                                                           */
/*  Funktion : Stellt die Funktionen für die Uebung2.html bereit.            */
/*                                                                           */
/*  Datum    : 17.09.2018                                                    */
/*                                                                           */
/*****************************************************************************/

var stat = 0;
var luecke = new Array(11);


document.addEventListener('dragstart', function (event) {
	event.dataTransfer.setData('Text', event.target.id);
});

document.addEventListener('drag', function (event) {
	event.preventDefault();
});
document.addEventListener('dragenter', function (event) {
	event.preventDefault();
});
document.addEventListener('dragover', function (event) {
	event.preventDefault();
});
document.addEventListener('dragleave', function (event) {
	event.preventDefault();

});

//Erzeuge Event-Listener für Drop-Aktion
document.addEventListener('drop', function (event) {
	event.preventDefault();	
	
	// Prüfe bei Zurückbringen der Elemente, ob diese in das DIV Substantive oder Adjektive gehört
	if (event.target.className == 'boxen') {
		var data = event.dataTransfer.getData('Text');
		if (strcmp(event.target.id,'adjektive') == 0 && (strcmp(data,'dragtarget1') == 0 || strcmp(data,'dragtarget3') == 0 || 
		strcmp(data,'dragtarget5') == 0 || strcmp(data,'dragtarget7') == 0 || strcmp(data,'dragtarget9') == 0 )){
			event.target.appendChild(document.getElementById(data));
		}
		if (strcmp(event.target.id,'substantive') == 0 && (strcmp(data,'dragtarget2') == 0 || 
		strcmp(data,'dragtarget4') == 0 || strcmp(data,'dragtarget6') == 0 || 
		strcmp(data,'dragtarget8') == 0 || strcmp(data,'dragtarget10') == 0 )){
			event.target.appendChild(document.getElementById(data));
		}
	}
	
	var i;
	//Gehe alle Zehn Lücken durch
	for (i = 1; i < 11; i++) {
		var klasse = 'dropziel' + i.toString();
		var klassid = 'dragtarget' + i.toString();
		if (event.target.className == klasse) {
			var data = event.dataTransfer.getData('text');
			//Wenn Lücke leer ist, schreibe gezogenes Element hinein
			if(strcmp(document.getElementsByClassName(klasse)[0].innerHTML, '&nbsp;') == 0){
				event.target.appendChild(document.getElementById(data));
			}
		}
		//Überprüfe Lücke, ob zugehöriges Element dem Richtigen entspricht und setze Wert für Auswertung
		if(document.getElementsByClassName(klasse)[0].innerHTML.includes(klassid)){
			luecke[i] = 1;
		}else{
			luecke[i] = -1;
		}
		if(strcmp(document.getElementsByClassName(klasse)[0].innerHTML, '&nbsp;') == 0){
			luecke[i] = 0;
		}
	} 
	checkinput();
	
});

function checkinput(){
	var zaehlfalsch = 0;
	var zaehleingaben = 0;
	var i;
	
	//Ermittle Anzahl der falschen und komplett gemachten Eingaben
	for (i = 1; i < 11; i++) {
		if(luecke[i] == -1){
			zaehlfalsch++;
		}
		if(luecke[i] != 0){
			zaehleingaben++;
		}
	}
	
	//Prüfe ob schon 5 Eingaben gemacht wurden und davon mindestens 3 falsch sind
	if((zaehleingaben > 4 && zaehlfalsch > 2) || zaehleingaben == 10){
		stat=1;
	}
	
	if(stat==1){
		displayresult();
	}
}

function displayresult(){
	for (i = 1; i < 11; i++) {
		var klasse = 'dropziel' + i.toString();
		var klassid = 'rueckmeld' + i.toString();
		
		//Setze Richtig- und Falschhäkchen
		if(luecke[i]==0){
			document.getElementById(klassid).src = "img/no.png";
		}
		if(luecke[i]==1){
			document.getElementById(klassid).src = "img/right.png";
		}
		if(luecke[i]==-1){
			document.getElementById(klassid).src = "img/wrong.png";
		}
		
		//Markiere Adjektive und Substantive
		if(i%2==0){
			document.getElementsByClassName(klasse)[0].style.backgroundColor = "lightyellow";
		}else{
			document.getElementsByClassName(klasse)[0].style.backgroundColor = "lightblue";
		}
	}
}

function strcmp(a, b){
    return (a<b?-1:(a>b?1:0));  
}
