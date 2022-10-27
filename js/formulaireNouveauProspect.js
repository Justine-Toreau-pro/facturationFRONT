function init(){
    //Ciblage des boutons  
    const nouveauProspect = document.getElementById('nouveauProspect');
    const retour = document.getElementById('retourProspect');
    //Ajouts d'un évènement 
    nouveauProspect.addEventListener('click', addProspect);
    retour.addEventListener('click', addProspect);
    
    
    }


    function addProspect(event) {


        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;


        if(buttonClickedElement.id === 'nouveauProspect'){
        const buttonDivProspect = document.getElementById('buttonDivProspect')
        buttonDivProspect.classList.remove('buttonDiv')
        buttonDivProspect.classList.add("none");  
        
        const tableProspect = document.getElementById('tableProspect')
        tableProspect.classList.add("none");

        const formulaireNouveauProspect = document.getElementById('formulaireNouveauProspect');
        formulaireNouveauProspect.classList.remove('none');
        formulaireNouveauProspect.style.display='block';
        }
        else if(buttonClickedElement.id === 'retourProspect'){
            formulaireNouveauProspect.style.display='none'; 

            buttonDivProspect.classList.remove('none');
            buttonDivProspect.classList.add("buttonDiv");

            tableProspect.classList.remove('none');
        }
    }


    document.addEventListener('DOMContentLoaded', init);


