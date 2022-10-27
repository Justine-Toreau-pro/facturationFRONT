let Client = {
    apiUrl: "http://localhost:8080/api/",
    
    init:function (){
        //Ciblage des boutons  
        const clientRefresh = document.getElementById('clientRefresh');
        //Ajouts d'un évènement 
        clientRefresh.addEventListener('click', Client.clientList);
        
        },
    
    
        clientList:function(){
           console.log("yeah !!")
    
            // On prépare la configuration de la requête HTTP
            let config = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            };
    
            fetch(Client.apiUrl + 'client', config)
            .then(function(response){
                // console.log(response.json()) ;
                 return response.json();
            })
            .then(function(clientList) {
                const container = document.getElementById('tbodyListClient');
                container.innerHTML = "";
                
            for (const client of clientList) {
                
                
                // On sélectionne la balise template, puis on clone son contenu
                const template = document.querySelector('#templateListClient').content.cloneNode(true);
    
                // On sélectionne la partie du template qui nous interesse : la div character
                const newListClient = template.querySelector('#trListClient');
    
                newListClient.querySelector('#clientNumero').textContent = client.numero_client;
                newListClient.querySelector('#clientType').textContent = client.type_de_client;
                newListClient.querySelector('#clientNCptClient').textContent = client.numero_cpt_fournisseur;
                newListClient.querySelector('#clientTypeDeSociete').textContent = client.type_de_societe;
                newListClient.querySelector('#clientRaisonSociale').textContent = client.raison_sociale;
                newListClient.querySelector('#clientAdresseNumero').textContent = client.adresse_numero;
                newListClient.querySelector('#clientAdresseBisTer').textContent = client.adresse_bis_ter;
                newListClient.querySelector('#clientAdresseTypeDeVoie').textContent = client.adresse_type_de_voie;
                newListClient.querySelector('#clientAdresseNomDeLaVoie').textContent = client.adresse_nom_de_la_voie;
                newListClient.querySelector('#clientAdresseCp').textContent = client.adresse_cp;
                newListClient.querySelector('#clientAdresseVille').textContent = client.adresse_ville;
                newListClient.querySelector('#clientAdressePays').textContent = client.adresse_pays;
                newListClient.querySelector('#clientTelephone').textContent = client.telephone;
                newListClient.querySelector('#clientMail').textContent = client.mail;
                newListClient.querySelector('#clientSiteWeb').textContent = client.site_web;
                newListClient.querySelector('#clientNumeroSiret').textContent = client.numero_siret;
                newListClient.querySelector('#clientNumeroSiren').textContent = client.numero_siren;
                newListClient.querySelector('#clientNumeroTva').textContent = client.numero_tva;
                
                
                
                container.append(newListClient);   
             }
                
            });
        },
    }
    
    
        document.addEventListener('DOMContentLoaded', Client.init);