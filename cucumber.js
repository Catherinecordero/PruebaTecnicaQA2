module.exports = {
  default: {
    require: ['features/step-definitions/*.js'],
    timeout: 60000,
    format: ['json:reports/cucumber-report.json']
  }
};