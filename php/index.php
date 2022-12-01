<!-- inclusion du "header" -->
<?php session_start();?>

<?php include "../php/header.php" ?>

    <main>
        <!-- inclusion des "onglet" -->
        <?php include "../php/onglets.php" ?>


        <!-- inclusion du "contenu client" -->
        <?php include "../php/clientContenu.php" ?>

        <!-- inclusion du "contenu document client" -->
        <?php include "../php/docClientContenu.php" ?>

        <!-- inclusion du "contenu fournisseur" -->
        <?php include "../php/fournisseurContenu.php" ?>

        <!-- inclusion du "contenu document fournisseur" -->
        <?php include "../php/docFournisseurContenu.php" ?>

        <!-- inclusion du "contenu article" -->
        <?php include "../php/articleContenu.php" ?>

        <!-- inclusion du "contenu prospect" -->
        <?php include "../php/prospectContenu.php" ?>
    </main>

   <!-- inclusion du "footer" -->
<?php include "../php/footer.php" ?>


