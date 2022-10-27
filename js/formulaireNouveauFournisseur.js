function init()
{
    //Ciblage des boutons  
    const nouveauFournisseur = document.getElementById('nouveauFournisseur');
    const retour = document.getElementById('retourFournisseur');
    //Ajouts d'un évènement 
    nouveauFournisseur.addEventListener('click', addFournisseur);
    retour.addEventListener('click', addFournisseur);
}


    function addFournisseur(event) 
    {
        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;

        if(buttonClickedElement.id === 'nouveauFournisseur'){
        const buttonDivFournisseur = document.getElementById('buttonDivFournisseur')
        buttonDivFournisseur.classList.remove('buttonDiv')
        buttonDivFournisseur.classList.add("none");  
        
        const tableFournisseur = document.getElementById('tableFournisseur')
        tableFournisseur.classList.add("none");

        const formulaireNouveauFournisseur = document.getElementById('formulaireNouveauFournisseur');
        formulaireNouveauFournisseur.classList.remove('none');
        formulaireNouveauFournisseur.style.display='block';
        }
        else if(buttonClickedElement.id === 'retourFournisseur'){
            formulaireNouveauFournisseur.style.display='none'; 

            buttonDivFournisseur.classList.remove('none');
            buttonDivFournisseur.classList.add("buttonDiv");

            tableFournisseur.classList.remove('none');
        }
    }


    document.addEventListener('DOMContentLoaded', init);


