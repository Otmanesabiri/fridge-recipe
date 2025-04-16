# Fridge Recipe

Fridge Recipe est une application web qui permet aux utilisateurs de trouver des recettes en fonction des ingrédients disponibles dans leur réfrigérateur. Ce projet vise à réduire le gaspillage alimentaire et à rendre la cuisine plus accessible à tous.

## Fonctionnalités

- **Recherche par ingrédients** : Entrez simplement les ingrédients de votre frigo, et Fridge Recipe vous suggérera des recettes réalisables.
- **Interface conviviale** : Design épuré et intuitif pour une expérience utilisateur fluide.
- **Design responsive** : Entièrement optimisé pour les appareils desktop et mobiles.
- **Filtrage avancé** : Par temps de préparation, type de cuisine et régimes alimentaires.
- **Recettes favorites** : Sauvegardez vos recettes préférées.
- **Liste de courses** : Créez des listes de courses à partir des recettes sélectionnées.

## Technologies utilisées

- **Frontend** : TypeScript, CSS et React (framework Next.js).
- **Backend** : Firebase pour l'authentification et la gestion de base de données.
- **DevOps** : Nix pour des environnements de développement reproductibles.

## Prérequis

- Node.js (version 16 ou supérieure)
- Firebase CLI
- Un compte Firebase avec un projet configuré

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <url-du-repo>
   cd fridge-recipe
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez Firebase :
   ```bash
   firebase login
   firebase init
   ```

## Démarrage

Pour lancer l'application en mode développement :
```bash
npm run dev
```

Ensuite, ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

- `src/app/page.tsx` : Point d'entrée principal de l'application.
- `src/components/` : Composants réutilisables.
- `src/styles/` : Fichiers de style.
- `src/lib/` : Utilitaires et fonctions d'aide.
- `src/services/` : Services d'interaction avec Firebase.
- `public/` : Ressources statiques comme les images.

## Déploiement

Pour déployer l'application sur Firebase Hosting :
```bash
npm run build
firebase deploy --only hosting
```

Pour déployer les fonctions Cloud Functions :
```bash
firebase deploy --only functions
```

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter notre guide de contribution pour plus de détails.

## Captures d'écran

### Version 1.0
![Capture d'écran du 2025-04-15 14-59-58](https://github.com/user-attachments/assets/130b74e6-5030-4bda-9421-a4f0d668c84b)

### Version 1.2
![Capture d'écran du 2025-04-15 15-15-01](https://github.com/user-attachments/assets/b9996915-c57e-4656-aceb-c9da38bca839)
