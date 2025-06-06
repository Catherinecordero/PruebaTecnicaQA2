# Proyecto de Automatización con Playwright

## Escenarios

### 1. Netflix (Web)
- Inicia sesión
- Maximiza pantalla
- Imprime URL y títulos de 3 películas de suspenso

### 2. Gmail (Móvil)
- Simula dispositivo móvil
- Inicia sesión en Gmail
- Imprime mensaje de acceso exitoso

## Variables de entorno

Crear `.env`:

```
NETFLIX_USER=...
NETFLIX_PASS=...
GMAIL_USER=...
GMAIL_PASS=...
```

## Instrucciones por primera vez

```bash
cd C:\Users\Usuario\Downloads\playwright_netflix_gmail_screenplay_automation
npm install
npm install dotenv
npm install --save-dev multiple-cucumber-html-reporter
npx playwright install
npx cucumber-js
npm run report

## Instrucciones despues
cd C:\Users\Usuario\Downloads\playwright_netflix_gmail_screenplay_automation
npm run test
npm run report"# PruebaTecnicaQA2"  
