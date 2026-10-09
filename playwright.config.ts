import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3100',
    browserName: 'chromium',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
  },
  webServer: [
    {
      command: 'npm run start -- --port 3100',
      url: 'http://127.0.0.1:3100',
      reuseExistingServer: false,
      env: {
        CONTACT_FORM_ENABLED: 'false',
        CONTACT_PRIVACY_APPROVED: 'false',
        CONTACT_EMAIL_VERIFIED: 'false',
        GOOGLE_OAUTH_CLIENT_ID: '',
        GOOGLE_OAUTH_CLIENT_SECRET: '',
        GOOGLE_OAUTH_REFRESH_TOKEN: '',
        CONTACT_WEBHOOK_URL: '',
        CONTACT_WEBHOOK_TOKEN: '',
      },
      timeout: 30000,
    },
    {
      command: 'npm run start -- --port 3101',
      url: 'http://127.0.0.1:3101',
      reuseExistingServer: false,
      env: {
        GOOGLE_OAUTH_CLIENT_ID: '',
        GOOGLE_OAUTH_CLIENT_SECRET: '',
        GOOGLE_OAUTH_REFRESH_TOKEN: '',
        CONTACT_WEBHOOK_URL: '',
        CONTACT_WEBHOOK_TOKEN: '',
        CONTACT_FORM_ENABLED: 'true',
        CONTACT_EMAIL_VERIFIED: 'true',
        CONTACT_PRIVACY_APPROVED: 'true',
        CONTACT_ABUSE_PROTECTION_VERIFIED: 'true',
        PRIVACY_EMAIL_PROCESSOR: 'TEST FIXTURE ONLY',
        PRIVACY_HOST_PROCESSOR: 'TEST FIXTURE ONLY',
        PRIVACY_TRANSFER_DETAILS: 'TEST FIXTURE ONLY',
      },
      timeout: 30000,
    },
  ],
  outputDir: 'test-results',
});
