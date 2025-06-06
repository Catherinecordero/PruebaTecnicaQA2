require('dotenv').config();

class LoginNetflix {
  static async perform(page) {
    console.log('🔐 Iniciando sesión en Netflix...');

    await page.goto('https://www.netflix.com/login', { waitUntil: 'load' });

    // Verificar si el input para login está presente (es decir, no está logueado aún)
    const loginInputExists = await page.locator('input[name="userLoginId"]').count();

    if (loginInputExists > 0) {
      // Hacer login normal
      await page.fill('input[name="userLoginId"]', process.env.NETFLIX_USER);
      await page.fill('input[name="password"]', process.env.NETFLIX_PASS);
      await page.click('button[type="submit"]');

      // Esperar selección de perfil
      await page.waitForSelector('.profile-icon', { timeout: 15000 });
      await page.click('.profile-icon');

      // Esperar home del perfil
      await page.waitForLoadState('domcontentloaded');
    } else {
      console.log('Ya está logueado o en la selección de perfil, saltando login...');
      // Opcional: si estás en la selección de perfil, darle click al perfil
      const profileExists = await page.locator('.profile-icon').count();
      if (profileExists > 0) {
        await page.click('.profile-icon');
        await page.waitForLoadState('domcontentloaded');
      }
    }

    console.log('🎬 Navegando a la sección de suspenso...');
    await page.goto('https://www.netflix.com/browse/genre/8933');

    try {
      await page.waitForSelector('.title-card-container .fallback-text', { timeout: 15000 });

      const titles = await page.$$eval('.title-card-container .fallback-text', nodes =>
        nodes.slice(0, 3).map(n => n.textContent.trim())
      );

      console.log('\n🎞 Películas de suspenso encontradas:');
      titles.forEach((title, i) => console.log(`${i + 1}. ${title}`));

      console.log('\n🌐 URL actual:', page.url());
    } catch (e) {
      console.error('❌ No se encontraron títulos. Error:', e);
      throw e;
    }
  }
}

module.exports = { LoginNetflix };