nombre_cartes=60;
tour=1;
joueurs=["A","B","C","D"];
joueur=1;


function carte(){
   numero_carte=1+Math.floor(Math.random()*nombre_cartes);
   document.getElementById("carte").src= "../images/cartes/carte_python-"+numero_carte+".png"; 
   document.getElementById("carte").alt= "carte-"+numero_carte; 
   document.getElementById("de").innerHTML="";
   document.getElementById("bouton_jeu").innerHTML="Carte suivante";
   document.getElementById("ntour").innerHTML=tour;
   document.getElementById("njoueur").innerHTML=joueurs[joueur-1];
   if (joueur<4){
      joueur++;
   }else{
      joueur=1;
	  tour++;
   }	   
}


function de(){
	numero=1+Math.floor(Math.random()*6);
	document.getElementById("de").innerHTML=numero;
}