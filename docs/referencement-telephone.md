# Activer le référencement depuis un téléphone

Aucune installation ni téléchargement. Le formulaire est traité séparément, à la demande du dirigeant.

## Google Search Console, sans modification DNS

1. Ouvrir https://search.google.com/search-console avec le compte Google qui doit administrer le site.
2. Ajouter une propriété **Préfixe de l’URL** et saisir exactement `https://www.lapepiite.com/`.
3. Dans les méthodes de validation, sélectionner **Balise HTML**. Copier la balise `<meta name="google-site-verification" ...>` fournie par Google. Cette balise est un identifiant de vérification destiné à être public dans le code HTML ; ce n’est pas un mot de passe, un jeton OAuth ou une clé API.
4. Fournir cette balise pour qu’elle soit ajoutée au site, puis attendre la confirmation de publication avant de toucher **Valider** dans Search Console. Ne pas supprimer la balise après validation.
5. Dans **Sitemaps**, soumettre `https://www.lapepiite.com/sitemap.xml` (ou `sitemap.xml` si l’interface affiche déjà le préfixe).
6. Inspecter les URL prioritaires : accueil, solutions Microsoft, Power BI, Copilot, Azure, Business Central et ressources. Demander leur indexation si elles sont éligibles. Une demande d’indexation ne garantit ni son exécution immédiate ni une position dans les résultats.

Cette méthode couvre les URL du préfixe www HTTPS choisi. Elle ne remplace pas une propriété **Domaine**, qui couvre tous les protocoles et sous-domaines et nécessite une validation DNS. Une propriété Domaine pourra être ajoutée ensuite. Les URL sans www redirigent vers la version canonique www.

Si une propriété existe déjà avec les bons droits, réutiliser celle-ci. Si l’interface mobile masque les commandes, activer la version ordinateur du navigateur. Ne communiquer aucun mot de passe, code de connexion, cookie ou secret.

## Bing Webmaster Tools

Après validation Google, ouvrir https://www.bing.com/webmasters/ et utiliser l’import Search Console s’il est proposé. Examiner les autorisations affichées avant de connecter les comptes. Vérifier le site importé et le sitemap. À défaut, utiliser la méthode de vérification HTML proposée par Bing ; son code public peut être ajouté au site.

## Documents et preuves utiles

- URL du profil public Microsoft propre à La Pépiite IT et badge officiel autorisé : les fournir ici pour intégration. Un identifiant Partner Center privé ne remplace pas un profil public.
- URL de la page LinkedIn de l’entreprise : fournir le lien exact avant de l’ajouter aux liens sociaux et aux données structurées.
- Pour une fiche client : nom autorisé, contexte, intervention réelle, livrables, résultats vérifiables et autorisation de publication. Les scénarios existants ne deviennent pas des missions client par simple changement de titre.
- Sur Google Business Profile, vérifier d’abord l’éligibilité réelle de l’activité, les conditions d’accueil et la zone de service. Ne pas créer une implantation locale sur la seule base de l’adresse du siège.

## Priorités après validation

Contrôler les pages découvertes et indexées, puis les requêtes et impressions dans Search Console. Rechercher les anciennes URL WordPress signalées avant de proposer leurs redirections. Alimenter les ressources avec des réponses métier, des sources Microsoft actuelles et des liens vers les expertises. Une visibilité dans les moteurs IA ne peut pas être activée par un bouton ni garantie par un fichier `llms.txt`.
