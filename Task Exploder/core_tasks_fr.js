window.TASK_DATA_FR = {
  app_name: "Exploseur de Tâches",
  version: "1.0",
  last_updated: "2026-06-11",
  categories: [
    {
      category_id: 1,
      category_code: "kitchen",
      category_name: "Cuisine",
      branches: [
        {
          branch_id: "k_sink_reset",
          branch_name: "Rangement de l'évier",
          twigs: [
            { id: 1, text: "Prends juste 3 fourchettes ou cuillères dans l'évier et range-les.", tier: "low" },
            { id: 2, text: "Empile quelques assiettes pour qu'elles prennent moins de place.", tier: "low" },
            { id: 3, text: "Trouve 1 vieux reste de nourriture sur le comptoir et jette-le.", tier: "low" },
            { id: 4, text: "Remplis la poêle la plus lourde d'eau chaude et de liquide vaisselle pour la laisser tremper.", tier: "normal" },
            { id: 5, text: "Passe un coup de chiffon rapide sur un tout petit coin du comptoir.", tier: "normal" },
            { id: 6, text: "Donne un coup de brosse rapide au fond de l'évier.", tier: "high" },
            { id: 7, text: "Essuie rapidement les poignées du robinet.", tier: "high" },
            { id: 8, text: "Vide le filtre de l'évier dans la poubelle.", tier: "high" },
            { id: 9, text: "Accroche un torchon propre et sec.", tier: "high" }
          ]
        },
        {
          branch_id: "k_counter_reset",
          branch_name: "Rangement du comptoir",
          twigs: [
            { id: 1, text: "Prends 2 tasses ou verres et pose-les près de l'évier.", tier: "low" },
            { id: 2, text: "Fais de la place sur un tout petit bout de comptoir.", tier: "low" },
            { id: 3, text: "Prends 3 déchets évidents et jette-les.", tier: "low" },
            { id: 4, text: "Range deux ou trois épices ou condiments qui traînent.", tier: "normal" },
            { id: 5, text: "Passe un coup de propre sur ce coin de comptoir tout juste vidé.", tier: "normal" },
            { id: 6, text: "Essuie les zones les plus utilisées du comptoir.", tier: "high" },
            { id: 7, text: "Attrape 3 objets au hasard et remets-les dans les placards.", tier: "high" },
            { id: 8, text: "Nettoie la crédence ou le mur derrière les plaques.", tier: "high" },
            { id: 9, text: "Remets un peu d'ordre sur l'égouttoir ou le tapis de vaisselle.", tier: "high" }
          ]
        },
        {
          branch_id: "k_stove_wipe",
          branch_name: "Nettoyage des plaques",
          twigs: [
            { id: 1, text: "Enlève deux ou trois trucs posés sur les plaques de cuisson.", tier: "low" },
            { id: 2, text: "Passe un coup rapide sur le panneau avant avec les boutons.", tier: "low" },
            { id: 3, text: "Essuie juste la zone des feux de gauche.", tier: "low" },
            { id: 4, text: "Essuie juste la zone des feux de droite.", tier: "normal" },
            { id: 5, text: "Remets les objets que tu avais bougés sur la cuisinière.", tier: "normal" },
            { id: 6, text: "Soulève les grilles et secoue les miettes.", tier: "high" },
            { id: 7, text: "Nettoie rapidement les boutons de réglage.", tier: "high" },
            { id: 8, text: "Passe un grand coup de chiffon propre sur toute la surface.", tier: "high" },
            { id: 9, text: "Essuie la poignée de la porte du four.", tier: "high" }
          ]
        },
        {
          branch_id: "k_fridge_purge",
          branch_name: "Tri rapide du frigo",
          twigs: [
            { id: 1, text: "Jette un coup d'œil rapide sur l'étagère du haut.", tier: "low" },
            { id: 2, text: "Repère 1 truc périmé et jette-le.", tier: "low" },
            { id: 3, text: "Trouve 1 vieux tupperware de restes et jette le contenu.", tier: "low" },
            { id: 4, text: "Essuie une petite tache ou un coin qui colle.", tier: "normal" },
            { id: 5, text: "Ferme la porte du frigo — c'est tout bon pour cette étape.", tier: "normal" },
            { id: 6, text: "Débarrasse-toi d'un pot de sauce que personne ne mangera jamais.", tier: "high" },
            { id: 7, text: "Passe un coup de chiffon sur la poignée extérieure du frigo.", tier: "high" },
            { id: 8, text: "Nettoie le bord avant de l'étagère du haut.", tier: "high" },
            { id: 9, text: "Redresse quelques bouteilles dans la porte du frigo.", tier: "high" }
          ]
        },
        {
          branch_id: "k_floor_sweep",
          branch_name: "Coup de balai rapide",
          twigs: [
            { id: 1, text: "Ramasse 3 trucs qui traînent par terre.", tier: "low" },
            { id: 2, text: "Balaie juste le sol devant l'évier.", tier: "low" },
            { id: 3, text: "Vide la pelle à poussière dans la poubelle.", tier: "low" },
            { id: 4, text: "Passe un coup rapide sous le bord de la table.", tier: "normal" },
            { id: 5, text: "Fais une pause ici — c'est déjà très bien.", tier: "normal" },
            { id: 6, text: "Balaie le passage principal entre l'évier et les plaques.", tier: "high" },
            { id: 7, text: "Donne un coup de balai rapide près de l'entrée de la cuisine.", tier: "high" },
            { id: 8, text: "Secoue le tapis de cuisine dehors ou au-dessus de la poubelle.", tier: "high" },
            { id: 9, text: "Balaie rapidement la zone autour de la poubelle.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 2,
      category_code: "bathroom",
      category_name: "Salle de bain",
      branches: [
        {
          branch_id: "b_sink_counter",
          branch_name: "Lavabo & Comptoir",
          twigs: [
            { id: 1, text: "Déplace 3 objets qui encombrent le lavabo.", tier: "low" },
            { id: 2, text: "Passe un coup rapide sur les poignées du robinet.", tier: "low" },
            { id: 3, text: "Essuie juste la zone autour de la bonde.", tier: "low" },
            { id: 4, text: "Remets deux ou trois objets à leur place.", tier: "normal" },
            { id: 5, text: "Accroche une serviette propre.", tier: "normal" },
            { id: 6, text: "Enlève encore quelques trucs qui traînent sur le meuble.", tier: "high" },
            { id: 7, text: "Essuie rapidement toute la surface du meuble.", tier: "high" },
            { id: 8, text: "Enlève les pires traces d'eau sur le miroir.", tier: "high" },
            { id: 9, text: "Jette les flacons ou tubes de dentifrice vides.", tier: "high" }
          ]
        },
        {
          branch_id: "b_toilet_clean",
          branch_name: "Nettoyage rapide des toilettes",
          twigs: [
            { id: 1, text: "Tire la chasse d'eau.", tier: "low" },
            { id: 2, text: "Passe une lingette sur la lunette des toilettes.", tier: "low" },
            { id: 3, text: "Essuie rapidement le bouton de la chasse d'eau.", tier: "low" },
            { id: 4, text: "Passe un coup rapide de brosse dans la cuvette.", tier: "normal" },
            { id: 5, text: "Essuie le dessus de l'abattant.", tier: "normal" },
            { id: 6, text: "Nettoie le contour du pied des toilettes.", tier: "high" },
            { id: 7, text: "Prends le rouleau de papier toilette vide et jette-le.", tier: "high" },
            { id: 8, text: "Mets un rouleau de papier toilette neuf.", tier: "high" },
            { id: 9, text: "Essuie rapidement le dessus du réservoir.", tier: "high" }
          ]
        },
        {
          branch_id: "b_shower_reset",
          branch_name: "Rangement de la douche / baignoire",
          twigs: [
            { id: 1, text: "Ramasse 2 bouteilles au fond de la baignoire ou sur le rebord.", tier: "low" },
            { id: 2, text: "Utilise le pommeau de douche ou un gobelet pour rincer les parois.", tier: "low" },
            { id: 3, text: "Accroche proprement ton gant de toilette ou ta fleur de douche.", tier: "low" },
            { id: 4, text: "Essuie rapidement le rebord de la douche.", tier: "normal" },
            { id: 5, text: "Trouve 1 flacon vide et jette-le.", tier: "normal" },
            { id: 6, text: "Frotte rapidement le fond de la baignoire.", tier: "high" },
            { id: 7, text: "Essuie le mitigeur ou robinet de la douche.", tier: "high" },
            { id: 8, text: "Aligne proprement 3 bouteilles sur l'étagère.", tier: "high" },
            { id: 9, text: "Donne un dernier coup de jet rapide à toute la baignoire.", tier: "high" }
          ]
        },
        {
          branch_id: "b_trash_towels",
          branch_name: "Poubelle & Serviettes",
          twigs: [
            { id: 1, text: "Noue le sac poubelle de la salle de bain.", tier: "low" },
            { id: 2, text: "Mets un sac propre dans la poubelle.", tier: "low" },
            { id: 3, text: "Change la serviette essuie-mains pour une propre.", tier: "low" },
            { id: 4, text: "Plie 1 serviette et remets-la sur le porte-serviettes.", tier: "normal" },
            { id: 5, text: "Range 2 flacons égarés dans le placard.", tier: "normal" },
            { id: 6, text: "Prends tous les emballages vides et jette-les.", tier: "high" },
            { id: 7, text: "Essuie le couvercle de la poubelle.", tier: "high" },
            { id: 8, text: "Remets un peu d'ordre dans ce qui traîne sur le comptoir.", tier: "high" },
            { id: 9, text: "Secoue rapidement le tapis de bain.", tier: "high" }
          ]
        },
        {
          branch_id: "b_quick_reset",
          branch_name: "Rafraîchissement rapide",
          twigs: [
            { id: 1, text: "Ramasse 3 objets qui traînent par terre.", tier: "low" },
            { id: 2, text: "Passe un coup rapide dans le lavabo.", tier: "low" },
            { id: 3, text: "Tire le rideau de douche bien droit.", tier: "low" },
            { id: 4, text: "Essuie l'endroit le plus sale du meuble.", tier: "normal" },
            { id: 5, text: "Range 2 objets égarés dans les tiroirs.", tier: "normal" },
            { id: 6, text: "Donne un coup de propre rapide au miroir.", tier: "high" },
            { id: 7, text: "Passe un coup de balai rapide sur le passage principal.", tier: "high" },
            { id: 8, text: "Débarrasse-toi d'un vieux produit que tu n'utilises plus.", tier: "high" },
            { id: 9, text: "Essuie la poignée intérieure de la porte.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 3,
      category_code: "living_room",
      category_name: "Salon",
      branches: [
        {
          branch_id: "lr_surface_reset",
          branch_name: "Rangement des surfaces",
          twigs: [
            { id: 1, text: "Plie 1 plaid et pose-le sur le dossier du canapé.", tier: "low" },
            { id: 2, text: "Rassemble les télécommandes au même endroit.", tier: "low" },
            { id: 3, text: "Prends les tasses vides et apporte-les dans la cuisine.", tier: "low" },
            { id: 4, text: "Fais de la place sur un petit bout de la table basse.", tier: "normal" },
            { id: 5, text: "Passe un coup rapide sur la partie vidée de la table.", tier: "normal" },
            { id: 6, text: "Vide une autre petite partie de la table.", tier: "high" },
            { id: 7, text: "Prends 3 objets qui vont dans une autre pièce et mets-les de côté.", tier: "high" },
            { id: 8, text: "Dépoussière rapidement le dessus du meuble TV.", tier: "high" },
            { id: 9, text: "Redresse deux ou trois décos ou cadres photo.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_floor_reset",
          branch_name: "Rangement du sol",
          twigs: [
            { id: 1, text: "Ramasse 5 trucs au hasard sur le sol du salon.", tier: "low" },
            { id: 2, text: "Aligne proprement deux paires de chaussures près de l'entrée.", tier: "low" },
            { id: 3, text: "Secoue rapidement un petit tapis.", tier: "low" },
            { id: 4, text: "Passe l'aspirateur sur la zone principale pendant une petite minute.", tier: "normal" },
            { id: 5, text: "Souffle un peu ici — tu as déjà bien bossé.", tier: "normal" },
            { id: 6, text: "Passe un coup d'aspirateur rapide le long des murs.", tier: "high" },
            { id: 7, text: "Ramasse une autre poignée de trucs qui traînent par terre.", tier: "high" },
            { id: 8, text: "Ramène dans leur pièce les objets qui s'étaient égarés.", tier: "high" },
            { id: 9, text: "Passe un coup d'aspirateur rapide sur le tapis.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_couch_reset",
          branch_name: "Remise en ordre du canapé",
          twigs: [
            { id: 1, text: "Enlève tous les coussins et pose-les sur le côté.", tier: "low" },
            { id: 2, text: "Récupère les saletés évidentes coincées dans les fentes.", tier: "low" },
            { id: 3, text: "Remets les coussins en place.", tier: "low" },
            { id: 4, text: "Plie les plaids et dispose-les proprement.", tier: "normal" },
            { id: 5, text: "Tape un coup sur 2 ou 3 coussins pour les gonfler et arrange-les.", tier: "normal" },
            { id: 6, text: "Passe un coup rapide de brosse ou de main sur le canapé.", tier: "high" },
            { id: 7, text: "Range proprement un plaid de rechange dans un coin.", tier: "high" },
            { id: 8, text: "Prends les tasses ou bols de gâteau qui traînent à côté.", tier: "high" },
            { id: 9, text: "Passe un vrai coup d'aspirateur entre les coussins.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_tv_reset",
          branch_name: "Rangement du coin TV",
          twigs: [
            { id: 1, text: "Rassemble toutes les télécommandes au même endroit.", tier: "low" },
            { id: 2, text: "Coince les câbles qui dépassent derrière le meuble TV.", tier: "low" },
            { id: 3, text: "Enlève les verres ou assiettes posés près de la télé.", tier: "low" },
            { id: 4, text: "Essuie doucement l'écran de la télé avec un chiffon sec.", tier: "normal" },
            { id: 5, text: "Aligne les objets posés sur le meuble TV.", tier: "normal" },
            { id: 6, text: "Dépoussière correctement le dessus du meuble TV.", tier: "high" },
            { id: 7, text: "Remets un peu d'ordre dans les boîtes de jeux ou boîtiers TV.", tier: "high" },
            { id: 8, text: "Attache les câbles emmêlés avec un lien ou un serre-câble.", tier: "high" },
            { id: 9, text: "Essuie les étagères du meuble TV.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_quick_reset",
          branch_name: "Coup de propre rapide",
          twigs: [
            { id: 1, text: "Ramasse tout ce qui n'est clairement pas à sa place.", tier: "low" },
            { id: 2, text: "Remets les coussins du canapé bien droits.", tier: "low" },
            { id: 3, text: "Apporte toute la vaisselle dans la cuisine.", tier: "low" },
            { id: 4, text: "Passe un coup rapide sur la table basse.", tier: "normal" },
            { id: 5, text: "Plie 1 plaid et range-le.", tier: "normal" },
            { id: 6, text: "Passe un coup d'aspirateur sur la zone centrale.", tier: "high" },
            { id: 7, text: "Dépoussière les surfaces les plus visibles.", tier: "high" },
            { id: 8, text: "Prends tout ce qui va dans une autre pièce et range-le là-bas.", tier: "high" },
            { id: 9, text: "Jette un dernier coup d'œil et ajuste les derniers détails évidents.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 4,
      category_code: "bedroom",
      category_name: "Chambre",
      branches: [
        {
          branch_id: "bd_bed_reset",
          branch_name: "Rangement du lit",
          twigs: [
            { id: 1, text: "Remonte grossièrement la couette ou la couverture sur le lit.", tier: "low" },
            { id: 2, text: "Remets l'oreiller bien droit en haut.", tier: "low" },
            { id: 3, text: "Coince les morceaux de drap qui dépassent sur les côtés.", tier: "low" },
            { id: 4, text: "Lisse la couette pour qu'elle ait l'air bien plate.", tier: "normal" },
            { id: 5, text: "Installe correctement les oreillers.", tier: "normal" },
            { id: 6, text: "Enlève les vêtements ou objets posés sur le lit.", tier: "high" },
            { id: 7, text: "Secoue bien la couette.", tier: "high" },
            { id: 8, text: "Borde proprement les draps des deux côtés.", tier: "high" },
            { id: 9, text: "Plie proprement les couvertures d'appoint au bout du lit.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_nightstand_reset",
          branch_name: "Table de chevet",
          twigs: [
            { id: 1, text: "Prends les tasses ou verres qui traînent sur la table de chevet.", tier: "low" },
            { id: 2, text: "Jette les déchets évidents comme les emballages ou mouchoirs.", tier: "low" },
            { id: 3, text: "Empile proprement les livres ou magazines.", tier: "low" },
            { id: 4, text: "Range proprement ton câble de chargeur.", tier: "normal" },
            { id: 5, text: "Passe un coup rapide sur le dessus de la table de chevet.", tier: "normal" },
            { id: 6, text: "Vide complètement la table de chevet et nettoie-la bien.", tier: "high" },
            { id: 7, text: "Ouvre le tiroir et jette 3 trucs inutiles.", tier: "high" },
            { id: 8, text: "Remets les objets sur la table — uniquement ceux dont tu te sers vraiment.", tier: "high" },
            { id: 9, text: "Dépoussière la lampe de chevet.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_clothes_reset",
          branch_name: "Tri des vêtements",
          twigs: [
            { id: 1, text: "Attrape 3 vêtements qui traînent par terre.", tier: "low" },
            { id: 2, text: "Décide vite : propre ou sale ? Mets chacun au bon endroit.", tier: "low" },
            { id: 3, text: "Mets sur cintre 1 vêtement qui peut encore être porté.", tier: "low" },
            { id: 4, text: "Rassemble tous les vêtements sales au même endroit ou dans le panier.", tier: "normal" },
            { id: 5, text: "Plie 2 vêtements propres et range-les.", tier: "normal" },
            { id: 6, text: "Enlève tous les vêtements posés sur la chaise ou le sol.", tier: "high" },
            { id: 7, text: "Mets sur cintre tout ce qui peut l'être.", tier: "high" },
            { id: 8, text: "Range les vêtements pliés dans leurs tiroirs respectifs.", tier: "high" },
            { id: 9, text: "Apporte le panier à linge dans la buanderie.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_floor_reset",
          branch_name: "Rangement du sol",
          twigs: [
            { id: 1, text: "Ramasse 5 trucs sur le sol de la chambre.", tier: "low" },
            { id: 2, text: "Range tes chaussures au bon endroit.", tier: "low" },
            { id: 3, text: "Pousse tous les petits déchets dans un coin pour t'en occuper.", tier: "low" },
            { id: 4, text: "Dégage le passage entre la porte et le lit.", tier: "normal" },
            { id: 5, text: "Ramasse les déchets du coin et jette-les.", tier: "normal" },
            { id: 6, text: "Dégage correctement tout le reste du sol.", tier: "high" },
            { id: 7, text: "Passe l'aspirateur ou la serpillière sur la zone principale.", tier: "high" },
            { id: 8, text: "Passe l'aspirateur sous le bord du lit.", tier: "high" },
            { id: 9, text: "Remets le tapis bien droit s'il y en a un.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_quick_reset",
          branch_name: "Rafraîchissement rapide",
          twigs: [
            { id: 1, text: "Fais le lit grossièrement — remonte juste les draps.", tier: "low" },
            { id: 2, text: "Ramasse 5 trucs par terre.", tier: "low" },
            { id: 3, text: "Enlève la vaisselle ou les verres et apporte-les en cuisine.", tier: "low" },
            { id: 4, text: "Vide le dessus de la table de chevet.", tier: "normal" },
            { id: 5, text: "Mets tous les vêtements sales dans le panier.", tier: "normal" },
            { id: 6, text: "Fais de la place nette sur tout le sol.", tier: "high" },
            { id: 7, text: "Ouvre les rideaux ou les stores pour laisser entrer la lumière.", tier: "high" },
            { id: 8, text: "Essuie la surface poussiéreuse la plus visible.", tier: "high" },
            { id: 9, text: "Respire un coup — la chambre est prête.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 5,
      category_code: "laundry",
      category_name: "Lessive",
      branches: [
        {
          branch_id: "l_start_load",
          branch_name: "Lancer une machine",
          twigs: [
            { id: 1, text: "Prends le panier à linge et apporte-le vers la machine.", tier: "low" },
            { id: 2, text: "Trie une machine rapide : foncés ou clairs, selon ce qui est le plus plein.", tier: "low" },
            { id: 3, text: "Vérifie les poches avant de mettre les vêtements dedans.", tier: "low" },
            { id: 4, text: "Mets le linge dans le tambour.", tier: "normal" },
            { id: 5, text: "Ajoute la lessive dans le bon bac.", tier: "normal" },
            { id: 6, text: "Choisis le bon programme de lavage.", tier: "high" },
            { id: 7, text: "Appuie sur démarrer et mets un rappel pour la fin du cycle.", tier: "high" },
            { id: 8, text: "Pendant que ça commence, range ce qui traîne autour de la machine.", tier: "high" },
            { id: 9, text: "Essuie l'extérieur de la machine à laver.", tier: "high" }
          ]
        },
        {
          branch_id: "l_switch_load",
          branch_name: "Transférer le linge",
          twigs: [
            { id: 1, text: "Ouvre la porte de la machine à laver.", tier: "low" },
            { id: 2, text: "Sors deux ou trois vêtements du dessus et vérifie qu'ils sentent bon.", tier: "low" },
            { id: 3, text: "Mets le linge mouillé dans le sèche-linge ou sur l'étendoir.", tier: "low" },
            { id: 4, text: "Secoue chaque vêtement avant de l'étendre ou de le poser.", tier: "normal" },
            { id: 5, text: "Vérifie que rien n'est resté en boule ou entortillé.", tier: "normal" },
            { id: 6, text: "Lance le sèche-linge ou étends les derniers vêtements.", tier: "high" },
            { id: 7, text: "Nettoie le filtre à peluches du sèche-linge tant que tu y es.", tier: "high" },
            { id: 8, text: "Mets la machine suivante à tourner s'il reste du linge sale.", tier: "high" },
            { id: 9, text: "Mets un rappel pour la fin du sèche-linge.", tier: "high" }
          ]
        },
        {
          branch_id: "l_fold_five",
          branch_name: "Plier 5 vêtements",
          twigs: [
            { id: 1, text: "Prends le tas de linge propre et pose-le sur une surface plate.", tier: "low" },
            { id: 2, text: "Prends juste 1 vêtement et plie-le.", tier: "low" },
            { id: 3, text: "Plie un deuxième vêtement et pose-le dessus.", tier: "low" },
            { id: 4, text: "Plie le troisième et le quatrième.", tier: "normal" },
            { id: 5, text: "Plie le cinquième — objectif atteint !", tier: "normal" },
            { id: 6, text: "Continue sur ta lancée — plies-en 5 de plus.", tier: "high" },
            { id: 7, text: "Trie la pile par personne ou par type de vêtement.", tier: "high" },
            { id: 8, text: "Associe les chaussettes orphelines.", tier: "high" },
            { id: 9, text: "Empile le tout proprement, prêt à être rangé.", tier: "high" }
          ]
        },
        {
          branch_id: "l_room_reset",
          branch_name: "Nettoyage du coin linge",
          twigs: [
            { id: 1, text: "Ramasse les chaussettes ou vêtements égarés par terre.", tier: "low" },
            { id: 2, text: "Jette les boîtes de lessive ou emballages vides.", tier: "low" },
            { id: 3, text: "Aligne la lessive et les produits pour que ce soit bien rangé.", tier: "low" },
            { id: 4, text: "Essuie le dessus de la machine à laver.", tier: "normal" },
            { id: 5, text: "Vide le filtre à peluches du sèche-linge.", tier: "normal" },
            { id: 6, text: "Essuie le joint de la porte du sèche-linge.", tier: "high" },
            { id: 7, text: "Regarde si rien n'est tombé derrière les machines.", tier: "high" },
            { id: 8, text: "Passe un coup de balai rapide sur le sol.", tier: "high" },
            { id: 9, text: "Vérifie que les paniers vides sont bien empilés ou rangés.", tier: "high" }
          ]
        },
        {
          branch_id: "l_put_away",
          branch_name: "Ranger les vêtements",
          twigs: [
            { id: 1, text: "Prends la pile pliée et apporte-la dans la bonne chambre.", tier: "low" },
            { id: 2, text: "Ouvre le bon tiroir et ranges-y 3 vêtements.", tier: "low" },
            { id: 3, text: "Mets sur cintre 1 vêtement.", tier: "low" },
            { id: 4, text: "Range une autre poignée de vêtements pliés.", tier: "normal" },
            { id: 5, text: "Ferme bien le tiroir.", tier: "normal" },
            { id: 6, text: "Range tout le reste des vêtements pliés.", tier: "high" },
            { id: 7, text: "Mets tout le reste sur cintre dans l'armoire.", tier: "high" },
            { id: 8, text: "Remets le panier à linge vide à sa place.", tier: "high" },
            { id: 9, text: "Remets un peu d'ordre dans la penderie ou le tiroir.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 6,
      category_code: "digital_life",
      category_name: "Vie numérique",
      branches: [
        {
          branch_id: "d_inbox_zero",
          branch_name: "Tri de la boîte mail",
          twigs: [
            { id: 1, text: "Supprime 5 spams ou pubs évidents sans même les ouvrir.", tier: "low" },
            { id: 2, text: "Désabonne-toi d'une newsletter que tu ne lis jamais.", tier: "low" },
            { id: 3, text: "Mets une étoile ou un drapeau sur 1 mail important à traiter.", tier: "low" },
            { id: 4, text: "Archive 5 mails que tu as déjà lus.", tier: "normal" },
            { id: 5, text: "Supprime d'un coup 10 autres mails promotionnels.", tier: "normal" },
            { id: 6, text: "Réponds à 1 mail avec un message court de deux phrases.", tier: "high" },
            { id: 7, text: "Vide ton dossier spams ou corbeille.", tier: "high" },
            { id: 8, text: "Désabonne-toi de 2 autres listes de diffusion.", tier: "high" },
            { id: 9, text: "Classe 5 mails importants dans un dossier pour les retrouver plus tard.", tier: "high" }
          ]
        },
        {
          branch_id: "d_photo_purge",
          branch_name: "Tri des photos",
          twigs: [
            { id: 1, text: "Ouvre tes photos et trouve 3 clichés flous ou ratés.", tier: "low" },
            { id: 2, text: "Supprime ces 3 photos immédiatement.", tier: "low" },
            { id: 3, text: "Supprime 2 doublons ou photos prises par erreur.", tier: "low" },
            { id: 4, text: "Remonte à la semaine dernière et supprime tout ce qui est inutile.", tier: "normal" },
            { id: 5, text: "Ferme l'application — c'est suffisant pour le moment.", tier: "normal" },
            { id: 6, text: "Supprime 10 autres vieilles captures d'écran inutiles.", tier: "high" },
            { id: 7, text: "Prends un ancien mois au hasard et vire tous les ratés.", tier: "high" },
            { id: 8, text: "Choisis 5 photos que tu aimes vraiment et mets-les en favoris.", tier: "high" },
            { id: 9, text: "Sauvegarde tes photos sur le cloud ou ton ordinateur.", tier: "high" }
          ]
        },
        {
          branch_id: "d_desktop_reset",
          branch_name: "Nettoyage du bureau",
          twigs: [
            { id: 1, text: "Ferme toutes les fenêtres sauf celle dont tu as besoin.", tier: "low" },
            { id: 2, text: "Crée un dossier 'À trier' sur ton bureau et glisses-y 5 fichiers.", tier: "low" },
            { id: 3, text: "Supprime 3 vieux fichiers d'installation ou téléchargements obsolètes.", tier: "low" },
            { id: 4, text: "Vide la corbeille.", tier: "normal" },
            { id: 5, text: "Ferme les onglets de navigateur ouverts depuis des jours.", tier: "normal" },
            { id: 6, text: "Glisse 10 autres fichiers en vrac dans ton dossier à trier.", tier: "high" },
            { id: 7, text: "Supprime 5 vieilles captures d'écran sur le bureau.", tier: "high" },
            { id: 8, text: "Renomme 1 dossier pour savoir enfin ce qu'il contient.", tier: "high" },
            { id: 9, text: "Mets un fond d'écran plus épuré s'il est trop chargé.", tier: "high" }
          ]
        },
        {
          branch_id: "d_notifications_reset",
          branch_name: "Tri des notifications",
          twigs: [
            { id: 1, text: "Efface tout ton historique de notifications d'un seul geste.", tier: "low" },
            { id: 2, text: "Désactive les notifications pour 1 appli trop envahissante.", tier: "low" },
            { id: 3, text: "Mets ton téléphone en mode 'Ne pas déranger' pour la prochaine heure.", tier: "low" },
            { id: 4, text: "Va dans les paramètres et coupe le son d'une discussion de groupe trop bruyante.", tier: "normal" },
            { id: 5, text: "Désactive les pastilles de notification pour 2 applis non urgentes.", tier: "normal" },
            { id: 6, text: "Parcours tes paramètres de notifications et désactives-en 3 de plus.", tier: "high" },
            { id: 7, text: "Supprime ou archive 5 anciennes discussions terminées.", tier: "high" },
            { id: 8, text: "Enlève de l'écran d'accueil l'appli sur laquelle tu cliques toujours par erreur.", tier: "high" },
            { id: 9, text: "Définis des moments précis pour checker tes notifications — et bloque-les le reste du temps.", tier: "high" }
          ]
        },
        {
          branch_id: "d_phone_clutter",
          branch_name: "Nettoyage du téléphone",
          twigs: [
            { id: 1, text: "Supprime 1 appli que tu n'as pas ouverte depuis plus d'un mois.", tier: "low" },
            { id: 2, text: "Efface l'historique de recherche de ton téléphone.", tier: "low" },
            { id: 3, text: "Supprime 3 vieux fils de discussion SMS.", tier: "low" },
            { id: 4, text: "Déplace 3 applis utilitaires de ton écran d'accueil vers un dossier.", tier: "normal" },
            { id: 5, text: "Supprime 3 autres applis dont tu ne te sers absolument pas.", tier: "normal" },
            { id: 6, text: "Vide le dossier des téléchargements de ton téléphone.", tier: "high" },
            { id: 7, text: "Regarde ton espace de stockage — vire les plus gros fichiers inutiles.", tier: "high" },
            { id: 8, text: "Organise ton écran d'accueil pour ne garder que le strict nécessaire.", tier: "high" },
            { id: 9, text: "Redémarre ton téléphone pour vider la mémoire vive.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 7,
      category_code: "life_admin",
      category_name: "Admin du quotidien",
      branches: [
        {
          branch_id: "la_paper_sort",
          branch_name: "Tri du courrier et des papiers",
          twigs: [
            { id: 1, text: "Prends 5 feuilles dans la pile — juste 5.", tier: "low" },
            { id: 2, text: "Jette directement les pubs évidentes au recyclage.", tier: "low" },
            { id: 3, text: "Regroupe les papiers à garder dans une pile propre.", tier: "low" },
            { id: 4, text: "Ouvre 1 enveloppe qui traîne depuis un moment.", tier: "normal" },
            { id: 5, text: "Range 1 document important là où tu es sûr de le retrouver.", tier: "normal" },
            { id: 6, text: "Trie 10 autres papiers volants.", tier: "high" },
            { id: 7, text: "Recycle tout ce qui est inutile dans la pile.", tier: "high" },
            { id: 8, text: "Ouvre tout le reste du courrier non ouvert.", tier: "high" },
            { id: 9, text: "Classe les papiers à garder dans un dossier ou un tiroir.", tier: "high" }
          ]
        },
        {
          branch_id: "la_bill_pay",
          branch_name: "Point Factures",
          twigs: [
            { id: 1, text: "Ouvre ton application bancaire.", tier: "low" },
            { id: 2, text: "Regarde quel est ton solde actuel.", tier: "low" },
            { id: 3, text: "Vérifie la date de ta prochaine facture à payer.", tier: "low" },
            { id: 4, text: "Paye 1 facture qui arrive bientôt à échéance.", tier: "normal" },
            { id: 5, text: "Vérifie que ton dernier paiement a bien été validé.", tier: "normal" },
            { id: 6, text: "Paye une autre facture en retard ou imminente.", tier: "high" },
            { id: 7, text: "Mets un rappel pour l'échéance suivante.", tier: "high" },
            { id: 8, text: "Regarde tes 5 dernières transactions — rien d'anormal ?", tier: "high" },
            { id: 9, text: "Regarde si un abonnement s'est renouvelé sans que tu y penses.", tier: "high" }
          ]
        },
        {
          branch_id: "la_appointments",
          branch_name: "Rendez-vous & Réservations",
          twigs: [
            { id: 1, text: "Pense à 1 rendez-vous que tu repousses depuis trop longtemps.", tier: "low" },
            { id: 2, text: "Trouve le numéro ou le site internet dont tu as besoin.", tier: "low" },
            { id: 3, text: "Regarde ton calendrier pour trouver deux ou trois créneaux libres.", tier: "low" },
            { id: 4, text: "Prends le rendez-vous — par téléphone, message ou en ligne.", tier: "normal" },
            { id: 5, text: "Ajoute-le immédiatement à ton calendrier.", tier: "normal" },
            { id: 6, text: "Configure un rappel pour la veille pour ne pas l'oublier.", tier: "high" },
            { id: 7, text: "Pense à un deuxième rendez-vous à prendre et réserve-le.", tier: "high" },
            { id: 8, text: "Note ce que tu dois préparer ou apporter avec toi.", tier: "high" },
            { id: 9, text: "Configure un second rappel 1 heure avant l'événement.", tier: "high" }
          ]
        },
        {
          branch_id: "la_budget",
          branch_name: "Point Budget",
          twigs: [
            { id: 1, text: "Ouvre ton appli bancaire et regarde juste le solde.", tier: "low" },
            { id: 2, text: "Parcours tes 3 dernières transactions.", tier: "low" },
            { id: 3, text: "Regarde si quelque chose te surprend ou paraît louche.", tier: "low" },
            { id: 4, text: "Identifie de tête un domaine où tu as plus dépensé que prévu.", tier: "normal" },
            { id: 5, text: "Ferme l'application — en prendre conscience est déjà un grand pas.", tier: "normal" },
            { id: 6, text: "Vérifie si des abonnements se sont renouvelés ces derniers temps.", tier: "high" },
            { id: 7, text: "Résilie 1 abonnement dont tu ne te sers pas.", tier: "high" },
            { id: 8, text: "Mets un tout petit peu d'argent de côté — même 5 € ça compte.", tier: "high" },
            { id: 9, text: "Note un truc financier que tu veux régler cette semaine.", tier: "high" }
          ]
        },
        {
          branch_id: "la_file_organize",
          branch_name: "Classement des documents",
          twigs: [
            { id: 1, text: "Prends 3 papiers en vrac autour de toi.", tier: "low" },
            { id: 2, text: "Décide : action requise, classement, ou poubelle ?", tier: "low" },
            { id: 3, text: "Jette ou recycle ceux qui ne servent plus.", tier: "low" },
            { id: 4, text: "Mets les papiers à traiter bien en vue pour ne pas les oublier.", tier: "normal" },
            { id: 5, text: "Range les papiers à conserver dans un dossier.", tier: "normal" },
            { id: 6, text: "Trie 5 papiers de plus dans le retard accumulé.", tier: "high" },
            { id: 7, text: "Crée un nouveau dossier pour un sujet dont tu perds toujours la trace.", tier: "high" },
            { id: 8, text: "Scanne ou prends en photo 1 document important pour en avoir une copie numérique.", tier: "high" },
            { id: 9, text: "Vide un dossier plein de vieux documents obsolètes.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 8,
      category_code: "work_productivity",
      category_name: "Travail & Productivité",
      branches: [
        {
          branch_id: "w_workspace_reset",
          branch_name: "Bureau propre",
          twigs: [
            { id: 1, text: "Prends 3 déchets sur ton bureau et jette-les.", tier: "low" },
            { id: 2, text: "Rapporte les tasses ou verres en cuisine.", tier: "low" },
            { id: 3, text: "Regroupe les papiers volants en une seule pile dans un coin.", tier: "low" },
            { id: 4, text: "Passe un coup rapide sur ton clavier et ta souris.", tier: "normal" },
            { id: 5, text: "Ferme tous les onglets du navigateur que tu n'utilises pas.", tier: "normal" },
            { id: 6, text: "Vide la pile de papiers en classant ou jetant chaque feuille.", tier: "high" },
            { id: 7, text: "Essuie ton écran avec un chiffon sec.", tier: "high" },
            { id: 8, text: "Range les stylos, câbles et autres objets qui encombrent ton espace.", tier: "high" },
            { id: 9, text: "Vide la corbeille de ton bureau.", tier: "high" }
          ]
        },
        {
          branch_id: "w_start_session",
          branch_name: "Démarrer la session",
          twigs: [
            { id: 1, text: "Note l'unique tâche vraiment importante de ta journée.", tier: "low" },
            { id: 2, text: "Ferme tout ce qui n'a pas de rapport avec cette tâche sur ton écran.", tier: "low" },
            { id: 3, text: "Pose ton téléphone face cachée ou mets-le dans une autre pièce.", tier: "low" },
            { id: 4, text: "Ouvre le document, l'appli ou l'onglet dont tu as besoin.", tier: "normal" },
            { id: 5, text: "Lance un minuteur de 25 minutes et lance-toi.", tier: "normal" },
            { id: 6, text: "À la fin du temps, fais 5 minutes de pause puis réinitialise.", tier: "high" },
            { id: 7, text: "Note où tu t'es arrêté pour reprendre facilement plus tard.", tier: "high" },
            { id: 8, text: "Ferme à nouveau les onglets inutiles — ils reviennent toujours.", tier: "high" },
            { id: 9, text: "Note la prochaine petite action à faire sur cette tâche avant de t'arrêter.", tier: "high" }
          ]
        },
        {
          branch_id: "w_next_step",
          branch_name: "Se débloquer",
          twigs: [
            { id: 1, text: "Écris en une seule phrase ce qui te bloque.", tier: "low" },
            { id: 2, text: "Divise ce blocage en 2 toutes petites étapes faisables.", tier: "low" },
            { id: 3, text: "Fais la toute première petite étape maintenant.", tier: "low" },
            { id: 4, text: "Si tu n'arrives pas à démarrer, écris pourquoi de façon précise.", tier: "normal" },
            { id: 5, text: "Prends le plus petit bout du problème et fais uniquement ça.", tier: "normal" },
            { id: 6, text: "Lance un minuteur de 10 minutes et avance comme tu peux.", tier: "high" },
            { id: 7, text: "Écris 'fait' à côté de ce que tu viens d'accomplir — ça compte !", tier: "high" },
            { id: 8, text: "Repère l'étape suivante immédiate après celle-ci.", tier: "high" },
            { id: 9, text: "Enchaîne directement sur l'étape d'après tant que tu as de l'élan.", tier: "high" }
          ]
        },
        {
          branch_id: "w_weekly_planning",
          branch_name: "Planification de la semaine",
          twigs: [
            { id: 1, text: "Prends une feuille de papier ou ouvre une appli de notes.", tier: "low" },
            { id: 2, text: "Écris tout ce que tu as en tête, sans filtre.", tier: "low" },
            { id: 3, text: "Entoure l'unique priorité absolue de ta semaine.", tier: "low" },
            { id: 4, text: "Note 2 autres tâches importantes qui doivent être faites cette semaine.", tier: "normal" },
            { id: 5, text: "Ajoute ces 3 priorités dans ton calendrier ou ton appli.", tier: "normal" },
            { id: 6, text: "Barre ou supprime tout ce qui n'a pas besoin d'être fait sur ta liste.", tier: "high" },
            { id: 7, text: "Attribue un jour indicatif à chacune des 3 priorités.", tier: "high" },
            { id: 8, text: "Configure 1 rappel pour chaque priorité pour libérer ton esprit.", tier: "high" },
            { id: 9, text: "Ferme ton document de planification — c'est fini, passe à l'action.", tier: "high" }
          ]
        },
        {
          branch_id: "w_shutdown",
          branch_name: "Fin de journée",
          twigs: [
            { id: 1, text: "Écris la première chose par laquelle tu veux commencer demain.", tier: "low" },
            { id: 2, text: "Ferme tous tes onglets et fichiers de travail.", tier: "low" },
            { id: 3, text: "Jette les derniers petits déchets sur ton bureau.", tier: "low" },
            { id: 4, text: "Regarde ta liste et coche ce que tu as fini aujourd'hui.", tier: "normal" },
            { id: 5, text: "Reporte à demain ou supprime ce qui n'a pas été fait.", tier: "normal" },
            { id: 6, text: "Range ton carnet ou ton agenda.", tier: "high" },
            { id: 7, text: "Ferme ton ordinateur portable ou éteins ton écran.", tier: "high" },
            { id: 8, text: "Éloigne-toi physiquement de ton bureau.", tier: "high" },
            { id: 9, text: "C'est fini ! Le travail est terminé pour aujourd'hui, tu as assez fait.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 9,
      category_code: "morning_routine",
      category_name: "Routine du matin",
      branches: [
        {
          branch_id: "m_wake_up",
          branch_name: "Réveil en douceur",
          twigs: [
            { id: 1, text: "Éteins ton réveil.", tier: "low" },
            { id: 2, text: "Assieds-toi au bord du lit un court instant.", tier: "low" },
            { id: 3, text: "Ouvre les rideaux ou les stores pour laisser entrer la lumière.", tier: "low" },
            { id: 4, text: "Pose les pieds au sol et reste assis pendant 30 secondes.", tier: "normal" },
            { id: 5, text: "Lève-toi. Le plus dur est fait, c'est fait !", tier: "normal" },
            { id: 6, text: "Enfile tes pantoufles ou chaussures pour dire à ton cerveau que c'est parti.", tier: "high" },
            { id: 7, text: "Fais grossièrement ton lit — remonte juste la couette.", tier: "high" },
            { id: 8, text: "Pense à un petit truc sympa qui t'attend aujourd'hui.", tier: "high" },
            { id: 9, text: "Prends la direction de la cuisine — la suite s'y passe.", tier: "high" }
          ]
        },
        {
          branch_id: "m_hygiene_reset",
          branch_name: "Toilette rapide",
          twigs: [
            { id: 1, text: "Asperge-toi le visage d'eau fraîche.", tier: "low" },
            { id: 2, text: "Brosse-toi les dents.", tier: "low" },
            { id: 3, text: "Mets du déodorant.", tier: "low" },
            { id: 4, text: "Nettoie correctement ton visage.", tier: "normal" },
            { id: 5, text: "Applique ta crème ou ton soin habituel si tu en as un.", tier: "normal" },
            { id: 6, text: "Coiffe-toi ou remets tes cheveux en ordre.", tier: "high" },
            { id: 7, text: "Habille-toi — même si tu restes à la maison.", tier: "high" },
            { id: 8, text: "Mets au moins un haut propre — ça change tout au moral.", tier: "high" },
            { id: 9, text: "Jette un coup d'œil rapide dans le miroir — tu es prêt !", tier: "high" }
          ]
        },
        {
          branch_id: "m_hydration",
          branch_name: "Hydration & Énergie",
          twigs: [
            { id: 1, text: "Bois un grand verre d'eau — en premier, avant toute autre chose.", tier: "low" },
            { id: 2, text: "Allume la bouilloire ou lance le café.", tier: "low" },
            { id: 3, text: "Prends tes médicaments du matin ou tes vitamines si nécessaire.", tier: "low" },
            { id: 4, text: "Bois ton thé ou ton café tranquillement — pas d'écran pendant 5 minutes.", tier: "normal" },
            { id: 5, text: "Finis ta boisson avant de commencer autre chose.", tier: "normal" },
            { id: 6, text: "Prends un petit en-cas si tu n'es pas prêt pour un vrai petit-déjeuner.", tier: "high" },
            { id: 7, text: "Remplis ta gourde pour la journée.", tier: "high" },
            { id: 8, text: "Mets la vaisselle de la veille dans l'évier.", tier: "high" },
            { id: 9, text: "Profites-en pour donner un coup de chiffon sur le comptoir.", tier: "high" }
          ]
        },
        {
          branch_id: "m_breakfast",
          branch_name: "Petit-déjeuner simple",
          twigs: [
            { id: 1, text: "Ouvre le frigo et regarde ce que tu as sous la main.", tier: "low" },
            { id: 2, text: "Choisis le plus simple — tartines, céréales, yaourt...", tier: "low" },
            { id: 3, text: "Prépare-le. Ne te prends pas la tête.", tier: "low" },
            { id: 4, text: "Assieds-toi pour manger — pas debout au-dessus de l'évier.", tier: "normal" },
            { id: 5, text: "Accompagne ça d'une boisson — de l'eau ou un jus.", tier: "normal" },
            { id: 6, text: "Pose directement ta vaisselle dans l'évier quand tu as fini.", tier: "high" },
            { id: 7, text: "Nettoie le plan de travail là où tu t'es préparé à manger.", tier: "high" },
            { id: 8, text: "Range tout ce que tu as laissé traîner.", tier: "high" },
            { id: 9, text: "Tu as mangé, et c'est déjà une très bonne chose.", tier: "high" }
          ]
        },
        {
          branch_id: "m_day_kickoff",
          branch_name: "Lancement de la journée",
          twigs: [
            { id: 1, text: "Note l'unique chose que tu doit absolument faire aujourd'hui.", tier: "low" },
            { id: 2, text: "Vérifie si tu as des rendez-vous ou des appels de prévus.", tier: "low" },
            { id: 3, text: "Regarde ton téléphone — gère uniquement ce qui est urgent.", tier: "low" },
            { id: 4, text: "Note une deuxième tâche que tu aimerais accomplir s'il te reste du temps.", tier: "normal" },
            { id: 5, text: "Pose ton téléphone et commence cette première tâche importante.", tier: "normal" },
            { id: 6, text: "Travaille 10 minutes sur cette priorité avant toute autre chose.", tier: "high" },
            { id: 7, text: "Fais le point : comment te sens-tu ? Ajuste tes objectifs si besoin.", tier: "high" },
            { id: 8, text: "Configure 1 rappel pour plus tard afin de ne rien oublier.", tier: "high" },
            { id: 9, text: "La journée est lancée ! Tu as commencé, c'est l'essentiel.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 10,
      category_code: "evening_routine",
      category_name: "Routine du soir",
      branches: [
        {
          branch_id: "e_wind_down",
          branch_name: "Transition du soir",
          twigs: [
            { id: 1, text: "Éteins les lumières principales et allume des lampes d'appoint.", tier: "low" },
            { id: 2, text: "Pose ton téléphone à l'autre bout de la pièce.", tier: "low" },
            { id: 3, text: "Installe-toi confortablement et ne fais rien pendant 2 minutes.", tier: "low" },
            { id: 4, text: "Bois un verre d'eau.", tier: "normal" },
            { id: 5, text: "Mets une ambiance calme : de la musique douce, un podcast ou le silence.", tier: "normal" },
            { id: 6, text: "Remets un peu d'ordre dans la pièce principale — juste le plus visible.", tier: "high" },
            { id: 7, text: "Prépare ce dont tu auras besoin pour demain matin.", tier: "high" },
            { id: 8, text: "Règle ton réveil pour demain.", tier: "high" },
            { id: 9, text: "Prends 5 inspirations lentes avant d'aller te coucher.", tier: "high" }
          ]
        },
        {
          branch_id: "e_digital_wind_down",
          branch_name: "Déconnexion numérique",
          twigs: [
            { id: 1, text: "Ferme tes réseaux sociaux et tes onglets.", tier: "low" },
            { id: 2, text: "Mets ton téléphone en mode 'Ne pas déranger'.", tier: "low" },
            { id: 3, text: "Branche ton téléphone loin de ta table de chevet.", tier: "low" },
            { id: 4, text: "Vide tes notifications pour démarrer la journée de demain à zéro.", tier: "normal" },
            { id: 5, text: "Ferme ton ordinateur portable ou éteins ton écran.", tier: "normal" },
            { id: 6, text: "Ne touche plus à ton téléphone pendant au moins 20 minutes.", tier: "high" },
            { id: 7, text: "Écris toutes les pensées qui tournent dans ta tête pour t'en libérer.", tier: "high" },
            { id: 8, text: "Lis un vrai livre papier — même juste quelques pages.", tier: "high" },
            { id: 9, text: "Finis les écrans ! Ton cerveau te dira merci.", tier: "high" }
          ]
        },
        {
          branch_id: "e_tomorrow_prep",
          branch_name: "Préparations pour demain",
          twigs: [
            { id: 1, text: "Pense à la toute première chose à faire demain.", tier: "low" },
            { id: 2, text: "Écris-la là où tu la verras dès ton réveil.", tier: "low" },
            { id: 3, text: "Vérifie si tu as des affaires à emporter demain.", tier: "low" },
            { id: 4, text: "Pose ces objets près de la porte dès maintenant.", tier: "normal" },
            { id: 5, text: "Vérifie que ton téléphone charge bien pour demain.", tier: "normal" },
            { id: 6, text: "Prépare tes vêtements pour demain.", tier: "high" },
            { id: 7, text: "Prépare ce qu'il faut pour le petit-déjeuner — même juste sortir le bol.", tier: "high" },
            { id: 8, text: "Règle ton réveil si ce n'est pas encore fait.", tier: "high" },
            { id: 9, text: "Tout est prêt pour demain. C'est parfait comme ça.", tier: "high" }
          ]
        },
        {
          branch_id: "e_bedroom_reset",
          branch_name: "Préparation de la chambre",
          twigs: [
            { id: 1, text: "Ramasse 3 trucs qui traînent par terre.", tier: "low" },
            { id: 2, text: "Mets tes vêtements à leur place — panier ou cintre.", tier: "low" },
            { id: 3, text: "Enlève tout ce qui n'a rien à faire sur ta table de chevet.", tier: "low" },
            { id: 4, text: "Ouvre la couette pour pouvoir te glisser au lit facilement.", tier: "normal" },
            { id: 5, text: "Installe un verre d'eau à côté du lit.", tier: "normal" },
            { id: 6, text: "Ferme les rideaux ou les stores.", tier: "high" },
            { id: 7, text: "Branche ton téléphone — si possible loin de ton lit.", tier: "high" },
            { id: 8, text: "Félicite-toi pour ce que tu as accompli aujourd'hui.", tier: "high" },
            { id: 9, text: "La chambre est prête. Tu peux dormir tranquille.", tier: "high" }
          ]
        },
        {
          branch_id: "e_sleep_prep",
          branch_name: "Heure de dormir",
          twigs: [
            { id: 1, text: "Brosse-toi les dents.", tier: "low" },
            { id: 2, text: "Lave-toi le visage ou fais ton soin de nuit.", tier: "low" },
            { id: 3, text: "Mets ton pyjama.", tier: "low" },
            { id: 4, text: "Prends tes médicaments du soir si nécessaire.", tier: "normal" },
            { id: 5, text: "Glisse-toi sous les draps.", tier: "normal" },
            { id: 6, text: "Éteins la lumière principale.", tier: "high" },
            { id: 7, text: "Pas de téléphone — pose-le maintenant.", tier: "high" },
            { id: 8, text: "Prends 5 grandes inspirations lentes et détends-toi.", tier: "high" },
            { id: 9, text: "Tu as fait de ton mieux aujourd'hui. Repose-toi.", tier: "high" }
          ]
        }
      ]
    }
  ]
};