function init(){
    //Ciblage des div  
    const devisClientSousOnglet = document.getElementById('devisClientSousOnglet');
    const bdcClientSousOnglet = document.getElementById('bdcClientSousOnglet');
    const bdlClientSousOnglet = document.getElementById('bdlClientSousOnglet');
    const factureClientSousOnglet = document.getElementById('factureClientSousOnglet');
    const relanceClientSousOnglet = document.getElementById('relanceClientSousOnglet');
    
    
    //Ajouts d'un évènement sur chaque div
    devisClientSousOnglet.addEventListener('click', twoButtonClick);
    bdcClientSousOnglet.addEventListener('click', twoButtonClick);
    bdlClientSousOnglet.addEventListener('click', twoButtonClick);
    factureClientSousOnglet.addEventListener('click', twoButtonClick);
    relanceClientSousOnglet.addEventListener('click', twoButtonClick);
    
    
    }

    function twoButtonClick(event){
    
        event.preventDefault();
    
        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;


        //ciblage des onglets
        const devisClientSousContenu = document.getElementById('devisClientSousContenu');
        const bdcClientSousContenu = document.getElementById('bdcClientSousContenu');
        const bdlClientSousContenu = document.getElementById('bdlClientSousContenu');
        const factureClientSousContenu = document.getElementById('factureClientSousContenu');
        const relanceClientSousContenu = document.getElementById('relanceClientSousContenu');
        
    
        
        //Ciblage des div  
        const devisClientSousOnglet = document.getElementById('devisClientSousOnglet');
        const bdcClientSousOnglet = document.getElementById('bdcClientSousOnglet');
        const bdlClientSousOnglet = document.getElementById('bdlClientSousOnglet');
        const factureClientSousOnglet = document.getElementById('factureClientSousOnglet');
        const relanceClientSousOnglet = document.getElementById('relanceClientSousOnglet');


        if(buttonClickedElement.id === "devisClientSousOnglet"){
            console.log("devisClientSousOnglet");
            
            // on met à jour l'affichage contenu
            devisClientSousContenu.classList.remove("none");
            devisClientSousContenu.classList.add('sousContenu');
    
            bdcClientSousContenu.classList.remove("sousContenu");
            bdcClientSousContenu.classList.add('none');
    
            bdlClientSousContenu.classList.remove("sousContenu");
            bdlClientSousContenu.classList.add('none');
    
            factureClientSousContenu.classList.remove("sousContenu");
            factureClientSousContenu.classList.add('none');

            relanceClientSousContenu.classList.remove("sousContenu");
            relanceClientSousContenu.classList.add('none');
    
           

            // on met à jour l'affichage onglet
            devisClientSousOnglet.classList.remove("sousOnglet");
            devisClientSousOnglet.classList.add('sousOngletSelect');

            bdcClientSousOnglet.classList.remove("sousOngletSelect");
            bdcClientSousOnglet.classList.add('sousOnglet');

            bdlClientSousOnglet.classList.remove("sousOngletSelect");
            bdlClientSousOnglet.classList.add('sousOnglet');

            factureClientSousOnglet.classList.remove("sousOngletSelect");
            factureClientSousOnglet.classList.add('sousOnglet');

            relanceClientSousOnglet.classList.remove("sousOngletSelect");
            relanceClientSousOnglet.classList.add('sousOnglet');

            

        }else if(buttonClickedElement.id === "bdcClientSousOnglet"){
             // on met à jour l'affichage contenu
             devisClientSousContenu.classList.remove("sousContenu");
             devisClientSousContenu.classList.add('none');
     
             bdcClientSousContenu.classList.remove("none");
             bdcClientSousContenu.classList.add('sousContenu');
     
             bdlClientSousContenu.classList.remove("sousContenu");
             bdlClientSousContenu.classList.add('none');
     
             factureClientSousContenu.classList.remove("sousContenu");
             factureClientSousContenu.classList.add('none');

             relanceClientSousContenu.classList.remove("sousContenu");
            relanceClientSousContenu.classList.add('none');
     
            
 
             // on met à jour l'affichage onglet
             devisClientSousOnglet.classList.remove("sousOngletSelect");
             devisClientSousOnglet.classList.add('sousOnglet');
 
             bdcClientSousOnglet.classList.remove("sousOnglet");
             bdcClientSousOnglet.classList.add('sousOngletSelect');
 
             bdlClientSousOnglet.classList.remove("sousOngletSelect");
             bdlClientSousOnglet.classList.add('sousOnglet');
 
             factureClientSousOnglet.classList.remove("sousOngletSelect");
             factureClientSousOnglet.classList.add('sousOnglet');

             relanceClientSousOnglet.classList.remove("sousOngletSelect");
             relanceClientSousOnglet.classList.add('sousOnglet');


        }else if(buttonClickedElement.id === "bdlClientSousOnglet"){
             // on met à jour l'affichage contenu
             devisClientSousContenu.classList.remove("sousContenu");
             devisClientSousContenu.classList.add('none');
     
             bdcClientSousContenu.classList.remove("sousContenu");
             bdcClientSousContenu.classList.add('none');
     
             bdlClientSousContenu.classList.remove("none");
             bdlClientSousContenu.classList.add('sousContenu');
     
             factureClientSousContenu.classList.remove("sousContenu");
             factureClientSousContenu.classList.add('none');

             relanceClientSousContenu.classList.remove("sousContenu");
             relanceClientSousContenu.classList.add('none');
     
            
 
             // on met à jour l'affichage onglet
             devisClientSousOnglet.classList.remove("sousOngletSelect");
             devisClientSousOnglet.classList.add('sousOnglet');
 
             bdcClientSousOnglet.classList.remove("sousOngletSelect");
             bdcClientSousOnglet.classList.add('sousOnglet');
 
             bdlClientSousOnglet.classList.remove("sousOnglet");
             bdlClientSousOnglet.classList.add('sousOngletSelect');
 
             factureClientSousOnglet.classList.remove("sousOngletSelect");
             factureClientSousOnglet.classList.add('sousOnglet');

             relanceClientSousOnglet.classList.remove("sousOngletSelect");
             relanceClientSousOnglet.classList.add('sousOnglet');


        }else if(buttonClickedElement.id === "factureClientSousOnglet"){
             // on met à jour l'affichage contenu
             devisClientSousContenu.classList.remove("sousContenu");
             devisClientSousContenu.classList.add('none');
     
             bdcClientSousContenu.classList.remove("sousContenu");
             bdcClientSousContenu.classList.add('none');
     
             bdlClientSousContenu.classList.remove("sousContenu");
             bdlClientSousContenu.classList.add('none');
     
             factureClientSousContenu.classList.remove("none");
             factureClientSousContenu.classList.add('sousContenu');

             relanceClientSousContenu.classList.remove("sousContenu");
             relanceClientSousContenu.classList.add('none');
     
            
 
             // on met à jour l'affichage onglet
             devisClientSousOnglet.classList.remove("sousOngletSelect");
             devisClientSousOnglet.classList.add('sousOnglet');
 
             bdcClientSousOnglet.classList.remove("sousOngletSelect");
             bdcClientSousOnglet.classList.add('sousOnglet');
 
             bdlClientSousOnglet.classList.remove("sousOngletSelect");
             bdlClientSousOnglet.classList.add('sousOnglet');
 
             factureClientSousOnglet.classList.remove("sousOnglet");
             factureClientSousOnglet.classList.add('sousOngletSelect');

             relanceClientSousOnglet.classList.remove("sousOngletSelect");
             relanceClientSousOnglet.classList.add('sousOnglet');


        }else if(buttonClickedElement.id === "relanceClientSousOnglet"){
          // on met à jour l'affichage contenu
          devisClientSousContenu.classList.remove("sousContenu");
          devisClientSousContenu.classList.add('none');
  
          bdcClientSousContenu.classList.remove("sousContenu");
          bdcClientSousContenu.classList.add('none');
  
          bdlClientSousContenu.classList.remove("sousContenu");
          bdlClientSousContenu.classList.add('none');
  
          factureClientSousContenu.classList.remove("sousContenu");
          factureClientSousContenu.classList.add('none');

          relanceClientSousContenu.classList.remove("none");
          relanceClientSousContenu.classList.add('sousContenu');
  
         

          // on met à jour l'affichage onglet
          devisClientSousOnglet.classList.remove("sousOngletSelect");
          devisClientSousOnglet.classList.add('sousOnglet');

          bdcClientSousOnglet.classList.remove("sousOngletSelect");
          bdcClientSousOnglet.classList.add('sousOnglet');

          bdlClientSousOnglet.classList.remove("sousOngletSelect");
          bdlClientSousOnglet.classList.add('sousOnglet');

          factureClientSousOnglet.classList.remove("sousOngletSelect");
          factureClientSousOnglet.classList.add('sousOnglet');

          relanceClientSousOnglet.classList.remove("sousOnglet");
          relanceClientSousOnglet.classList.add('sousOngletSelect');

     }

    }

    document.addEventListener('DOMContentLoaded', init);