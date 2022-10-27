<div class="none prospectContenu" id="prospectContenu">

    <!-- inclusion du formulaire "nouveau prospect" -->
    <?php include '../php/formulaireNouveauProspect.php' ?>

                <div id="buttonDivProspect" class="buttonDiv">
                    <div class="buttonLeft">
                        <button id="nouveauProspect" class="buttonNew buttonIntLeft" >nouveau prospect</button>
                        <button class="buttonNew buttonIntLeft">recherche</button>
                        <button class="buttonNew buttonIntLeft">editer la liste</button>
                    </div> 
                    <div class="buttonRight">
                        <button id=prospectRefresh class="buttonNew buttonRefresh "><img class="iconRefresh" src="../images/icones/reload-webpage_icon-icons.com_53905.png" alt=""></button>
                    </div>
                </div>

                <table id="tableProspect">
                    <thead>
                        <tr>
                            <th class="col1">N° Prospect</th>
                            <th class="col2">Type client</th>
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
                    <tbody id=tbodyListProspect>
                        <!--Inclustion du tamplate avec js : prospect.js-->
                    </tbody>
                </table>
            </div>
<template id="templateListProspect">
    <tr id=trListProspect>
        <td id=prospectNumero >The table body</td>
        <td id=prospectType>The table body</td>
        <td id=prospectTypeDeSociete>The table body</td>
        <td id=prospectRaisonSociale>with two columns</td>
        <td id=prospectAdresseNumero>The table body</td>
        <td id=prospectAdresseBisTer>with two columns</td>
        <td id=prospectAdresseTypeDeVoie>The table body</td>
        <td id=prospectAdresseNomDeLaVoie>The table body</td>
        <td id=prospectAdresseCp>with two columns</td>
        <td id=prospectAdresseVille>The table body</td>
        <td id=prospectAdressePays>with two columns</td>
        <td id=prospectTelephone>The table body</td>
        <td id=prospectMail>with two columns</td>
        <td id=prospectSiteWeb>The table body</td>
        <td id=prospectNumeroSiret>with two columns</td>
        <td id=prospectNumeroSiren>The table body</td>
        <td id=prospectNumeroTva>with two columns</td>
        <td id=prospectModifier><img class="iconEdit" src="../images/icones/353430-checkbox-edit-pen-pencil_107516.png" alt=""></td>
        <td id=prospectEditer><img class="iconEdit" src="../images/icones/gui_print_preview_icon_157060.png" alt=""></td>
        <td id=prospectSupprimer><img class="iconEdit" src="../images/icones/close_remove_delete_icon_148989.png" alt=""></td>
    </tr>
</template>