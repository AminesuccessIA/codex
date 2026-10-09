# Acquisition, SEO et visibilité dans les moteurs IA

État du 9 octobre 2026. Domaine canonique : https://www.lapepiite.com.

## Audit et actions réalisées

- Audit HTTP des 27 pages initiales : pages accessibles, un H1 par page, canoniques cohérentes. Le domaine sans www redirige vers www. La principale faiblesse commerciale était l’absence de parcours de qualification et de ressources pour les acheteurs en phase de préparation.
- Ajout de `/diagnostic` : besoin, contexte, mode d’intervention, calendrier, organisation et interlocuteur. Les CTA de l’accueil et des expertises préremplissent le sujet. La page d’origine est incluse dans la demande pour faciliter sa qualification ; aucun suivi de navigation n’est ajouté.
- L’envoi automatique dépend des mêmes contrôles que le formulaire existant. Lorsque ceux-ci ne sont pas validés, la demande est préparée dans une messagerie ou copiée par le visiteur. Elle n’est ni enregistrée sur le serveur, ni considérée comme reçue avant son envoi effectif.
- Ajout de `/ressources`, quatre guides originaux et une checklist PDF en accès libre. Les guides comprennent une réponse directe, une méthode, des questions fréquentes, des sources Microsoft et un lien vers le cadrage du projet correspondant.
- Sitemap étendu aux 33 pages ; descriptions par expertise ; données structurées Organization, Service, Article et BreadcrumbList cohérentes avec le contenu visible. Les informations juridiques de l’organisation proviennent des données confirmées par le dirigeant.
- `/llms.txt` propose un index lisible des offres et ressources. Son utilisation par les moteurs IA reste expérimentale : ce fichier ne garantit aucune indexation ni citation. L’essentiel repose sur des pages HTML accessibles et des réponses sourcées.
- PDF exclu de l’indexation par un en-tête `X-Robots-Tag: noindex`, afin de privilégier les pages explicatives.
- Aucun outil publicitaire, traceur d’audience, pixel ni cookie marketing ajouté. Aucun bandeau supplémentaire nécessaire pour ces changements.

## Réception des demandes : blocage à lever

Le contrôle de renouvellement OAuth Google a retourné `invalid_grant`. Aucun message de test n’a été envoyé et aucune réception réelle n’est attestée. Le contrôle ne révèle pas le contenu des secrets. Les identifiants Codex ne prouvent pas la présence des mêmes secrets dans Vercel Production.

1. Régénérer un refresh token Google avec le client OAuth existant, accès hors ligne et portée `https://www.googleapis.com/auth/gmail.send`. Procédure détaillée : [Google Workspace](google-workspace.md). Si l’application OAuth externe est en mode Testing, vérifier les règles d’expiration des jetons et son mode de publication ; ne pas contourner les restrictions Workspace.
2. Mettre à jour `GOOGLE_OAUTH_REFRESH_TOKEN` dans les secrets Codex et Vercel Production. Vérifier `GOOGLE_OAUTH_CLIENT_ID` et `GOOGLE_OAUTH_CLIENT_SECRET`. Ne jamais transmettre ces valeurs dans le chat ni les committer.
3. Vérifier les contrats applicables Google Workspace et Vercel et renseigner les paramètres privés `PRIVACY_EMAIL_PROCESSOR`, `PRIVACY_HOST_PROCESSOR`, `PRIVACY_TRANSFER_DETAILS` avec les informations réelles.
4. Valider la protection contre les abus dans le contexte Vercel réel. Ne pas activer `CONTACT_ABUSE_PROTECTION_VERIFIED` sur la seule base du honeypot. La limitation mémoire de l’application ne suffit pas à démontrer une limitation globale entre plusieurs instances.
5. Après validation des paramètres et protections, activer les contrôles appropriés : `CONTACT_FORM_ENABLED`, `CONTACT_PRIVACY_APPROVED`, `CONTACT_ABUSE_PROTECTION_VERIFIED`. Vérifier l’envoi et la réception sur **contact@lapepiite.com**, puis attester `CONTACT_EMAIL_VERIFIED` après recette. Pour préparer cette recette sans ouverture publique, utiliser une préproduction contrôlée.
6. Redéployer après une modification de variables Vercel. Vérifier le parcours public et la réception ; un test simulé de l’interface ne vaut pas une preuve de réception Gmail.

