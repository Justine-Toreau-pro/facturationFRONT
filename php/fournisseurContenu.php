<div class="none fournisseurContenu" id="fournisseurContenu">
                <!-- inclusion du formulaire "nouveau fournisseur" -->
                <?php include '../php/formulaireNouveauFournisseur.php' ?>
                <div id="buttonDivFournisseur" class="buttonDiv">
                    <div class="buttonLeft">
                        <button id="nouveauFournisseur" class="buttonNew buttonIntLeft" >nouveau fournisseur</button>
                        <button class="buttonNew buttonIntLeft">recherche</button>
                        <button class="buttonNew buttonIntLeft">editer la liste</button>
                    </div> 
                    <div class="buttonRight">
                        <button id="fournisseurRefresh" class="buttonNew buttonRefresh "><img class="iconRefresh" src="../images/icones/reload-webpage_icon-icons.com_53905.png" alt=""></button>
                    </div>
                </div>

                <table id="tableFournisseur">
                    <thead>
                        <tr>
                            <th class="col1">N° Fournisseur</th>
                            <th class="col2">Type fournisseur</th>
                            <th class="col3">N° de compte client</th>
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
                    <tbody id=tbodyListFournisseur>
                        <!--Inclustion du tamplate avec js : fournisseur.js-->
                    </tbody>
                </table>
            </div>
<template id="templateListFournisseur">
    <tr id=trListFournisseur class="trListFournisseur">
        <td id=fournisseurNumero >The table body</td>
        <td id=fournisseurType>The table body</td>
        <td id=fournisseurNCptClient>with two columns</td>
        <td id=fournisseurTypeDeSociete>The table body</td>
        <td id=fournisseurRaisonSociale>with two columns</td>
        <td id=fournisseurAdresseNumero>The table body</td>
        <td id=fournisseurAdresseBisTer>with two columns</td>
        <td id=fournisseurAdresseTypeDeVoie>The table body</td>
        <td id=fournisseurAdresseNomDeLaVoie>The table body</td>
        <td id=fournisseurAdresseCp>with two columns</td>
        <td id=fournisseurAdresseVille>The table body</td>
        <td id=fournisseurAdressePays>with two columns</td>
        <td id=fournisseurTelephone>The table body</td>
        <td id=fournisseurMail>with two columns</td>
        <td id=fournisseurSiteWeb>The table body</td>
        <td id=fournisseurNumeroSiret>with two columns</td>
        <td id=fournisseurNumeroSiren>The table body</td>
        <td id=fournisseurNumeroTva>with two columns</td>
        <td id=fournisseurModifier><img class="iconEdit" src="../images/icones/353430-checkbox-edit-pen-pencil_107516.png" alt=""></td>
        <td id=fournisseurEditer><img class="iconEdit" src="../images/icones/gui_print_preview_icon_157060.png" alt=""></td>
        <td class="iconSupp" > <button> <img id=fournisseurSupprimer class="iconEdit" src="../images/icones/close_remove_delete_icon_148989.png" alt=""> </button></td>
    </tr>
</template>