import {defineConfig} from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  e2e:  {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
      excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples'],
  },
  env: {
      Email: 'rserv1101@gmail.com',
      Password: 'Cypre$$12',
    }
  
});  