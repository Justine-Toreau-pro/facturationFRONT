let Connexion = 
{
    apiUrl: "http://localhost:8080/api/",

    

    

    init:function ()
    {
        //Ciblage du bouton de connexion 
        const connexion = document.getElementById('connexion');
        //Ajouts d'un évènement 
        connexion.addEventListener('click', Connexion.connexion);
    },


    connexion:function(event)
    { 
        

        event.preventDefault();

        const identifiant = document.getElementById('identifiant').value;
        const password = document.getElementById('password').value;
            

        requestBody =
        {     
            "identifiant": "'" + identifiant + "'",
            "password": password 
        };
            console.log(requestBody);
        let config = 
        {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: 
            {
                'Access-Control-Allow-Origin': 'http://localhost/facturationFRONT/php/',
                'Content-Type': 'application/json',
                'Access-Control-Request-Credentials': 'true',
                'Access-Control-Request-Header' : 'Content-type'
              },
            body: JSON.stringify(requestBody)
           
        };

        fetch(Connexion.apiUrl + 'utilisateur/login', config)
        .then(function(response)
        {
           return response.json();
        })
        .then(function(connexion) 
        {
           console.log(connexion);
           localStorage.setItem("identifiant", connexion.identifiant);
           localStorage.setItem("password", connexion.password);
           localStorage.setItem("token", connexion.token);
           localStorage.setItem("entreprise", connexion.entreprise);
           console.log(localStorage.getItem("identifiant"))
        })
        .then(function()
        {
            document.location.href="http://localhost/facturationFRONT/php";
        }
        ); 
    },




    
}


    document.addEventListener('DOMContentLoaded', Connexion.init);