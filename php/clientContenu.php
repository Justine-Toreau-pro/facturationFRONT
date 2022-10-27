<section class="containerContenu">

            

            <div class="none clientContenu" id="clientContenu">

                    <!-- inclusion du formulaire "nouveau client" -->
                <?php include '../php/formulaireNouveauClient.php' ?>
               

                <div id="buttonDivClient" class="buttonDiv">
                    <div class="buttonLeft">
                        <button id="nouveauClient" class="buttonNew buttonIntLeft" > nouveau client</button>
                        <button class="buttonNew buttonIntLeft">recherche</button>
                        <button class="buttonNew buttonIntLeft">editer la liste</button>
                    </div> 
                    <div class="buttonRight">
                        <button id=clientRefresh class="buttonNew buttonRefresh "><img class="iconRefresh" src="../images/icones/reload-webpage_icon-icons.com_53905.png" alt=""></button>
                    </div>
                </div>

                <table id="tableClient">
                    <thead>
                        <tr>
                            <th class="col1">N° Client</th>
                            <th class="col2">Type client</th>
                            <th class="col3">N° de compte fournisseur</th>
                            <th class="col4">Type de société</th>
                            <th class="col5">Raison sociale</th>
                            <th class="col6">N° de voie</th>
                            <th class="col7">Complément de voie</th>
                            <th class="col8">Type de voie</th>
                            <th class="col9">Nom de la voie</th>
                            <th class="col10">Code postal</th>
                            <th class="col11">Ville</th>
                            <th class="col12">Pays</th>
                            <th class="col13">N° Tel</th>
                            <th class="col14">Email</th>
                            <th class="col15">Site web</th>
                            <th class="col16">N° SIRET</th>
                            <th class="col17">N° SIREN</th>
                            <th class="col18">N° TVA</th>
                            <th class="col19">Modif.</th>
                            <th class="col20">Edit.</th>
                            <th class="col21">Supp.</th> 
                        </tr>
                    </thead>
                    <tbody id=tbodyListClient>
                        <!--Inclustion du tamplate avec js : client.js-->
                    </tbody>
                </table>
            </div>
<template id="templateListClient">
    <tr id=trListClient>
        <td id=clientNumero >The table body</td>
        <td id=clientType>The table body</td>
        <td id=clientNCptClient>with two columns</td>
        <td id=clientTypeDeSociete>The table body</td>
        <td id=clientRaisonSociale>with two columns</td>
        <td id=clientAdresseNumero>The table body</td>
        <td id=clientAdresseBisTer>with two columns</td>
        <td id=clientAdresseTypeDeVoie>The table body</td>
        <td id=clientAdresseNomDeLaVoie>The table body</td>
        <td id=clientAdresseCp>with two columns</td>
        <td id=clientAdresseVille>The table body</td>
        <td id=clientAdressePays>with two columns</td>
        <td id=clientTelephone>The table body</td>
        <td id=clientMail>with two columns</td>
        <td id=clientSiteWeb>The table body</td>
        <td id=clientNumeroSiret>with two columns</td>
        <td id=clientNumeroSiren>The table body</td>
        <td id=clientNumeroTva>with two columns</td>
        <td id=clientModifier><img class="iconEdit" src="../images/icones/353430-checkbox-edit-pen-pencil_107516.png" alt=""></td>
        <td id=clientEditer><img class="iconEdit" src="../images/icones/gui_print_preview_icon_157060.png" alt=""></td>
        <td id=clientSupprimer><img class="iconEdit" src="../images/icones/close_remove_delete_icon_148989.png" alt=""></td>
    </tr>
</template>