Ce projet est un redigé en Typescript et tourne sous nextjs.

## Getting Started

### Development

Pour lancer le serveur de developpement `npm run dev`

Le serveur sera lancé sur le port 3000 de votre machine.

### Production

Pour la mise en production faire `npm run build`

Si il n'y a aucne erreur dans l'execution c'est que le code ne comporte pas d'erreur de syntaxe.
Ensuite faire `npm start`.

### Change the port

Par defaut le port sur nextjs est le 3000. Pour le modifier il faut ajouter dans les scripts présent dans package.json l'argument `-p <port>`.

Example : 
```json
{
  "name": "civam-ardeche",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 8080",
    "lint": "next lint"
  },
  ...
}
```

## Manage Users

### Add admin user

Pour ajouter un utilisateur à la base de donnée il faut decommenter la fonction POST du fichier `@/src/app/api/auth/register/route.ts`, lancer le serveur puis soumettre la commande `curl -X POST -H "Content-Type: application/json" -d '{"username":"newuser", "password":"newpassword"}' http://localhost:3000/api/auth/register`.

ATTENTION à bien recommenter la fonction avant la remise en production, il n'y a aucune authentification sur l'ajout d'utilisateur ce qui permettrait a n'importe qui en possession de l'URL de rajouter un utilisateur.

### Remove admin user

Aucun mecanisme de retrait d'utilisateur n'est prévu, il faut le retirer manuelement de la base de donnée sqlite décrite dans le fichier `@/data/ferme.bd`.