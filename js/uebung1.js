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
/*  Funktion : Stellt die Funktionen für die Uebung1.html bereit.            */
/*                                                                           */
/*  Datum    : 17.09.2018                                                    */
/*                                                                           */
/*****************************************************************************/


//Eventhandler für Submit-Button des Formulars hinzufügen, kein Neuladen der Seite bei Buttonklick
document.getElementById("lueckentext1").addEventListener("submit", function(event){
	event.preventDefault()
});

//Funktion nimmt den Wert aus dem Label-Element mit der entsprechenden ID und Stringcompare mit dem Erwartungswert
//Bei Fehler zeige entsprechende Meldung und setze PNG-Bild: Falsch
//Ansonsten setze das right-Häkchen und zeige keine Meldung an
function onSubmit(){
	var korrekt = 0;
	if (document.getElementById("eins").value.localeCompare("warmen") != 0) {
		korrekt++;
		eins.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("einsimg").src = "img/wrong.png"; 
	}else{
		document.getElementById("einsimg").src = "img/right.png"; 
		eins.setCustomValidity('');
	}
	if (document.getElementById("zwei").value.localeCompare("Mahlzeiten") != 0) {
		korrekt++;
		zwei.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("zweiimg").src = "img/wrong.png"; 
	}else{
		zwei.setCustomValidity('');
		document.getElementById("zweiimg").src = "img/right.png"; 
	}
	if (document.getElementById("drei").value.localeCompare("gemischten") != 0) {
		korrekt++;
		drei.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("dreiimg").src = "img/wrong.png"; 
	}else{
		drei.setCustomValidity('');
		document.getElementById("dreiimg").src = "img/right.png"; 
	}
	if (document.getElementById("vier").value.localeCompare("Salat") != 0) {
		korrekt++;
		vier.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("vierimg").src = "img/wrong.png"; 
	}else{
		vier.setCustomValidity('');
		document.getElementById("vierimg").src = "img/right.png"; 
	}
	if (document.getElementById("fuenf").value.localeCompare("gegrillten") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("fuenfimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("fuenfimg").src = "img/right.png"; 
	}
	if (document.getElementById("sechs").value.localeCompare("Fisch") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("sechsimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("sechsimg").src = "img/right.png"; 
	}
	if (document.getElementById("sieben").value.localeCompare("heiße") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("siebenimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("siebenimg").src = "img/right.png"; 
	}
	if (document.getElementById("acht").value.localeCompare("Suppe") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("achtimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("achtimg").src = "img/right.png"; 
	}
	if (document.getElementById("neun").value.localeCompare("selbstgebackenen") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("neunimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("neunimg").src = "img/right.png"; 
	}
	if (document.getElementById("zehn").value.localeCompare("Kuchen") != 0) {
		korrekt++;
		fuenf.setCustomValidity('Das ist leider nicht richtig.');
		document.getElementById("zehnimg").src = "img/wrong.png"; 
	}else{
		fuenf.setCustomValidity('');
		document.getElementById("zehnimg").src = "img/right.png"; 
	}
	
	//Wenn alle Lücken korrekt eingegeben sind, gebe Meldung in Label ausgabe-->
	//Ansonsten zeige die Anzahl der Fehler an-->
	if(korrekt == 0){
		document.querySelector("output").textContent ="Sie haben die Prüfung ohne Fehler bestanden";  
		
	}	
	else if(korrekt > 0){
		document.querySelector("output").textContent = "Sie haben " + korrekt + " Fehler"; 
	}	
	return false;
	
}

//Bei Veränderung der Lücken, setze PNG-Bild auf Weiß
function check1(input){
	eins.setCustomValidity('');
	document.getElementById("einsimg").src = "img/no.png"; 
}
function check2(input){
	zwei.setCustomValidity('');
	document.getElementById("zweiimg").src = "img/no.png"; 
}
function check3(input){
	drei.setCustomValidity('');
	document.getElementById("dreiimg").src = "img/no.png"; 
}
function check4(input){
	vier.setCustomValidity('');
	document.getElementById("vierimg").src = "img/no.png"; 
}
function check5(input){
	fuenf.setCustomValidity('');
	document.getElementById("fuenfimg").src = "img/no.png"; 
}
function check6(input){
	sechs.setCustomValidity('');
	document.getElementById("sechsimg").src = "img/no.png"; 
}
function check7(input){
	sieben.setCustomValidity('');
	document.getElementById("siebenimg").src = "img/no.png"; 
}
function check8(input){
	acht.setCustomValidity('');
	document.getElementById("achtimg").src = "img/no.png"; 
}
function check9(input){
	neun.setCustomValidity('');
	document.getElementById("neunimg").src = "img/no.png"; 
}
function check10(input){
	zehn.setCustomValidity('');
	document.getElementById("zehnimg").src = "img/no.png"; 
}	