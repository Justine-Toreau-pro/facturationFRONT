function init(){
    //Ciblage des boutons  
    const nouveauClient = document.getElementById('nouveauClient');
    const retourClient = document.getElementById('retourClient');
    //Ajouts d'un évènement 
    nouveauClient.addEventListener('click', addClient);
    retourClient.addEventListener('click', addClient);
    
    
    }


    function addClient(event) {


        // recupere le bouton reelement clické
        const buttonClickedElement = event.currentTarget;


        if(buttonClickedElement.id === 'nouveauClient'){
        const buttonDivClient = document.getElementById('buttonDivClient')
        buttonDivClient.classList.remove('buttonDiv')
        buttonDivClient.classList.add("none");  
        
        const tableClient = document.getElementById('tableClient')
        tableClient.classList.add("none");

        const myModal = document.getElementById('myModal');
        myModal.classList.remove('none');
        myModal.style.display='block';
        }
        else if(buttonClickedElement.id === 'retourClient'){
            myModal.style.display='none';

            buttonDivClient.classList.remove('none');
            buttonDivClient.classList.add("buttonDiv");

            tableClient.classList.remove('none');
        }
    }


    document.addEventListener('DOMContentLoaded', init);


