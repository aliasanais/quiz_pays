// Jeu des Pays
window.onload=function(){

	// Ecriture du titre
	document.getElementById("titre").innerHTML = '<p>Jeu des pays-stan</p>';

	// Tableau des pays
	tableauPays = new Array();
	tableauPays[1] = 'Afghanistan';
	tableauPays[2] = 'Azerbaïdjan';
	tableauPays[3] = 'Kirghizistan';
	tableauPays[4] = 'Pakistan';
	tableauPays[5] = 'Tadjikistan';
	tableauPays[6] = 'Turkménistan';
	tableauPays[7] = 'Ouzbékistan';

	//boucle sur les listes pour les créer dynamiquement
	for(var i=1; i<=7; i++){
		// Création du span et de la première option du select
		var liste = '<span id="numero'+i+'">'+i+'</span>';
		liste += '<select name="liste'+i+'"><option value="">Choisir...</option>';
		
		//boucle sur les options de la liste
		for(var j=1; j<=7; j++){
			liste += '<option value="'+tableauPays[j]+'">'+tableauPays[j]+'</option>';
		}

		liste += '</select><br>'
		// ajout de la liste au document
		document.getElementById("listes").innerHTML += liste;
	}
}

// fonction valider
function fonctionValider(){
	//boucle sur les listes
	for(var i=1; i<=7; i++){
		// récupération de l'index, puis de la valeur choisie
		var indexChoisi = document.forms["listes"].elements["liste"+i].selectedIndex;
		var paysChoisi = document.forms["listes"].elements["liste"+i].options[indexChoisi].value;
		//teste si la liste i affiche de bon pays
		if(paysChoisi == tableauPays[i]){
			// changement de style de l'élément numéro i
			document.getElementById("numero"+i).className='OK';
		}else {
			document.getElementById("numero"+i).className='NOK';
		}
	}
}

//fonction Reset
function fonctionReset(){
	// boucle sur les listes
	for(var i=1; i<=7; i++){
		// affiche première valeur
		var indexChoisi = document.forms["listes"].elements["liste"+i].selectedIndex = 0;
		document.getElementById("numero"+i).style.backgroundColor='#FFFFFF';
	}
}	
