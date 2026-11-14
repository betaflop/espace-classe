# Construire l'app Android

1. Dépose tous ces fichiers dans le dépôt GitHub (glisser-déposer, sans écraser index.html).
2. Remplace `[NOM ET PRÉNOM DU RESPONSABLE]` et `[ADRESSE E-MAIL DE CONTACT]` dans privacy.html et delete-account.html.
3. Crée les 4 secrets GitHub (voir SECRETS-A-GARDER.txt).
4. Onglet Actions > "Construire l'application Android" > Run workflow.
5. Télécharge `espace-classe-aab` dans les artefacts, puis envoie le .aab dans Play Console (test fermé).

L'identifiant de l'app est dans capacitor.config.json (`appId`). Il doit être identique au nom de package de l'app Android déclarée dans Firebase.
