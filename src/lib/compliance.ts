// Registry data and owner-confirmed publisher; contact retention policy selected for this site.
// Public company records checked on 9 October 2026 (Pappers and Annuaire des entreprises).
export const verifiedLegalData: Record<string, string> = {
  LEGAL_COMPANY_NAME: 'LA PEPIITE',
  LEGAL_COMPANY_FORM: 'SAS — société par actions simplifiée',
  LEGAL_REGISTRATION_NUMBER: 'SIREN 888 294 733 · SIRET 888 294 733 00025',
  LEGAL_REGISTER: '888 294 733 RCS Pontoise',
  LEGAL_ADDRESS: '32 boulevard du Port, 95000 Cergy, France',
  LEGAL_CAPITAL: '2 000 €',
  LEGAL_VAT: 'FR10888294733',
  LEGAL_PUBLICATION_DIRECTOR: 'Julien Ezonga',
  LEGAL_HOST_NAME: 'Vercel Inc.',
  LEGAL_HOST_ADDRESS: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  LEGAL_HOST_CONTACT: 'https://vercel.com',
  PRIVACY_RETENTION:
    'Pour une demande qui ne donne pas lieu à un contrat : 12 mois à compter du dernier échange, puis suppression des messages et pièces associés. Si un contrat est conclu, les données nécessaires à son exécution et aux obligations légales relèvent de durées distinctes, précisées dans la documentation contractuelle.',
};
export function legalValue(
  name: string,
  env: Record<string, string | undefined> = process.env,
) {
  return env[name]?.trim() || verifiedLegalData[name];
}
export const complianceFields = [
  ['LEGAL_COMPANY_NAME', 'Raison sociale'],
  ['LEGAL_COMPANY_FORM', 'Forme juridique'],
  ['LEGAL_REGISTRATION_NUMBER', 'SIREN ou SIRET'],
  ['LEGAL_REGISTER', 'Registre d’immatriculation'],
  ['LEGAL_ADDRESS', 'Adresse du siège'],
  ['LEGAL_PUBLICATION_DIRECTOR', 'Directeur de publication'],
  ['LEGAL_HOST_NAME', 'Raison sociale de l’hébergeur'],
  ['LEGAL_HOST_ADDRESS', 'Adresse de l’hébergeur'],
  ['LEGAL_HOST_CONTACT', 'Coordonnées de l’hébergeur'],
  ['PRIVACY_RETENTION', 'Durée et critères de conservation des demandes'],
  ['PRIVACY_EMAIL_PROCESSOR', 'Entité contractuelle du prestataire e-mail'],
  [
    'PRIVACY_HOST_PROCESSOR',
    'Entité contractuelle du prestataire d’hébergement',
  ],
  [
    'PRIVACY_TRANSFER_DETAILS',
    'Localisation des traitements et garanties des transferts éventuels',
  ],
] as const;
export function missingComplianceFields(
  env: Record<string, string | undefined> = process.env,
) {
  return complianceFields
    .filter(([name]) => !legalValue(name, env))
    .map(([name]) => name);
}
export function formIsEnabled(
  env: Record<string, string | undefined> = process.env,
) {
  return (
    env.CONTACT_FORM_ENABLED === 'true' &&
    env.CONTACT_EMAIL_VERIFIED === 'true' &&
    env.CONTACT_ABUSE_PROTECTION_VERIFIED === 'true' &&
    env.CONTACT_PRIVACY_APPROVED === 'true' &&
    missingComplianceFields(env).length === 0
  );
}
export function privacyIsApproved(
  env: Record<string, string | undefined> = process.env,
) {
  return (
    env.CONTACT_PRIVACY_APPROVED === 'true' &&
    missingComplianceFields(env).length === 0
  );
}
