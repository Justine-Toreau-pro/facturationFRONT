function init(){
    //Ciblage des div  
    const clientOnglet = document.getElementById('clientOnglet');
    const clientDocOnglet = document.getElementById('clientDocOnglet');
    const fournisseurOnglet = document.getElementById('fournisseurOnglet');
    const fournisseurDocOnglet = document.getElementById('fournisseurDocOnglet');
    const articleOnglet = document.getElementById('articleOnglet');
    const prospectOnglet = document.getElementById('prospectOnglet');
    
    //Ajouts d'un évènement sur chaque div
    clientOnglet.addEventListener('click', onButtonClick);
    clientDocOnglet.addEventListener('click', onButtonClick);
    fournisseurOnglet.addEventListener('click', onButtonClick);
    fournisseurDocOnglet.addEventListener('click', onButtonClick);
    articleOnglet.addEventListener('click', onButtonClick);
    prospectOnglet.addEventListener('click', onButtonClick);
    
    }
    
    function onButtonClick(event){
    
        event.preventDefault();
    
        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;


        //ciblage des onglets
        const clientOnglet = document.getElementById('clientOnglet');
        const clientDocOnglet = document.getElementById('clientDocOnglet');
        const fournisseurOnglet = document.getElementById('fournisseurOnglet');
        const fournisseurDocOnglet = document.getElementById('fournisseurDocOnglet');
        const articleOnglet = document.getElementById('articleOnglet');
        const prospectOnglet = document.getElementById('prospectOnglet');
    
        
        //Ciblage des div
        const clientContenu = document.getElementById("clientContenu");
        const clientDocContenu = document.getElementById("clientDocContenu");
        const fournisseurContenu = document.getElementById("fournisseurContenu");
        const fournisseurDocContenu = document.getElementById("fournisseurDocContenu");
        const articleContenu = document.getElementById("articleContenu");
        const prospectContenu = document.getElementById("prospectContenu");
    
        
        // differiencier sur quel boutton on est
        if(buttonClickedElement.id === "clientOnglet"){
            
            // on met à jour l'affichage contenu
            clientContenu.classList.remove("none");
            clientContenu.classList.add('contenu');
    
            clientDocContenu.classList.remove("contenu");
            clientDocContenu.classList.add('none');
    
            fournisseurContenu.classList.remove("contenu");
            fournisseurContenu.classList.add('none');
    
            fournisseurDocContenu.classList.remove("contenu");
            fournisseurDocContenu.classList.add('none');
    
            articleContenu.classList.remove("contenu");
            articleContenu.classList.add('none');
    
            prospectContenu.classList.remove("contenu");
            prospectContenu.classList.add('none'); 

            // on met à jour l'affichage onglet
            clientOnglet.classList.remove("onglet");
            clientOnglet.classList.add('ongletSelect');

            clientDocOnglet.classList.remove("ongletSelect");
            clientDocOnglet.classList.add('onglet');

            fournisseurOnglet.classList.remove("ongletSelect");
            fournisseurOnglet.classList.add('onglet');

            fournisseurDocOnglet.classList.remove("ongletSelect");
            fournisseurDocOnglet.classList.add('onglet');

            articleOnglet.classList.remove("ongletSelect");
            articleOnglet.classList.add('onglet');

            prospectOnglet.classList.remove("ongletSelect");
            prospectOnglet.classList.add('onglet');

        }else if(buttonClickedElement.id === "clientDocOnglet")
        { 
            // on met à jour l'affichage contenu
            clientContenu.classList.remove("contenu");
            clientContenu.classList.add('none');
    
            clientDocContenu.classList.remove("none");
            clientDocContenu.classList.add('contenu');
    
            fournisseurContenu.classList.remove("contenu");
            fournisseurContenu.classList.add('none');
    
            fournisseurDocContenu.classList.remove("contenu");
            fournisseurDocContenu.classList.add('none');
    
            articleContenu.classList.remove("contenu");
            articleContenu.classList.add('none');
    
            prospectContenu.classList.remove("contenu");
            prospectContenu.classList.add('none'); 

            // on met à jour l'affichage onglet
            clientOnglet.classList.remove("ongletSelect");
            clientOnglet.classList.add('onglet');

            clientDocOnglet.classList.remove("onglet");
            clientDocOnglet.classList.add('ongletSelect');

            fournisseurOnglet.classList.remove("ongletSelect");
            fournisseurOnglet.classList.add('onglet');

            fournisseurDocOnglet.classList.remove("ongletSelect");
            fournisseurDocOnglet.classList.add('onglet');

            articleOnglet.classList.remove("ongletSelect");
            articleOnglet.classList.add('onglet');

            prospectOnglet.classList.remove("ongletSelect");
            prospectOnglet.classList.add('onglet');

        }else if(buttonClickedElement.id === "fournisseurOnglet")
        {
            // on met à jour l'affichage 
            clientContenu.classList.remove("contenu");
            clientContenu.classList.add('none');
    
            clientDocContenu.classList.remove("contenu");
            clientDocContenu.classList.add('none');
    
            fournisseurContenu.classList.remove("none");
            fournisseurContenu.classList.add('contenu');
    
            fournisseurDocContenu.classList.remove("contenu");
            fournisseurDocContenu.classList.add('none');
    
            articleContenu.classList.remove("contenu");
            articleContenu.classList.add('none');
    
            prospectContenu.classList.remove("contenu");
            prospectContenu.classList.add('none');   
            
            // on met à jour l'affichage onglet
            clientOnglet.classList.remove("ongletSelect");
            clientOnglet.classList.add('onglet');

            clientDocOnglet.classList.remove("ongletSelect");
            clientDocOnglet.classList.add('onglet');

            fournisseurOnglet.classList.remove("onglet");
            fournisseurOnglet.classList.add('ongletSelect');

            fournisseurDocOnglet.classList.remove("ongletSelect");
            fournisseurDocOnglet.classList.add('onglet');

            articleOnglet.classList.remove("ongletSelect");
            articleOnglet.classList.add('onglet');

            prospectOnglet.classList.remove("ongletSelect");
            prospectOnglet.classList.add('onglet');

        }else if(buttonClickedElement.id === "fournisseurDocOnglet")
        {
            // on met à jour l'affichage contenu
            clientContenu.classList.remove("contenu");
            clientContenu.classList.add('none');
    
            clientDocContenu.classList.remove("contenu");
            clientDocContenu.classList.add('none');
    
            fournisseurContenu.classList.remove("contenu");
            fournisseurContenu.classList.add('none');
    
            fournisseurDocContenu.classList.remove("none");
            fournisseurDocContenu.classList.add('contenu');
    
            articleContenu.classList.remove("contenu");
            articleContenu.classList.add('none');
    
            prospectContenu.classList.remove("contenu");
            prospectContenu.classList.add('none');  
            
            // on met à jour l'affichage onglet
            clientOnglet.classList.remove("ongletSelect");
            clientOnglet.classList.add('onglet');

            clientDocOnglet.classList.remove("ongletSelect");
            clientDocOnglet.classList.add('onglet');

            fournisseurOnglet.classList.remove("ongletSelect");
            fournisseurOnglet.classList.add('onglet');

            fournisseurDocOnglet.classList.remove("onglet");
            fournisseurDocOnglet.classList.add('ongletSelect');

            articleOnglet.classList.remove("ongletSelect");
            articleOnglet.classList.add('onglet');

            prospectOnglet.classList.remove("ongletSelect");
            prospectOnglet.classList.add('onglet');

        }else if(buttonClickedElement.id === "articleOnglet")
        {
           // on met à jour l'affichage contenu
           clientContenu.classList.remove("contenu");
           clientContenu.classList.add('none');
   
           clientDocContenu.classList.remove("contenu");
           clientDocContenu.classList.add('none');
   
           fournisseurContenu.classList.remove("contenu");
           fournisseurContenu.classList.add('none');
   
           fournisseurDocContenu.classList.remove("contenu");
           fournisseurDocContenu.classList.add('none');
   
           articleContenu.classList.remove("none");
           articleContenu.classList.add('contenu');
   
           prospectContenu.classList.remove("contenu");
           prospectContenu.classList.add('none'); 

           // on met à jour l'affichage onglet
           clientOnglet.classList.remove("ongletSelect");
           clientOnglet.classList.add('onglet');

           clientDocOnglet.classList.remove("ongletSelect");
           clientDocOnglet.classList.add('onglet');

           fournisseurOnglet.classList.remove("ongletSelect");
           fournisseurOnglet.classList.add('onglet');

           fournisseurDocOnglet.classList.remove("ongletSelect");
           fournisseurDocOnglet.classList.add('onglet');

           articleOnglet.classList.remove("onglet");
           articleOnglet.classList.add('ongletSelect');

           prospectOnglet.classList.remove("ongletSelect");
           prospectOnglet.classList.add('onglet');

        }else if(buttonClickedElement.id === "prospectOnglet")
        {
            // on met à jour l'affichage contenu
            clientContenu.classList.remove("contenu");
            clientContenu.classList.add('none');
    
            clientDocContenu.classList.remove("contenu");
            clientDocContenu.classList.add('none');
    
            fournisseurContenu.classList.remove("contenu");
            fournisseurContenu.classList.add('none');
    
            fournisseurDocContenu.classList.remove("contenu");
            fournisseurDocContenu.classList.add('none');
    
            articleContenu.classList.remove("contenu");
            articleContenu.classList.add('none');
    
            prospectContenu.classList.remove("none");
            prospectContenu.classList.add('contenu');   

            // on met à jour l'affichage onglet
            clientOnglet.classList.remove("ongletSelect");
            clientOnglet.classList.add('onglet');

            clientDocOnglet.classList.remove("ongletSelect");
            clientDocOnglet.classList.add('onglet');

            fournisseurOnglet.classList.remove("ongletSelect");
            fournisseurOnglet.classList.add('onglet');

            fournisseurDocOnglet.classList.remove("ongletSelect");
            fournisseurDocOnglet.classList.add('onglet');

            articleOnglet.classList.remove("ongletSelect");
            articleOnglet.classList.add('onglet');

            prospectOnglet.classList.remove("onglet");
            prospectOnglet.classList.add('ongletSelect');
        }
    
    
    }
    
    document.addEventListener('DOMContentLoaded', init);