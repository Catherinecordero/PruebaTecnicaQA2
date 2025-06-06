const playwright = require('playwright');

function createActor() {
  let browser, context, page;

  return {
    async init(isMobile = false) {
      browser = await playwright.chromium.launch({ headless: false });
      if (isMobile) {
        const device = playwright.devices['Pixel 5'];
        context = await browser.newContext({
          ...device,
          locale: 'es-ES',
        });
      } else {
        context = await browser.newContext({
          locale: 'es-ES',
        });
      }
      page = await context.newPage();
      this.page = page;
    },

    async stop() {
      if (browser) {
        await browser.close();
        browser = null;
        context = null;
        page = null;
        this.page = null;
      }
    }
  };
}

module.exports = { createActor };