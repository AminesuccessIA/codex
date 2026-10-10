import type { Guide } from './guides';
export type VisualDiagram = {
  title: string;
  layout:
    'network' | 'flow' | 'stack' | 'matrix' | 'orbit' | 'branch' | 'comparison';
  labels: string[];
  center?: string;
  columns?: [string, string];
};
export const serviceDiagrams: Record<string, VisualDiagram> = {
  'microsoft-365': {
    title: 'Un espace de travail relié',
    layout: 'network',
    center: 'Microsoft 365',
    labels: ['Teams', 'SharePoint', 'Exchange', 'OneDrive'],
  },
  licences: {
    title: 'Aligner droits et besoins',
    layout: 'matrix',
    labels: ['Profils', 'Usages', 'Droits', 'Échéances'],
  },
  'azure-cloud': {
    title: 'Construire le socle cloud',
    layout: 'stack',
    labels: ['Applications', 'Services Azure', 'Données', 'Identités'],
  },
  'copilot-ia': {
    title: 'Une IA reliée aux usages',
    layout: 'flow',
    labels: ['Besoin métier', 'Données utiles', 'Réponse', 'Validation'],
  },
  'power-platform': {
    title: 'Relier les processus',
    layout: 'network',
    center: 'Vos processus',
    labels: ['Power Apps', 'Dataverse', 'Power Automate', 'Connecteurs'],
  },
  cybersecurite: {
    title: 'Protéger les accès',
    layout: 'orbit',
    center: 'Gouvernance',
    labels: ['Identités', 'Terminaux', 'Données', 'Surveillance'],
  },
  'conseil-integration': {
    title: 'Cadrer, puis mettre en œuvre',
    layout: 'flow',
    labels: ['Périmètre', 'Arbitrages', 'Intégration', 'Transmission'],
  },
  'support-services-manages': {
    title: 'Organiser la continuité',
    layout: 'orbit',
    center: 'Exploitation',
    labels: ['Demande', 'Diagnostic', 'Intervention', 'Suivi'],
  },
  'power-bi': {
    title: 'Une chaîne de données lisible',
    layout: 'stack',
    labels: ['Sources', 'Modèle', 'Mesures', 'Rapports'],
  },
  'microsoft-fabric': {
    title: 'Un socle analytique partagé',
    layout: 'stack',
    labels: ['Ingestion', 'OneLake', 'Traitements', 'Modèles'],
  },
  'power-apps': {
    title: 'Du besoin à l’application',
    layout: 'matrix',
    labels: ['Utilisateurs', 'Écrans', 'Données', 'Règles'],
  },
  'power-automate': {
    title: 'Un flux à règles explicites',
    layout: 'branch',
    center: 'Votre processus',
    labels: ['Déclencheur', 'Conditions', 'Actions', 'Exceptions'],
  },
  'dynamics-365': {
    title: 'Relier la relation client',
    layout: 'flow',
    labels: ['Contacts', 'Opportunités', 'Activités', 'Service'],
  },
  'business-central': {
    title: 'Relier les opérations',
    layout: 'matrix',
    labels: ['Achats', 'Stock', 'Ventes', 'Finance'],
  },
  'teams-telephonie': {
    title: 'Organiser les appels',
    layout: 'branch',
    center: 'Téléphonie',
    labels: ['Entrée', 'Routage', 'Équipes', 'Sortie'],
  },
  intune: {
    title: 'Un parc administré',
    layout: 'matrix',
    labels: ['Appareils', 'Applications', 'Stratégies', 'Conformité'],
  },
  'windows-365': {
    title: 'Un environnement accessible',
    layout: 'network',
    center: 'PC Cloud',
    labels: ['Utilisateur', 'Applications', 'Appareils', 'Accès'],
  },
  'azure-devops': {
    title: 'De la version à la livraison',
    layout: 'flow',
    labels: ['Code', 'Tests', 'Validation', 'Déploiement'],
  },
};
const guideDiagrams: Record<string, VisualDiagram> = {
  'preparer-projet-power-bi': {
    title: 'Préparer le projet Power BI',
    layout: 'matrix',
    labels: ['Indicateurs', 'Sources', 'Droits', 'Recette'],
  },
  'preparer-microsoft-365-copilot': {
    title: 'Préparer un pilote Copilot',
    layout: 'matrix',
    labels: ['Cas d’usage', 'Accès', 'Données', 'Pilote'],
  },
  'business-central-ou-dynamics-365-crm': {
    title: 'ERP et CRM : deux périmètres',
    layout: 'comparison',
    columns: ['ERP', 'CRM'],
    labels: ['Achats · stock', 'Finance', 'Contacts', 'Relation client'],
  },
  'checklist-migration-azure': {
    title: 'Préparer la migration Azure',
    layout: 'flow',
    labels: ['Inventaire', 'Dépendances', 'Migration', 'Exploitation'],
  },
  'power-automate-choisir-premier-processus': {
    title: 'Choisir un premier processus',
    layout: 'matrix',
    labels: ['Fréquence', 'Règles', 'Exceptions', 'Responsable'],
  },
  'assistance-technique-ou-projet-forfait': {
    title: 'Choisir le mode d’intervention',
    layout: 'comparison',
    columns: ['Consultant', 'Forfait'],
    labels: ['Compétence', 'Durée · TJM', 'Périmètre', 'Livrables'],
  },
  'securiser-microsoft-365-identites-terminaux': {
    title: 'Cadrer la protection de M365',
    layout: 'orbit',
    center: 'Microsoft 365',
    labels: ['Identités', 'Terminaux', 'Accès', 'Suivi'],
  },
  'licences-power-bi-auteurs-lecteurs': {
    title: 'Qualifier les rôles Power BI',
    layout: 'comparison',
    columns: ['Auteurs', 'Lecteurs'],
    labels: ['Créer', 'Publier', 'Consulter', 'Accéder'],
  },
};
export function guideDiagram(guide: Guide): VisualDiagram {
  return (
    guideDiagrams[guide.slug] ?? {
      title: guide.category,
      layout: 'matrix',
      labels: guide.sections
        .slice(0, 4)
        .map((section) => section.title.replace(/^\d+[.)]\s*/, '')),
    }
  );
}
