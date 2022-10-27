function init(){
    //Ciblage des div  
    const devisFournisseurSousOnglet = document.getElementById('devisFournisseurSousOnglet');
    const bdcFournisseurSousOnglet = document.getElementById('bdcFournisseurSousOnglet');
    const bdlFournisseurSousOnglet = document.getElementById('bdlFournisseurSousOnglet');
    const factureFournisseurSousOnglet = document.getElementById('factureFournisseurSousOnglet');
    
    
    //Ajouts d'un évènement sur chaque div
    devisFournisseurSousOnglet.addEventListener('click', threeButtonClick);
    bdcFournisseurSousOnglet.addEventListener('click', threeButtonClick);
    bdlFournisseurSousOnglet.addEventListener('click', threeButtonClick);
    factureFournisseurSousOnglet.addEventListener('click', threeButtonClick);
    
    
    }

    function threeButtonClick(event){
    
        event.preventDefault();
    
        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;


        //ciblage des onglets
        const devisFournisseurSousContenu = document.getElementById('devisFournisseurSousContenu');
        const bdcFournisseurSousContenu = document.getElementById('bdcFournisseurSousContenu');
        const bdlFournisseurSousContenu = document.getElementById('bdlFournisseurSousContenu');
        const factureFournisseurSousContenu = document.getElementById('factureFournisseurSousContenu');
        
    
        
        //Ciblage des div  
        const devisFournisseurSousOnglet = document.getElementById('devisFournisseurSousOnglet');
        const bdcFournisseurSousOnglet = document.getElementById('bdcFournisseurSousOnglet');
        const bdlFournisseurSousOnglet = document.getElementById('bdlFournisseurSousOnglet');
        const factureFournisseurSousOnglet = document.getElementById('factureFournisseurSousOnglet');


        if(buttonClickedElement.id === "devisFournisseurSousOnglet"){
            console.log("devisClientSousOnglet");
            
            // on met à jour l'affichage contenu
            devisFournisseurSousContenu.classList.remove("none");
            devisFournisseurSousContenu.classList.add('sousContenu');
    
            bdcFournisseurSousContenu.classList.remove("sousContenu");
            bdcFournisseurSousContenu.classList.add('none');
    
            bdlFournisseurSousContenu.classList.remove("sousContenu");
            bdlFournisseurSousContenu.classList.add('none');
    
            factureFournisseurSousContenu.classList.remove("sousContenu");
            factureFournisseurSousContenu.classList.add('none');
    
           

            // on met à jour l'affichage onglet
            devisFournisseurSousOnglet.classList.remove("sousOnglet");
            devisFournisseurSousOnglet.classList.add('sousOngletSelect');

            bdcFournisseurSousOnglet.classList.remove("sousOngletSelect");
            bdcFournisseurSousOnglet.classList.add('sousOnglet');

            bdlFournisseurSousOnglet.classList.remove("sousOngletSelect");
            bdlFournisseurSousOnglet.classList.add('sousOnglet');

            factureFournisseurSousOnglet.classList.remove("sousOngletSelect");
            factureFournisseurSousOnglet.classList.add('sousOnglet');

            

        }else if(buttonClickedElement.id === "bdcFournisseurSousOnglet"){
             // on met à jour l'affichage contenu
             devisFournisseurSousContenu.classList.remove("sousContenu");
             devisFournisseurSousContenu.classList.add('none');
     
             bdcFournisseurSousContenu.classList.remove("none");
             bdcFournisseurSousContenu.classList.add('sousContenu');
     
             bdlFournisseurSousContenu.classList.remove("sousContenu");
             bdlFournisseurSousContenu.classList.add('none');
     
             factureFournisseurSousContenu.classList.remove("sousContenu");
             factureFournisseurSousContenu.classList.add('none');
     
            
 
             // on met à jour l'affichage onglet
             devisFournisseurSousOnglet.classList.remove("sousOngletSelect");
             devisFournisseurSousOnglet.classList.add('sousOnglet');
 
             bdcFournisseurSousOnglet.classList.remove("sousOnglet");
             bdcFournisseurSousOnglet.classList.add('sousOngletSelect');
 
             bdlFournisseurSousOnglet.classList.remove("sousOngletSelect");
             bdlFournisseurSousOnglet.classList.add('sousOnglet');
 
             factureFournisseurSousOnglet.classList.remove("sousOngletSelect");
             factureFournisseurSousOnglet.classList.add('sousOnglet');

        }else if(buttonClickedElement.id === "bdlFournisseurSousOnglet"){
             // on met à jour l'affichage contenu
             devisFournisseurSousContenu.classList.remove("sousContenu");
             devisFournisseurSousContenu.classList.add('none');
     
             bdcFournisseurSousContenu.classList.remove("sousContenu");
             bdcFournisseurSousContenu.classList.add('none');
     
             bdlFournisseurSousContenu.classList.remove("none");
             bdlFournisseurSousContenu.classList.add('sousContenu');
     
             factureFournisseurSousContenu.classList.remove("sousContenu");
             factureFournisseurSousContenu.classList.add('none');
     
            
 
             // on met à jour l'affichage onglet
             devisFournisseurSousOnglet.classList.remove("sousOngletSelect");
             devisFournisseurSousOnglet.classList.add('sousOnglet');
 
             bdcFournisseurSousOnglet.classList.remove("sousOngletSelect");
             bdcFournisseurSousOnglet.classList.add('sousOnglet');
 
             bdlFournisseurSousOnglet.classList.remove("sousOnglet");
             bdlFournisseurSousOnglet.classList.add('sousOngletSelect');
 
             factureFournisseurSousOnglet.classList.remove("sousOngletSelect");
             factureFournisseurSousOnglet.classList.add('sousOnglet');

        }else if(buttonClickedElement.id === "factureFournisseurSousOnglet"){
             // on met à jour l'affichage contenu
             devisFournisseurSousContenu.classList.remove("sousContenu");
             devisFournisseurSousContenu.classList.add('none');
     
             bdcFournisseurSousContenu.classList.remove("sousContenu");
             bdcFournisseurSousContenu.classList.add('none');
     
             bdlFournisseurSousContenu.classList.remove("sousContenu");
             bdlFournisseurSousContenu.classList.add('none');
     
             factureFournisseurSousContenu.classList.remove("none");
             factureFournisseurSousContenu.classList.add('sousContenu');
     
            
 
             // on met à jour l'affichage onglet
             devisFournisseurSousOnglet.classList.remove("sousOngletSelect");
             devisFournisseurSousOnglet.classList.add('sousOnglet');
 
             bdcFournisseurSousOnglet.classList.remove("sousOngletSelect");
             bdcFournisseurSousOnglet.classList.add('sousOnglet');
 
             bdlFournisseurSousOnglet.classList.remove("sousOngletSelect");
             bdlFournisseurSousOnglet.classList.add('sousOnglet');
 
             factureFournisseurSousOnglet.classList.remove("sousOnglet");
             factureFournisseurSousOnglet.classList.add('sousOngletSelect');

        }

    }

    document.addEventListener('DOMContentLoaded', init);