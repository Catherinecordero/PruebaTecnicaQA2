const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { createActor } = require('../../src/actors/actor');
const { LoginNetflix } = require('../../src/tasks/LoginNetflix');

let actor;

Before(async function () {
  actor = createActor();
  await actor.init(false);  // false = navegador normal (no móvil)
  this.actor = actor;
  this.page = actor.page;
});

After(async function () {
  if (actor) {
    await actor.stop();
    actor = null;
  }
});

Given('el usuario abre Netflix y se loguea', { timeout: 30000 }, async function () {
  await LoginNetflix.perform(this.page);
});

When('maximiza la pantalla', async function () {
  await this.page.setViewportSize({ width: 1920, height: 1080 });
  console.log('📺 Pantalla maximizada a 1920x1080');
});

Then('imprime los títulos de tres películas de suspenso y la URL actual', async function () {
  // Ya se imprimió en LoginNetflix.perform, así que aquí no haces nada o solo confirmas que estés en la página correcta
  console.log('Ya se imprimieron los títulos y la URL en el login.');
});