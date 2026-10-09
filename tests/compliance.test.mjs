import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formIsEnabled,
  missingComplianceFields,
  complianceFields,
} from '../src/lib/compliance.ts';
test('verified company and hosting details leave private email configuration required', () => {
  const missing = missingComplianceFields({});
  assert.ok(!missing.includes('LEGAL_COMPANY_NAME'));
  assert.ok(!missing.includes('LEGAL_PUBLICATION_DIRECTOR'));
  assert.ok(!missing.includes('PRIVACY_RETENTION'));
  assert.ok(!missing.includes('LEGAL_HOST_CONTACT'));
  assert.ok(missing.includes('PRIVACY_EMAIL_PROCESSOR'));
});
test('opening requires complete information, email verification and anti-abuse protection', () => {
  const env = Object.fromEntries(
    complianceFields.map(([name]) => [name, 'TEST FIXTURE ONLY']),
  );
  Object.assign(env, {
    CONTACT_FORM_ENABLED: 'true',
    CONTACT_EMAIL_VERIFIED: 'true',
    CONTACT_PRIVACY_APPROVED: 'true',
    CONTACT_ABUSE_PROTECTION_VERIFIED: 'true',
  });
  assert.equal(formIsEnabled(env), true);
  for (const key of [
    'CONTACT_FORM_ENABLED',
    'CONTACT_EMAIL_VERIFIED',
    'CONTACT_PRIVACY_APPROVED',
    'CONTACT_ABUSE_PROTECTION_VERIFIED',
    'PRIVACY_EMAIL_PROCESSOR',
    'PRIVACY_TRANSFER_DETAILS',
  ]) {
    assert.equal(formIsEnabled({ ...env, [key]: '' }), false, key);
  }
});