Sans ces opérations, le parcours de préparation par e-mail reste disponible. Il ne remplace pas la réception automatique d’un formulaire.

## Alimenter le site : ordre recommandé

| Priorité | Contenu à produire                               | Question de l’acheteur                             | Conversion et preuve nécessaires                                                                |
| -------- | ------------------------------------------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1        | Licences Power BI : auteurs, lecteurs, capacités | Comment diffuser mes rapports à mes équipes ?      | Lien vers Power BI et diagnostic ; conditions Microsoft datées et vérifiées, sans prix obsolète |
| 2        | Préparer un pilote Microsoft 365 Copilot         | Mes données et permissions sont-elles prêtes ?     | Liste de préparation, cadrage Copilot ; sources Microsoft actualisées                           |
| 3        | Business Central : migration et interfaces       | Comment relier ERP, CRM et reporting ?             | Cartographie d’interfaces et critères de recette, sans promettre une migration standard         |
| 4        | Power Automate : processus et exceptions         | Quels flux automatiser en premier ?                | Exemple clairement présenté comme scénario ; licences, supervision et responsabilités           |
| 5        | Azure : arbitrer une première vague de migration | Que migrer et comment maîtriser le risque ?        | Inventaire, dépendances, reprise et estimation fondée sur un périmètre explicite                |
| 6        | Sécuriser Microsoft 365 : identités et terminaux | Par où commencer avec Entra, Intune et Defender ?  | Prérequis, ordre d’intervention et limites de périmètre                                         |
| 7        | Consultant ou projet au forfait                  | Quel mode d’intervention convient à mon besoin ?   | Explication des engagements et critères de qualification, sans disponibilités fictives          |
| 8        | Fiche de mission réelle autorisée                | Quelle expérience est pertinente pour mon projet ? | Contexte, périmètre, livrables, résultats vérifiables et autorisation client                    |

Publier des contenus utiles et relus plutôt qu’un volume de pages répétitives. Chaque guide doit avoir un responsable de relecture, une date réelle, des sources officielles, une expertise liée et un appel à l’action adapté. Revoir les conditions de licences et produits avant publication, puis lors des changements Microsoft. Ne pas créer de faux témoignages, notes, certifications, implantations ou résultats chiffrés.

## Mesurer et indexer : accès propriétaire nécessaires

- Google Search Console : ajouter/vérifier la propriété de domaine `lapepiite.com`, obtenir le TXT officiel dans Search Console et l’ajouter dans le gestionnaire DNS effectivement utilisé. Si les DNS sont chez WordPress, utiliser ses réglages DNS. Ne pas modifier les MX Google Workspace.
- Soumettre `https://www.lapepiite.com/sitemap.xml`. Contrôler les rapports d’indexation et les anciennes URL WordPress ; le crawl public ne donne pas accès à l’historique Search Console. Conserver les vraies 404 lorsqu’aucun équivalent n’est confirmé.
- Bing Webmaster Tools : vérifier la propriété et soumettre le même sitemap. La création de comptes et leur validation ne sont pas réalisées depuis le dépôt.
- Suivre les demandes reçues dans Google Workspace : sujet, besoin, mode, source, suite donnée. Un libellé Gmail dédié facilite le tri. Une demande envoyée par mailto ne permet pas de mesurer automatiquement une conversion.
- Avant tout ajout d’outil de mesure, définir les indicateurs utiles et réévaluer les obligations de consentement et la politique de confidentialité. Ne pas présenter l’absence actuelle de mesure comme une preuve de trafic ou de performance.
- La présence dans Google et les réponses IA dépend de l’exploration, de l’indexation, des contenus et de signaux externes. Aucun rang, délai ou nombre de prospects n’est garanti.

## Informations encore utiles

Badge Microsoft officiel et URL du profil public propre à La Pépiite IT ; droits de publication et contexte de missions client ; auteur technique des prochaines ressources ; accès Search Console ; réception e-mail réelle et paramètres contractuels des sous-traitants. Le site peut présenter les offres confirmées sans inventer ces éléments.
