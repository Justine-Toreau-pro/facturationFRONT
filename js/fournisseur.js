let Fournisseur = 
{
    apiUrl: "http://localhost:8080/api/",

    

    selectAllFournisseur: function()
    {
        // On récupère la liste de toutes les fournisseurs
        const fournisseurLignes = document.querySelectorAll('.trListFournisseur');
        
            // Pour chaque tache, on place les écouteurs individuels
            for ( const fourniseurSelect of fournisseurLignes ) 
            {       
                // Fournisseur.selectSingleFournisseur(fourniseurSelect)
                const fournisseurSupprimer = fourniseurSelect.querySelector('.iconSupp');
                fournisseurSupprimer.addEventListener('click', Fournisseur.fournisseurSupp);
            }
            
        },

        // selectSingleFournisseur:function(fourniseurSelect) 
        // {
        //     const fournisseurSupprimer = fourniseurSelect.querySelector('.iconSupp');
        //     fournisseurSupprimer.addEventListener('click', Fournisseur.fournisseurSupp);
        // },

    init:function ()
    {
        //Ciblage des boutons  
        const fournisseurRefresh = document.getElementById('fournisseurRefresh');
        //Ajouts d'un évènement 
        fournisseurRefresh.addEventListener('click', Fournisseur.fournisseurList);
        
        // Fournisseur.selectAllFournisseur();

        
    },


    fournisseurList:function()
    {
        let config = 
        {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                //'HTTP_AUTHORIZATION' : 'Bearer 5948c3d34354b20bd3c5bfb7709b29ace00bcf5e02896567fc45ae614a6270e7',
                'Access-Control-Allow-Origin': 'http://localhost/facturationFRONT/php/',
                'Content-Type': 'application/json',
                'Access-Control-Request-Credentials': 'true',
                'Access-Control-Request-Header' : 'Content-type'
                
                
              },
            
            
        };

        fetch(Fournisseur.apiUrl + 'fournisseur', config)
        .then(function(response)
        {
             return response.json();
        })
        .then(function(fournisseurList) 
        {
            const container = document.getElementById('tbodyListFournisseur');
            container.innerHTML = "";
            
            for (const fournisseur of fournisseurList) 
            {
                // On sélectionne la balise template, puis on clone son contenu
                const template = document.querySelector('#templateListFournisseur').content.cloneNode(true);

                // On sélectionne la partie du template qui nous interesse : la div character
                const newListFournisseur = template.querySelector('#trListFournisseur');
                
                newListFournisseur.setAttribute("data-id", fournisseur.id);
                newListFournisseur.querySelector('#fournisseurNumero').textContent = fournisseur.numero_fournisseur;
                newListFournisseur.querySelector('#fournisseurType').textContent = fournisseur.type_de_fournisseur;
                newListFournisseur.querySelector('#fournisseurNCptClient').textContent = fournisseur.numero_cpt_client;
                newListFournisseur.querySelector('#fournisseurTypeDeSociete').textContent = fournisseur.type_de_societe;
                newListFournisseur.querySelector('#fournisseurRaisonSociale').textContent = fournisseur.raison_sociale;
                newListFournisseur.querySelector('#fournisseurAdresseNumero').textContent = fournisseur.adresse_numero;
                newListFournisseur.querySelector('#fournisseurAdresseBisTer').textContent = fournisseur.adresse_bis_ter;
                newListFournisseur.querySelector('#fournisseurAdresseTypeDeVoie').textContent = fournisseur.adresse_type_de_voie;
                newListFournisseur.querySelector('#fournisseurAdresseNomDeLaVoie').textContent = fournisseur.adresse_nom_de_la_voie;
                newListFournisseur.querySelector('#fournisseurAdresseCp').textContent = fournisseur.adresse_cp;
                newListFournisseur.querySelector('#fournisseurAdresseVille').textContent = fournisseur.adresse_ville;
                newListFournisseur.querySelector('#fournisseurAdressePays').textContent = fournisseur.adresse_pays;
                newListFournisseur.querySelector('#fournisseurTelephone').textContent = fournisseur.telephone;
                newListFournisseur.querySelector('#fournisseurMail').textContent = fournisseur.mail;
                newListFournisseur.querySelector('#fournisseurSiteWeb').textContent = fournisseur.site_web;
                newListFournisseur.querySelector('#fournisseurNumeroSiret').textContent = fournisseur.numero_siret;
                newListFournisseur.querySelector('#fournisseurNumeroSiren').textContent = fournisseur.numero_siren;
                newListFournisseur.querySelector('#fournisseurNumeroTva').textContent = fournisseur.numero_tva;
                
                
                container.append(newListFournisseur); 
            }     

            Fournisseur.selectAllFournisseur();
        }); 
    },




    fournisseurSupp:function(event)
    {
        const buttonSupp = event.currentTarget;
        const fournisseurSupp = buttonSupp.closest('.trListFournisseur');
        const id = fournisseurSupp.getAttribute("data-id");
        console.log(id);

        let config = 
        {
            
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Access-Control-Request-Origin' : 'http://localhost/facturation_front',
                'Access-Control-Request-Methods': 'OPTION',
                'Content-Type': 'application/json',
                'Access-Control-Request-Credentials': 'true',
                'Access-Control-Request-Header' : 'Content-type'
              },
           
            
            
        }; 
        
        
        fetch(Fournisseur.apiUrl + 'fournisseur/supp/' + id, config)
        .then(function()
        {
             
        })
        .then(function() 
        {Fournisseur.fournisseurList()
            
            
                
        });
    },
}


    document.addEventListener('DOMContentLoaded', Fournisseur.init);