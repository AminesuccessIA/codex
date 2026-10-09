import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formIsEnabled,
  missingComplianceFields,
  complianceFields,
} from '../src/lib/compliance.ts';
test('verified registry and confirmed publisher leave contractual hosting details incomplete', () => {
  const missing = missingComplianceFields({});
  assert.ok(!missing.includes('LEGAL_COMPANY_NAME'));
  assert.ok(!missing.includes('LEGAL_PUBLICATION_DIRECTOR'));
  assert.ok(!missing.includes('PRIVACY_RETENTION'));
  assert.ok(missing.includes('LEGAL_HOST_CONTACT'));
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
    'LEGAL_HOST_CONTACT',
    'PRIVACY_TRANSFER_DETAILS',
  ]) {
    assert.equal(formIsEnabled({ ...env, [key]: '' }), false, key);
  }
});
