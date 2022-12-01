let Prospect = 
{
    apiUrl: "http://localhost:8080/api/",
    
    init:function ()
    {
        //Ciblage des boutons  
        const prospectRefresh = document.getElementById('prospectRefresh');
        //Ajouts d'un évènement 
        prospectRefresh.addEventListener('click', Prospect.prospectList);
        
        },
    
    
        prospectList:function(){
           console.log("yeah !!")
    
            // On prépare la configuration de la requête HTTP
            let config = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Authorization' : 'Bearer 132a7df76a1acde9e74ddb17c638d6046dc49adc6575545e3474f2ce5afd7aee',
                    
                  },
            };
    
            fetch(Prospect.apiUrl + 'prospect', config)
            .then(function(response){
                // console.log(response.json()) ;
                 return response.json();
            })
            .then(function(prospectList) {
                const container = document.getElementById('tbodyListProspect');
                container.innerHTML = "";
                
                for (const prospect of prospectList) 
                {
                    // On sélectionne la balise template, puis on clone son contenu
                    const template = document.querySelector('#templateListProspect').content.cloneNode(true);
        
                    // On sélectionne la partie du template qui nous interesse : la div character
                    const newListProspect = template.querySelector('#trListProspect');
        
                    newListProspect.querySelector('#prospectNumero').textContent = prospect.numero_prospect;
                    newListProspect.querySelector('#prospectType').textContent = prospect.type_de_prospect;
                    newListProspect.querySelector('#prospectTypeDeSociete').textContent = prospect.type_de_societe;
                    newListProspect.querySelector('#prospectRaisonSociale').textContent = prospect.raison_sociale;
                    newListProspect.querySelector('#prospectAdresseNumero').textContent = prospect.adresse_numero;
                    newListProspect.querySelector('#prospectAdresseBisTer').textContent = prospect.adresse_bis_ter;
                    newListProspect.querySelector('#prospectAdresseTypeDeVoie').textContent = prospect.adresse_type_de_voie;
                    newListProspect.querySelector('#prospectAdresseNomDeLaVoie').textContent = prospect.adresse_nom_de_la_voie;
                    newListProspect.querySelector('#prospectAdresseCp').textContent = prospect.adresse_cp;
                    newListProspect.querySelector('#prospectAdresseVille').textContent = prospect.adresse_ville;
                    newListProspect.querySelector('#prospectAdressePays').textContent = prospect.adresse_pays;
                    newListProspect.querySelector('#prospectTelephone').textContent = prospect.telephone;
                    newListProspect.querySelector('#prospectMail').textContent = prospect.mail;
                    newListProspect.querySelector('#prospectSiteWeb').textContent = prospect.site_web;
                    newListProspect.querySelector('#prospectNumeroSiret').textContent = prospect.numero_siret;
                    newListProspect.querySelector('#prospectNumeroSiren').textContent = prospect.numero_siren;
                    newListProspect.querySelector('#prospectNumeroTva').textContent = prospect.numero_tva;
                    
                    container.append(newListProspect);
                }
            });
        },
    }
    
    
        document.addEventListener('DOMContentLoaded', Prospect.init);