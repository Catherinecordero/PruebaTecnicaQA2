require('dotenv').config();

class LoginGmail {
  static async perform(page) {
    console.log('🔐 Iniciando sesión en Gmail (modo móvil)...');

    await page.goto('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn', { waitUntil: 'domcontentloaded' });

    console.log('Esperando campo email...');
    await page.waitForSelector('input[type="email"]', { state: 'visible' });
    console.log('Campo email visible, llenando usuario...');
    await page.fill('input[type="email"]', process.env.GMAIL_USER);
    await page.click('#identifierNext');

    console.log('Esperando campo password visible y activo...');
    await page.waitForSelector('input[type="password"]:not([aria-hidden="true"])', { state: 'visible', timeout: 30000 });

    // Opcional: validar que no está disabled ni readOnly
    await page.waitForFunction(() => {
      const pwdInput = document.querySelector('input[type="password"]:not([aria-hidden="true"])');
      return pwdInput && !pwdInput.disabled && !pwdInput.readOnly;
    }, { timeout: 30000 });

    await page.fill('input[type="password"]:not([aria-hidden="true"])', process.env.GMAIL_PASS);
    await page.click('#passwordNext');

    console.log('Esperando que cargue el inbox...');
    await page.waitForSelector('div[role="main"]', { timeout: 30000 });

    console.log('Inicio de sesión Gmail exitoso.');
  }
}

module.exports = { LoginGmail };
