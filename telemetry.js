

const appInsights = require("applicationinsights");

// Reemplaza con tu Instrumentation Key o Connection String desde Azure
const connectionString = "InstrumentationKey=0cdf9bc8-bd00-483a-9d20-93ad62066176";

appInsights.setup(connectionString)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .start();

const telemetryClient = appInsights.defaultClient;

module.exports = telemetryClient;
