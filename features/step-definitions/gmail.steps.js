const { Given, Then, Before, After } = require('@cucumber/cucumber');
const { createActor } = require('../../src/actors/actor');
const { LoginGmail } = require('../../src/tasks/LoginGmail');

let actor;

Before(async function () {
  actor = createActor();
  await actor.init(true);  // true = emulación móvil
  this.actor = actor;
  this.page = actor.page;
});

After(async function () {
  if (actor) {
    await actor.stop();
    actor = null;
  }
});

Given('el usuario abre Gmail desde un dispositivo móvil y se loguea', { timeout: 60000 }, async function () {
  await LoginGmail.perform(this.page);
});

Then('imprime el mensaje de inicio de sesión exitoso', async function () {
  console.log('✅ Escenario completado: sesión iniciada en Gmail.');
});