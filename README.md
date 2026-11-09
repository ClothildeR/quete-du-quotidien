# Quête du Quotidien

Une application pour organiser son quotidien en douceur, avec Mimie le jour et Beau Babe la nuit : quêtes, marche,
repas de la semaine, budget et suivi du cycle.

**Ouvrir l'application : https://clothilder.github.io/quete-du-quotidien/**

> Version de test. Des fonctions manquent encore et des changements sont à prévoir. Pense à créer régulièrement un
> fichier de sauvegarde (voir plus bas).

## Installer l'application

C'est gratuit, sans compte et sans passer par une boutique d'applications.

**Sur iPhone**
1. Ouvre l'adresse ci-dessus dans **Safari**.
2. Touche le bouton **Partager**, puis **Sur l'écran d'accueil**.
3. Ouvre l'application **depuis son icône**, puis choisis ton code.

Fais-le dans cet ordre : ce qui est créé dans Safari ne se retrouve pas dans l'application installée.

**Sur Android**
Ouvre l'adresse dans Chrome, puis menu ⋮ → **Ajouter à l'écran d'accueil** (ou **Installer l'application**).

## Ce que fait l'application

| Écran | Contenu |
|---|---|
| **Accueil** | Les quêtes du jour, le menu, le budget restant et le cycle en un coup d'œil |
| **Quotidien** | Quêtes à cocher, retour sur les jours passés, pas et bilan du mois avec calories estimées |
| **Repas** | Semaine composée automatiquement, équilibre légumes et féculents, restes, cantine, prix estimé |
| **Mon foyer** | Le midi de chaque personne, budget repas, allergies et restrictions |
| **Budget** | Ce qu'il reste, enveloppes avec plafond, mouvements récurrents, objectifs d'épargne |
| **Cycle** | Facultatif : estimations, historique, conseils, repas adaptés les jours de règles |
| **Réglages** | Prénom, ambiance jour ou nuit, code, sauvegarde, espace de test |

### Comment les repas s'équilibrent
- Le premier repas choisi dans la journée fixe le suivant : féculents puis légumes, ou l'inverse.
- Les restes et la cantine comptent comme de vrais repas dans cet équilibre.
- Le dîner est commun. Si les midis diffèrent, **ce qu'ont mangé les enfants passe en priorité**.
- Le samedi et le dimanche, tout le monde mange à la maison.
- Un dîner choisi à la main n'est jamais remplacé.

## Tes données

- **Tout reste sur ton téléphone**, chiffré (AES-256) avec une clé protégée par ton code.
- Pas de compte, pas de publicité, pas de statistiques, aucun envoi vers un serveur.
- L'application se verrouille dès que tu la quittes.
- Ce dépôt ne contient que l'application elle-même, **jamais les données de personne**.

### À savoir absolument
- **Si tu oublies ton code, tes données sont perdues.** Personne ne peut les récupérer : c'est ce qui les protège.
- **Si tu perds ton téléphone ou supprimes l'application, tes données disparaissent.** Crée régulièrement un fichier
  dans Réglages → Sauvegarde, et garde-le avec son code.
- Choisis un code long, mêlant lettres et chiffres : il est la seule protection de tes données.
- Sur iPhone, une application web ne peut ni bloquer les captures d'écran, ni lire Apple Santé, ni envoyer de rappels.

### Limites importantes
- **Allergies** : le filtre se base sur la liste des ingrédients des recettes et ne garantit pas l'absence de traces.
  En cas d'allergie, vérifie toujours les étiquettes.
- **Cycle** : ce sont des estimations calendaires. Ce n'est ni un avis médical, ni un moyen de contraception.
- **Prix et calories** : ce sont des approximations.

## Mises à jour

Elles s'installent seules. Une nouvelle version apparaît à la deuxième ouverture de l'application après sa publication ;
le numéro est visible dans Réglages → Espace test → Vérifications.

## Ce que contient ce dépôt

Uniquement la version construite de l'application, publiée avec GitHub Pages. Le code source est conservé ailleurs.

Polices : [Fredoka](fonts/OFL-Fredoka.txt) et [Nunito](fonts/OFL-Nunito.txt), sous licence SIL Open Font License.
