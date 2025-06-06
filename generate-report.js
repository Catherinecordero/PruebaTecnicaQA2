const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',            // Carpeta donde están los archivos JSON generados por Cucumber
  reportPath: 'reports/html-report',  // Carpeta donde se va a crear el reporte HTML (no archivo .html)
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10'
    }
  },
  customData: {
    title: 'Netflix & Gmail Automation',
    data: [
      { label: 'Proyecto', value: 'Screenplay con Playwright y Cucumber' },
      { label: 'QA', value: 'CATHERINE CORDERO' },
      { label: 'Fecha', value: new Date().toLocaleDateString() },
    ]
  }
});
